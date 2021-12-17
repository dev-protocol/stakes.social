import { SWRCachePath } from './cache-path'
import {
  UnwrapFunc,
  whenDefinedAll
} from '../utility'
import ipfsHttpClient from 'ipfs-http-client'
import BufferList from 'bl'
import { always } from 'ramda'
import useSWR from 'swr'

const getIPFS =
  async (ipfs: ReturnType<typeof ipfsHttpClient>, cid: string): Promise<string | undefined> =>
    (async (iterator) => {
      for await (const data of iterator) {
        const content = new BufferList()
        if (data.type === 'file' && data.content) {
          for await (const chunk of data.content) {
            content.append(Buffer.from(chunk))
          }
        }
        return content.length ? content.toString('base64') : undefined
      }
    })(ipfs.get(cid)).catch(always(undefined))

export const useGetIPFS = (cid?: string) => {
  const ipfs = ipfsHttpClient({
    host: 'ipfs.infura.io',
    apiPath: 'api/v0',
    port: 5001,
    protocol: 'https',
  })
  const { data, error } = useSWR<UnwrapFunc<typeof getIPFS>, Error>(
    SWRCachePath.getIPFS(cid),
    () =>
      whenDefinedAll([ipfs, cid], ([client, cid]) => getIPFS(client, cid)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { base64: data, error }
}
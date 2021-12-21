import { SWRCachePath } from './cache-path'
import {
  UnwrapFunc,
  whenDefinedAll
} from '../utility'
import ipfsHttpClient from 'ipfs-http-client'
import BufferList from 'bl'
import { always } from 'ramda'
import useSWR from 'swr'

const signatures = {
  "/9j/": "image/jpg",
  iVBORw0KGgo: "image/png",
  R0lGODdh: "image/gif",
  R0lGODlh: "image/gif",
};

const getURI = (base64: string) => {
  for (let [key, value] of Object.entries(signatures)) {
    if (base64.startsWith(key)) {
      return "data:" + value + ";base64," + base64
    }
  }
  return base64
}

const getIPFS =
  async (ipfs: ReturnType<typeof ipfsHttpClient>, cid: string): Promise<string | undefined> =>
    (async (iterator) => {
      const content = new BufferList()
      for await (const data of iterator) {
        if (data.type === 'file' && data.content) {
          for await (const chunk of data.content) {
            content.append(Buffer.from(chunk))
          }
        }
      }
      return content.length ? getURI(content.toString('base64')) : undefined
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
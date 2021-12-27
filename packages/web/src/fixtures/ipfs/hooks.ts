import { SWRCachePath } from './cache-path'
import { UnwrapFunc, whenDefinedAll } from '../utility'
import ipfsHttpClient from 'ipfs-http-client'
import useSWR from 'swr'
import { useCallback } from 'react'
import { UndefinedOr, whenDefined } from '@devprotocol/util-ts'
import { getIpfs } from './functions/getIpfs'
export { useIPFSImageUploader } from './functions/useIPFSImageUploader'

const ipfs = ipfsHttpClient({
  host: 'ipfs.infura.io',
  apiPath: 'api/v0',
  port: 5001,
  protocol: 'https'
})

export const useGetIPFS = (cid?: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getIpfs>, Error>(
    SWRCachePath.getIPFS(cid),
    () => whenDefinedAll([ipfs, cid], ([client, cid]) => getIpfs(client, cid)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { base64: data, error }
}

export const useImageDataUri = (path?: string) => {
  const { dataUriFetcher } = useImageDataUriFetcher()
  const { data, error } = useSWR<UndefinedOr<string>, Error>(path, () => dataUriFetcher(path), {
    revalidateOnFocus: false,
    focusThrottleInterval: 0
  })
  return { data, error }
}

export const useImageDataUriFetcher = () => {
  const dataUriFetcher = useCallback(async (path?: string) => {
    return whenDefined(path, receivedPath => {
      const isDataUri = receivedPath.startsWith('data:')
      const isIPFS = receivedPath.startsWith('ipfs:')
      return isDataUri ? receivedPath : isIPFS ? getIpfs(ipfs, receivedPath.replace(/^ipfs:\/\//i, '')) : undefined
    })
  }, [])
  return { dataUriFetcher }
}

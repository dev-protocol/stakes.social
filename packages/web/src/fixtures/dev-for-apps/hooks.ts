import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { getUser, postUser } from './utility'

export const useGetUser = (walletAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getUser>, Error>(
    SWRCachePath.getUser(walletAddress),
    () => getUser(walletAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

export const usePostUser = (name: string, signMessage: string, signature: string, walletAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof postUser>, Error>(
    SWRCachePath.postUser(name, signature, walletAddress),
    () => postUser(name, signMessage, signature, walletAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

import { useState, useCallback } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { getUser, postUser } from './utility'

export const useGetUser = (walletAddress: string) => {
  const shouldFetch = walletAddress !== ''
  const { data, error } = useSWR<UnwrapFunc<typeof getUser>, Error>(
    shouldFetch ? SWRCachePath.getUser(walletAddress) : null,
    () => getUser(walletAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

export const usePostUser = () => {
  const key = 'useGetUser'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const postUserHandler = useCallback(
    async (name: string, signMessage: string, signature: string, walletAddress: string) => {
      setIsLoading(true)
      setError(undefined)
      return postUser(name, signMessage, signature, walletAddress)
        .then(result => {
          setIsLoading(false)
          return result
        })
        .catch(err => {
          setError(err)
          message.error({ content: err.message, key })
          setIsLoading(false)
          return {}
        })
    },
    []
  )

  return { postUserHandler, isLoading, error }
}

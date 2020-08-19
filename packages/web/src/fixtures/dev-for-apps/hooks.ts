import { useState } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { getUser, postUser, getPropertyTags, postPropertyTags } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

export const useGetUser = (walletAddress: string) => {
  const shouldFetch = walletAddress !== ''
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getUser>, Error>(
    shouldFetch ? SWRCachePath.getUser(walletAddress) : null,
    () => getUser(walletAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error, mutate }
}

export const usePostUser = (walletAddress: string) => {
  const key = 'useGetUser'
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const shouldFetch = walletAddress !== ''
  const { data, mutate } = useSWR<UnwrapFunc<typeof getUser>, Error>(
    shouldFetch ? SWRCachePath.getUser(walletAddress) : null
  )

  const postUserHandler = async (name: string) => {
    const signMessage = `submit display name: ${name}`
    const signature = (await sign(signMessage)) || ''

    setIsLoading(true)
    message.loading({ content: 'update display name...', duration: 0, key })

    await mutate(
      postUser(name, signMessage, signature, walletAddress)
        .then(result => {
          message.success({ content: 'success update display name', key })
          return result
        })
        .catch(err => {
          message.error({ content: err.message, key })
          return Promise.reject(data)
        }),
      false
    )

    setIsLoading(false)
  }

  return { data, postUserHandler, isLoading }
}

export const useGetPropertyTags = (propertyAddress: string) => {
  const shouldFetch = propertyAddress !== ''
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getPropertyTags>, Error>(
    shouldFetch ? SWRCachePath.getPropertyTags(propertyAddress) : null,
    () => getPropertyTags(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error, mutate }
}

export const usePostPropertyTags = (propertyAddress: string, walletAddress: string) => {
  const key = 'useGetPropertyTags'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const shouldFetch = propertyAddress !== '' && walletAddress !== ''
  const { data, mutate } = useSWR<UnwrapFunc<typeof getPropertyTags>, Error>(
    shouldFetch ? SWRCachePath.getPropertyTags(propertyAddress) : null
  )

  const postPropertyTagsHandler = async (tags: string) => {
    const signMessage = `submit property tags: ${tags}`
    const signature = (await sign(signMessage)) || ''

    setIsLoading(true)
    message.loading({ content: 'update property tags...', duration: 0, key })

    await mutate(
      postPropertyTags(propertyAddress, tags, signMessage, signature, walletAddress)
        .then(result => {
          message.success({ content: 'success update property tags', key })
          return result
        })
        .catch(err => {
          const errorMessage = walletAddress === '' ? 'Please connect to a wallet' : err.message
          message.error({ content: errorMessage, key })
          return Promise.reject(data)
        }),
      false
    )

    setIsLoading(false)
  }

  return { data, postPropertyTagsHandler, isLoading }
}

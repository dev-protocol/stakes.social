import { useState } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR, { mutate } from 'swr'
import { message } from 'antd'
import { UnwrapFunc, whenDefined } from '../utility'
import { getPropertyTags, postPropertyTags, postAccount, putAccount, getProperty } from './utility'
import { signWithCache } from 'src/fixtures/wallet/utility'
import { useProvider } from '../wallet/hooks'
import { useUploadFile } from './functions/useUploadFile'
import { useGetAccount } from './functions/useGetAccount'

export { useUploadFile, useGetAccount }

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
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const shouldFetch = propertyAddress !== '' && walletAddress !== ''
  const { data, mutate } = useSWR<UnwrapFunc<typeof getPropertyTags>, Error>(
    shouldFetch ? SWRCachePath.getPropertyTags(propertyAddress) : null
  )

  const postPropertyTagsHandler = async (tags: string) => {
    const signMessage = `submit property tags: ${tags}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update property tags...', duration: 0, key })

    await mutate(
      postPropertyTags(propertyAddress, tags, signedMessage, signature, walletAddress)
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

export const useCreateAccount = (walletAddress: string) => {
  const key = 'useCreateAccount'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const shouldFetch = walletAddress !== ''
  const { data, mutate } = useSWR<UnwrapFunc<typeof postAccount>, Error>(
    shouldFetch ? SWRCachePath.createAccount() : null
  )

  const postAccountHandler = async (name?: string, biography?: string) => {
    const signMessage = `create accout: ${name}, ${biography}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update account data...', duration: 0, key })

    await mutate(
      postAccount(signedMessage, signature, walletAddress, name, biography)
        .then(result => {
          message.success({ content: 'success update account data', key })
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

  return { data, postAccountHandler, isLoading }
}

export const useUpdateAccount = (id: number, walletAddress: string) => {
  const key = 'useUpdateAccount'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const shouldFetch = id !== 0
  const { data, mutate } = useSWR<UnwrapFunc<typeof putAccount>, Error>(
    shouldFetch ? SWRCachePath.updateAccount(id) : null
  )

  const putAccountHandler = async (name?: string, biography?: string) => {
    const signMessage = `update accout: ${name}, ${biography}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update account data...', duration: 0, key })

    await mutate(
      putAccount(signedMessage, signature, walletAddress, id, name, biography)
        .then(result => {
          message.success({ content: 'success update account data', key })
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

  return { data, putAccountHandler, isLoading }
}

export const useGetProperty = (propertyAddress?: string) => {
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof getProperty>, Error>(
    SWRCachePath.getProperty(propertyAddress),
    () => whenDefined(propertyAddress, x => getProperty(x)),
    { onError: err => message.error(err.message) }
  )
  return { data: data ? data[0] : data, error, mutate }
}

export const useUploadAccountAvatar = (accountAddress: string) => {
  const { data: account, mutate } = useGetAccount(accountAddress)
  const { postUploadFileHandler, isLoading, error } = useUploadFile(accountAddress)

  const upload = async (file: any) => {
    const refId = Number(account?.id)
    const ref = 'Account'
    const field = 'portrait'
    const path = `assets/${accountAddress}`
    return postUploadFileHandler(refId, ref, field, file, path).then(x => {
      mutate()
      return x
    })
  }
  return { upload, isLoading, error }
}

export const useUploadAccountCoverImages = (accountAddress: string) => {
  const { data: account, mutate } = useGetAccount(accountAddress)
  const { postUploadFileHandler, isLoading, error } = useUploadFile(accountAddress)

  const upload = async (file: any) => {
    const refId = Number(account?.id)
    const ref = 'Account'
    const field = 'cover_images'
    const path = `assets/${accountAddress}/${field}`
    return postUploadFileHandler(refId, ref, field, file, path).then(x => {
      mutate()
      return x
    })
  }
  return { upload, isLoading, error }
}

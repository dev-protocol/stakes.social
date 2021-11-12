import { useState } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import {
  getPropertyTags,
  postPropertyTags,
  postAccount,
  putAccount,
  postProperty,
  putProperty,
  ProfileLinks,
  PropertyLinks
} from './utility'
import { signWithCache } from 'src/fixtures/wallet/utility'
import { useProvider } from '../wallet/hooks'
import { useUploadFile, useDeleteFile } from './functions/useUploadFile'
import { useGetAccount } from './functions/useGetAccount'
import { useGetProperty } from './functions/useGetProperty'

export { useUploadFile, useDeleteFile, useGetAccount, useGetProperty }

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
  const { mutate } = useGetAccount(walletAddress)

  const postAccountHandler = async (name?: string, biography?: string, website?: string, github?: string) => {
    const links: ProfileLinks = {
      github,
      website
    }
    const signMessage = `create accout: ${name}, ${biography}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update account data...', duration: 0, key })

    const data = await postAccount(signedMessage, signature, walletAddress, name, biography, links)
      .then(result => {
        mutate()
        message.success({ content: 'success update account data', key })
        return result
      })
      .catch(err => {
        message.error({ content: err.message, key })
        return Promise.reject({})
      })

    setIsLoading(false)

    return data
  }

  return { postAccountHandler, isLoading }
}

export const useUpdateAccount = (id: number, walletAddress: string) => {
  const key = 'useUpdateAccount'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutate } = useGetAccount(walletAddress)

  const putAccountHandler = async (name?: string, biography?: string, website?: string, github?: string) => {
    const links: ProfileLinks = {
      github,
      website
    }
    const signMessage = `update accout: ${name}, ${biography}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update account data...', duration: 0, key })

    const data = await putAccount(signedMessage, signature, walletAddress, id, name, biography, links)
      .then(result => {
        mutate()
        message.success({ content: 'success update account data', key })
        return result
      })
      .catch(err => {
        message.error({ content: err.message, key })
        return Promise.reject({})
      })

    setIsLoading(false)

    return data
  }

  return { putAccountHandler, isLoading }
}

export const useUploadAccountAvatar = (accountAddress: string) => {
  const { data: account, mutate } = useGetAccount(accountAddress)
  const { postUploadFileHandler, isLoading, error } = useUploadFile(accountAddress)

  const upload = async (file: any, accountId?: number) => {
    const refId = accountId || Number(account?.id)
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

export const useCreateProperty = (walletAddress: string, propertyAddress: string) => {
  const key = 'useCreateProperty'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutate } = useGetProperty(propertyAddress)

  const postPropertyHandler = async (
    name?: string,
    description?: string,
    website?: string,
    twitter?: string,
    github?: string
  ) => {
    const links: PropertyLinks = {
      github,
      twitter,
      website
    }
    const signMessage = `create property: ${name}, ${description}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update property data...', duration: 0, key })

    const data = await postProperty(signedMessage, signature, walletAddress, propertyAddress, name, description, links)
      .then(result => {
        if (result.error) {
          message.error({ content: result.error, key })
          return
        }
        mutate()
        message.success({ content: 'success update property data', key })
        return result
      })
      .catch(err => {
        message.error({ content: err.message, key })
        return Promise.reject({})
      })

    setIsLoading(false)

    return data
  }

  return { postPropertyHandler, isLoading }
}

export const useUpdateProperty = (id: number, walletAddress: string, propertyAddress: string) => {
  const key = 'useUpdateProperty'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutate } = useGetProperty(propertyAddress)

  const putPropertyHandler = async (
    name?: string,
    description?: string,
    website?: string,
    twitter?: string,
    github?: string
  ) => {
    const links: PropertyLinks = {
      github,
      twitter,
      website
    }
    const signMessage = `update property: ${name}, ${description}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'update property data...', duration: 0, key })

    const data = await putProperty(
      signedMessage,
      signature,
      walletAddress,
      propertyAddress,
      id,
      name,
      description,
      links
    )
      .then(result => {
        if (result.error) {
          message.error({ content: result.error, key })
          return
        }
        mutate()
        message.success({ content: 'success update property data', key })
        return result
      })
      .catch(err => {
        message.error({ content: err.message, key })
        return Promise.reject({})
      })

    setIsLoading(false)

    return data
  }

  return { putPropertyHandler, isLoading }
}

export const useUploadAccountCoverImages = (accountAddress: string) => {
  const { data: account, mutate } = useGetAccount(accountAddress)
  const { postUploadFileHandler, isLoading, error } = useUploadFile(accountAddress)

  const upload = async (file: any, accountId?: number) => {
    const refId = accountId || Number(account?.id)
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

export const useUploadPropertyCoverImages = (propertyAddress: string, accountAddress: string) => {
  const { data: property, mutate } = useGetProperty(propertyAddress)
  const { postUploadFileHandler, isLoading, error } = useUploadFile(accountAddress)

  const upload = async (file: any, propertyId?: number) => {
    const refId = propertyId || Number(property?.id)
    const ref = 'Property'
    const field = 'cover_image'
    const path = `assets/${propertyAddress}/${field}`
    return postUploadFileHandler(refId, ref, field, file, path).then(x => {
      mutate()
      return x
    })
  }
  return { upload, isLoading, error }
}

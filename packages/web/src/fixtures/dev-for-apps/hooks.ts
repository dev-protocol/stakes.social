import { useState } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import {
  Tag,
  getTags,
  postTag,
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
import { useGetIncubators } from './functions/incubator'

export { useUploadFile, useDeleteFile, useGetAccount, useGetProperty, useGetIncubators }

export const useGetTags = (tags: string[]) => {
  const shouldFetch = tags.length > 0
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getTags>, Error>(
    shouldFetch ? SWRCachePath.getTags(tags) : null,
    () => getTags(tags),
    { onError: (err: Error) => message.error(err.message) }
  )
  return { data, error, mutate }
}

export const usePostTag = (propertyAddress: string, walletAddress: string) => {
  const key = 'usePostTag'
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const shouldFetch = propertyAddress !== '' && walletAddress !== ''
  const { data } = useSWR<UnwrapFunc<typeof postTag>, Error>(shouldFetch ? SWRCachePath.postTag() : null)

  const postTagsHandler = async (tag: string) => {
    const signMessage = `submit property tag: ${tag}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      message.error({ content: 'Please connect your wallet', key })
      return { error: new Error('wallect is not connected') }
    }

    setIsLoading(true)
    message.loading({ content: 'update property tags...', duration: 0, key })

    const result = postTag(tag, signedMessage, signature, walletAddress)
      .then((result: Tag) => {
        message.success({ content: 'success update property tag', key })
        return { data: result }
      })
      .catch((err: Error) => {
        const errorMessage = walletAddress === '' ? 'Please connect to a wallet' : err.message
        message.error({ content: errorMessage, key })
        return { error: err }
      })

    setIsLoading(false)

    return result
  }

  return { data, postTagsHandler, isLoading }
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
    github?: string,
    tags?: number[]
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
      links,
      tags
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

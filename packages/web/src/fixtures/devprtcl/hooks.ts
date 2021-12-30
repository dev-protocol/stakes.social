import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { whenDefined } from '../utility/logic'

const messageKey = 'devprtclxyzRESTAccess'

export interface PropertyInformation {
  name: string
  author: { karma: number; address: string }
}

export interface AuthorInformation {
  address: string
  karma: number
}

export const getPropertytInformation = (propertyAddress: string): Promise<PropertyInformation> =>
  fetch(`https://api.devprotocol.xyz/v1/property/${propertyAddress}`).then(res => res.json())

export const getAuthorInformation = (authorAddress: string): Promise<AuthorInformation> =>
  fetch(`https://api.devprotocol.xyz/v1/author/${authorAddress}`).then(res => res.json())

export const useGetPropertytInformation = (propertyAddress?: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getPropertytInformation> | undefined, Error>(
    SWRCachePath.getPropertyInformation(propertyAddress),
    () => whenDefined(propertyAddress, address => getPropertytInformation(address)),
    {
      onError: err => {
        console.log(err)
        message.error({ content: err.message, key: messageKey })
      }
    }
  )
  return { data, error }
}

export const useGetAuthorInformation = (authorAddress?: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getAuthorInformation> | undefined, Error>(
    SWRCachePath.getAuthorInformation(authorAddress),
    () => whenDefined(authorAddress, address => getAuthorInformation(address)),
    {
      onError: err => {
        console.log(err)
        message.error({ content: err.message, key: messageKey })
      }
    }
  )
  return { data, error }
}

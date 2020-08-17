import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'

export interface PropertyInformation {
  name: string
  author: { karma: number; address: string }
}

export const getPropertytInformation = (propertyAddress: string): Promise<PropertyInformation> =>
  fetch(`https://api.devprtcl.com/v1/property/${propertyAddress}`).then(res => res.json())

export const useGetPropertytInformation = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getPropertytInformation>, Error>(
    SWRCachePath.getPropertyInformation(propertyAddress),
    () => getPropertytInformation(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

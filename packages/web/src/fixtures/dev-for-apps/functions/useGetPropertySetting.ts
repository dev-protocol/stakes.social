import useSWR from 'swr'
import { SWRCachePath } from '../cache-path'
import { message } from 'antd'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { getPropertySetting } from '../utility'

export const useGetPropertySetting = (propertyAddress: string, accountAddress: string) => {
  const shouldFetch = propertyAddress !== '' && accountAddress !== ''
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getPropertySetting>, Error>(
    shouldFetch ? SWRCachePath.getPropertySetting(propertyAddress, accountAddress) : null,
    () => getPropertySetting(propertyAddress, accountAddress),
    { onError: err => message.error(err.message) }
  )
  const found = data instanceof Array

  return { data: whenDefined(data, x => x[0]), error, mutate, found }
}

export const useGetPropertySettingsByProperty = (propertyAddress: string) => {
  const shouldFetch = propertyAddress !== ''
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getPropertySetting>, Error>(
    shouldFetch ? SWRCachePath.getPropertySettingsByProperty(propertyAddress) : null,
    () => getPropertySetting(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  const found = data instanceof Array

  return { data: whenDefined(data, x => x), error, mutate, found }
}

export const useGetPropertySettingsByAccount = (accountAddress: string) => {
  const shouldFetch = accountAddress !== ''
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getPropertySetting>, Error>(
    shouldFetch ? SWRCachePath.getPropertySettingsByAccount(accountAddress) : null,
    () => getPropertySetting(undefined, accountAddress),
    { onError: err => message.error(err.message) }
  )
  const found = data instanceof Array

  return { data: whenDefined(data, x => x), error, mutate, found }
}

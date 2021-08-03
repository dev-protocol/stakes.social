import useSWR from 'swr'
import { message } from 'antd'
import { SWRCachePath } from '../cache-path'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { getProperty } from '../utility'

export const useGetProperty = (propertyAddress?: string) => {
  const shouldFetch = propertyAddress && propertyAddress.startsWith('0x')
  const { data, error, mutate } = useSWR<undefined | UnwrapFunc<typeof getProperty>, Error>(
    shouldFetch ? SWRCachePath.getProperty(propertyAddress) : null,
    () => whenDefined(propertyAddress, x => getProperty(x)),
    { onError: err => message.error({ content: err.message, key: 'useGetProperty' }) }
  )
  const found = data instanceof Array

  return { data: whenDefined(data, x => x[0]), error, mutate, found }
}

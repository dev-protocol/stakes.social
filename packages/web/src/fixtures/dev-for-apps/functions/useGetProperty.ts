import useSWR from 'swr'
import { SWRCachePath } from '../cache-path'
import { message } from 'antd'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { getProperty } from '../utility'

export const useGetProperty = (propertyAddress?: string) => {
  const { data, error, mutate } = useSWR<undefined | UnwrapFunc<typeof getProperty>, Error>(
    SWRCachePath.getProperty(propertyAddress),
    () => whenDefined(propertyAddress, x => getProperty(x)),
    { onError: err => message.error(err.message) }
  )
  const found = data instanceof Array

  return { data: data ? data[0] : data, error, mutate, found }
}

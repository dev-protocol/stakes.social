import useSWR from 'swr'
import { SWRCachePath } from '../cache-path'
import { message } from 'antd'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { getIncubators } from '../utility'

export const useGetIncubators = () => {
  const { data, error, mutate } = useSWR<undefined | UnwrapFunc<typeof getIncubators>, Error>(
    SWRCachePath.getIncubators(),
    () => getIncubators(),
    { onError: err => message.error(err.message) }
  )

  return { data: whenDefined(data, x => x[0]), error, mutate }
}

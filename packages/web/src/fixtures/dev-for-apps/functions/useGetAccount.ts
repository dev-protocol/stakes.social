import useSWR from 'swr'
import { SWRCachePath } from '../cache-path'
import { message } from 'antd'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { getAccount } from '../utility'

export const useGetAccount = (walletAddress?: string) => {
  const { data, error, mutate } = useSWR<undefined | UnwrapFunc<typeof getAccount>, Error>(
    SWRCachePath.getAccount(walletAddress),
    () => whenDefined(walletAddress, x => getAccount(x)),
    { onError: err => message.error(err.message) }
  )
  const found = data instanceof Array

  return { data: whenDefined(data, x => x[0]), error, mutate, found }
}

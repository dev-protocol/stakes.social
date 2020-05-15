import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'

export const useGetMarketInformation = (marketAddress: string) => {
  const { data, error } = useSWR(
    SWRCachePath.getMarketInformation(marketAddress),
    () => `https://raw.githubusercontent.com/dev-protocol/assets/master/market/${marketAddress}/info.json`,
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

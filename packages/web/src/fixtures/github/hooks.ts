import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'

export interface MarketInformation {
  name: string
  description: string
  asset: {
    authentication: string
    calculation: number
    usingKhaos: boolean
  }
}

const getMarketInformation = (marketAddress: string): Promise<MarketInformation> =>
  fetch(`https://raw.githubusercontent.com/dev-protocol/assets/main/market/${marketAddress}/info.json`).then(res =>
    res.json()
  )

export const useGetMarketInformation = (marketAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMarketInformation>, Error>(
    SWRCachePath.getMarketInformation(marketAddress),
    () => getMarketInformation(marketAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

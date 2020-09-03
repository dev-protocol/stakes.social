import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'

export type Markets = string[]

export interface MarketInformation {
  name: string
  description: string
  asset: {
    authentication: string
    usingKhaos: boolean
  }
}

export interface PolicyInformation {
  name: string
  description: string
  reference: string
}

const getMarkets = (key = 'trusted'): Promise<Markets> =>
  fetch(`https://raw.githubusercontent.com/dev-protocol/assets/main/markets/${key}.json`).then(res => res.json())

const getMarketInformation = (marketAddress: string): Promise<MarketInformation> =>
  fetch(`https://raw.githubusercontent.com/dev-protocol/assets/main/market/${marketAddress}/info.json`).then(res =>
    res.json()
  )

const getPolicyInformation = (policyAddress: string): Promise<PolicyInformation> =>
  fetch(`https://raw.githubusercontent.com/dev-protocol/assets/main/policy/${policyAddress}/info.json`).then(res =>
    res.json()
  )

export const useGetMarkets = (key = 'trusted') => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMarkets>, Error>(
    SWRCachePath.getMarkets(key),
    () => getMarkets(key),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

export const useGetMarketInformation = (marketAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMarketInformation>, Error>(
    SWRCachePath.getMarketInformation(marketAddress),
    () => getMarketInformation(marketAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

export const useGetPolicyInformation = (policyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getPolicyInformation>, Error>(
    SWRCachePath.getPolicyInformation(policyAddress),
    () => getPolicyInformation(policyAddress),
    { onError: err => message.error(err.message) }
  )
  return { data, error }
}

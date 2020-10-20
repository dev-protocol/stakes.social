import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { balanceOf } from './client'

export const useBalanceOf = () => {
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.useBalanceOf, () => balanceOf())
  return {
    data,
    error
  }
}

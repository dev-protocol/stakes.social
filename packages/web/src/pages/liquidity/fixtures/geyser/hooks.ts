import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { totalStaked } from './client'

export const useTotalStaked = () => {
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.useTotalStaked, () => totalStaked())
  return {
    data,
    error
  }
}

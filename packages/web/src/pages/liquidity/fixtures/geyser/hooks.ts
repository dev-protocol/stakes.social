import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { stake, totalLocked, totalStaked, totalUnlocked, unstake } from './client'
import { useCallback } from 'react'
import { message } from 'antd'
import { toBigNumber } from 'src/fixtures/utility'

export const useTotalStaked = () => {
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.useTotalStaked, () => totalStaked())
  return {
    data,
    error
  }
}

export const useTotalRewards = () => {
  const { data: dataTotalLocked = toBigNumber(0), error: errorTotalLocked } = useSWR<BigNumber, Error>(
    SWRCachePath.getTotalLocked,
    () => totalLocked()
  )
  const { data: dataTotalUnlocked = toBigNumber(0), error: errorTotalUnlocked } = useSWR<BigNumber, Error>(
    SWRCachePath.getTotalUnlocked,
    () => totalUnlocked()
  )
  return {
    data: dataTotalLocked.plus(dataTotalUnlocked),
    error: errorTotalLocked || errorTotalUnlocked
  }
}

export const useStake = () => {
  const key = 'useStake'
  return useCallback(async (amount: BigNumber) => {
    message.loading({ content: 'Depositing...', duration: 0, key })
    return stake(amount)
      .then(() => {
        message.success({ content: 'Deposit completed', key })
      })
      .catch(err => {
        message.error({ content: err.message, key })
      })
  }, [])
}

export const useUnstake = () => {
  const key = 'useUnstake'
  return useCallback(async (amount: BigNumber) => {
    message.loading({ content: 'Withdrawing...', duration: 0, key })
    return unstake(amount)
      .then(() => {
        message.success({ content: 'Withdrawal completed', key })
      })
      .catch(err => {
        message.error({ content: err.message, key })
      })
  }, [])
}

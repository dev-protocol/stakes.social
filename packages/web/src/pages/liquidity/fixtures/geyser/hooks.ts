import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import {
  finalUnlockSchedules,
  stake,
  totalLocked,
  totalStaked,
  totalStakingShares,
  totalUnlocked,
  unstake,
  updateAccounting
} from './client'
import { useCallback } from 'react'
import { message } from 'antd'
import { toBigNumber, UnwrapFunc } from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS } from '../constants/number'

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

export const useFinalUnlockSchedules = () => {
  const { data, error } = useSWR<UnwrapFunc<typeof finalUnlockSchedules>, Error>(
    SWRCachePath.getFinalUnlockSchedules,
    () => finalUnlockSchedules()
  )
  return {
    data,
    error
  }
}

export const useEstimateReward = () => {
  return useCallback(async (amount: BigNumber) => {
    const [tStakingShares, tStaked, tUnlocked, { totalStakingShareSeconds }] = await Promise.all([
      totalStakingShares(),
      totalStaked(),
      totalUnlocked(),
      updateAccounting()
    ])
    const mintedStakingShares = tStakingShares.isZero()
      ? tStakingShares.times(amount).div(tStaked)
      : amount.times(INITIAL_SHARES_PER_TOKEN)
    const newTotalStakingShareSeconds = toBigNumber(totalStakingShareSeconds).plus(
      tStakingShares.times(ONE_MONTH_SECONDS)
    )
    const stakingSharesToBurn = tStakingShares.plus(mintedStakingShares).times(amount).div(tStaked.plus(amount))
    let sharesLeftToBurn = toBigNumber(stakingSharesToBurn.toFixed())
    let reward = toBigNumber(0)
    while (sharesLeftToBurn.isGreaterThan(0)) {
      if (mintedStakingShares.isLessThanOrEqualTo(sharesLeftToBurn)) {
        reward = reward.plus(
          tUnlocked.times(mintedStakingShares.times(ONE_MONTH_SECONDS)).div(newTotalStakingShareSeconds)
        )
        sharesLeftToBurn = sharesLeftToBurn.minus(mintedStakingShares)
      } else {
        reward = reward.plus(
          tUnlocked.times(sharesLeftToBurn.times(ONE_MONTH_SECONDS)).div(newTotalStakingShareSeconds)
        )
        sharesLeftToBurn = toBigNumber(0)
      }
    }

    return reward
  }, [])
}

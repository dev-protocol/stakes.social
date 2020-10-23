import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import {
  allTokensClaimed,
  finalUnlockSchedules,
  stake,
  totalLocked,
  totalStaked,
  totalStakingShares,
  totalUnlocked,
  unstake,
  updateAccounting
} from './client'
import { useCallback, useState } from 'react'
import { message } from 'antd'
import { EvmBigNumber, toBigNumber, toEVMBigNumber, UnwrapFunc } from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS } from '../constants/number'

export const useTotalRewards = () => {
  const { data: dataTotalLocked, error: errorTotalLocked } = useSWR<EvmBigNumber, Error>(
    SWRCachePath.getTotalLocked,
    () => totalLocked()
  )
  const { data: dataTotalUnlocked, error: errorTotalUnlocked } = useSWR<EvmBigNumber, Error>(
    SWRCachePath.getTotalUnlocked,
    () => totalUnlocked()
  )
  const data = dataTotalLocked && dataTotalUnlocked ? dataTotalLocked.add(dataTotalUnlocked) : toEVMBigNumber(0)
  return {
    data,
    error: errorTotalLocked || errorTotalUnlocked
  }
}

export const useStake = () => {
  const key = 'useStake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const _stake = useCallback(async (amount: BigNumber) => {
    setIsLoading(true)
    message.loading({ content: 'Depositing...', duration: 0, key })
    setError(undefined)
    return stake(amount)
      .then(() => {
        message.success({ content: 'Deposit completed', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])
  return { stake: _stake, isLoading, error }
}

export const useUnstake = () => {
  const key = 'useUnstake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const _unstake = useCallback(async (amount: BigNumber) => {
    setIsLoading(true)
    message.loading({ content: 'Withdrawing...', duration: 0, key })
    setError(undefined)
    return unstake(amount)
      .then(() => {
        message.success({ content: 'Withdrawal completed', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])
  return { unstake: _unstake, isLoading, error }
}

export const useAllTokensClaimed = () => {
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.useAllTokensClaimed, () =>
    allTokensClaimed().then(allEvents =>
      allEvents.reduce(
        (a: BigNumber, c) => a.plus(c.returnValues.amount),
        toBigNumber(allEvents[0].returnValues.amount)
      )
    )
  )
  return {
    data,
    error
  }
}

export const useTotalStakingShares = () => {
  const { data, error } = useSWR<UnwrapFunc<typeof totalStakingShares>, Error>(SWRCachePath.getTotalStakingShares, () =>
    totalStakingShares()
  )
  return {
    data,
    error
  }
}

export const useTotalStaked = () => {
  const { data, error } = useSWR<UnwrapFunc<typeof totalStakingShares>, Error>(SWRCachePath.useTotalStaked, () =>
    totalStaked()
  )
  return {
    data,
    error
  }
}

export const useUpdateAccounting = () => {
  const { data, error } = useSWR<UnwrapFunc<typeof updateAccounting>, Error>(SWRCachePath.getUpdateAccounting, () =>
    updateAccounting()
  )
  return {
    data,
    error
  }
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
  return useCallback(
    ({
      amount,
      claimed,
      totalStakingShares: tStakingShares,
      totalStaked: tStaked,
      accounting,
      finalUnlockSchedule
    }: {
      amount: BigNumber
      claimed: BigNumber
      totalStakingShares: EvmBigNumber
      totalStaked: EvmBigNumber
      accounting: UnwrapFunc<typeof updateAccounting>
      finalUnlockSchedule: UnwrapFunc<typeof finalUnlockSchedules>
    }) => {
      if (amount.isZero()) {
        return amount
      }
      const eAmount = toEVMBigNumber(amount.toFixed())
      const { totalLocked: tLocked, totalUnlocked: tUnlocked, totalStakingShareSeconds } = accounting
      const { durationSec } = finalUnlockSchedule

      const e18 = toEVMBigNumber(10).pow(18)
      const totalRewards = toEVMBigNumber(tLocked).add(tUnlocked).add(claimed.toFixed())
      const unlockRatePerMonth = totalRewards.mul(e18).mul(ONE_MONTH_SECONDS).div(durationSec).div(e18)
      const maxRewards = toBigNumber(unlockRatePerMonth.toString())

      const mintedStakingShares = tStakingShares.isZero()
        ? tStakingShares.mul(eAmount).div(tStaked)
        : eAmount.mul(INITIAL_SHARES_PER_TOKEN)
      const newTStakingShares = tStakingShares.add(mintedStakingShares)
      const newTStaked = tStaked.add(eAmount)
      const newTotalStakingShareSeconds = toEVMBigNumber(totalStakingShareSeconds).add(
        newTStakingShares.mul(ONE_MONTH_SECONDS)
      )
      const stakingSharesToBurn = newTStakingShares.mul(eAmount).div(newTStaked)
      const n = toBigNumber(stakingSharesToBurn.toString()).div(mintedStakingShares.toString())
      const reward = maxRewards
        .times(mintedStakingShares.mul(ONE_MONTH_SECONDS).toString())
        .div(newTotalStakingShareSeconds.toString())
        .times(n)

      return reward
    },
    []
  )
}

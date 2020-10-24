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
import { getUTC, toBigNumber, toEVMBigNumber, UnwrapFunc } from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS } from '../constants/number'

export const useTotalRewards = () => {
  const { data: dataTotalLocked, error: errorTotalLocked } = useSWR<BigNumber, Error>(SWRCachePath.getTotalLocked, () =>
    totalLocked()
  )
  const { data: dataTotalUnlocked, error: errorTotalUnlocked } = useSWR<BigNumber, Error>(
    SWRCachePath.getTotalUnlocked,
    () => totalUnlocked()
  )
  const data = dataTotalLocked && dataTotalUnlocked ? dataTotalLocked.plus(dataTotalUnlocked) : toEVMBigNumber(0)
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
      totalStakingShares: tStakingShares,
      totalStaked: tStaked,
      accounting,
      finalUnlockSchedule,
      timestamp
    }: {
      amount: BigNumber
      totalStakingShares: BigNumber
      totalStaked: BigNumber
      accounting: UnwrapFunc<typeof updateAccounting>
      finalUnlockSchedule: UnwrapFunc<typeof finalUnlockSchedules>
      timestamp: number
    }) => {
      if (amount.isZero()) {
        return amount
      }
      const eAmount = toEVMBigNumber(amount)
      const { totalLocked: tLocked, totalStakingShareSeconds } = accounting
      const { endAtSec } = finalUnlockSchedule

      const e18 = toEVMBigNumber(10).pow(18)
      const totalRewards = toBigNumber(tLocked)
      const timeToLeft = Number(endAtSec) - timestamp
      const unlockRatePerMonth =
        timeToLeft > 0
          ? totalRewards
              .times(e18)
              .times(timeToLeft > ONE_MONTH_SECONDS ? ONE_MONTH_SECONDS : timeToLeft)
              .div(timeToLeft)
              .div(e18)
          : toBigNumber(0)
      const maxRewards = unlockRatePerMonth

      const mintedStakingShares = tStakingShares.isZero()
        ? tStakingShares.times(eAmount).div(tStaked)
        : eAmount.times(INITIAL_SHARES_PER_TOKEN)
      const newTStakingShares = tStakingShares.plus(mintedStakingShares)
      const newTStaked = tStaked.plus(eAmount)
      const newTotalStakingShareSeconds = toEVMBigNumber(totalStakingShareSeconds).plus(
        newTStakingShares.times(ONE_MONTH_SECONDS)
      )
      const stakingSharesToBurn = newTStakingShares.times(eAmount).div(newTStaked)
      const n = toBigNumber(stakingSharesToBurn).div(mintedStakingShares)
      const reward = maxRewards
        .times(mintedStakingShares.times(ONE_MONTH_SECONDS))
        .div(newTotalStakingShareSeconds)
        .times(n)

      return reward
    },
    []
  )
}

export const useIsAlreadyFinished = () => {
  const { data, error } = useSWR<boolean, Error>(SWRCachePath.useIsAlreadyFinished, async () => {
    const { endAtSec } = await finalUnlockSchedules()
    const current = getUTC()
    return Number(endAtSec) <= current
  })
  return {
    data,
    error
  }
}

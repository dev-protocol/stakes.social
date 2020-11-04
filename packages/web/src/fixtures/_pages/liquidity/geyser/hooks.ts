import { Dispatch, SetStateAction } from 'react'
import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import {
  allTokensClaimed,
  finalUnlockSchedules,
  getStaked,
  stake,
  totalStaked,
  totalStakingShares,
  unstake,
  updateAccounting,
  bonusPeriodSec,
  startBonus
} from './client'
import { useCallback, useState } from 'react'
import { message } from 'antd'
import { getUTC, toBigNumber, toEVMBigNumber, UnwrapFunc } from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS, SYSTEM_SETTIMEOUT_MAXIMUM_DELAY_VALUE } from '../constants/number'
import { getBlock } from 'src/fixtures/wallet/utility'

const getAllTokensClaimed = () =>
  allTokensClaimed().then(allEvents =>
    allEvents.reduce(
      (a: BigNumber, c) => a.plus(c.returnValues.amount),
      toBigNumber(allEvents[0]?.returnValues.amount || 0)
    )
  )

export const useTotalRewards = () => {
  const { data: dataAccounting, error: errorAccounting } = useSWR<UnwrapFunc<typeof updateAccounting>, Error>(
    SWRCachePath.getUpdateAccounting,
    () => updateAccounting()
  )
  const { data: dataAllTokensClaimed, error: errorAllTokensClaimed } = useSWR<BigNumber, Error>(
    SWRCachePath.useAllTokensClaimed,
    getAllTokensClaimed
  )
  const data =
    dataAccounting && dataAllTokensClaimed
      ? toBigNumber(dataAccounting.totalLocked).plus(dataAccounting.totalUnlocked).plus(dataAllTokensClaimed)
      : toEVMBigNumber(0)
  return {
    data,
    error: errorAccounting || errorAllTokensClaimed
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
        return true
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        return false
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
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.useAllTokensClaimed, getAllTokensClaimed)
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
      finalUnlockSchedule: NonNullable<UnwrapFunc<typeof finalUnlockSchedules>>
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

      const mintedStakingShares = tStakingShares.isGreaterThan(0)
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

export const useIsAlreadyFinished = ([state, stateSetter]: [boolean, Dispatch<SetStateAction<boolean>>]): [
  boolean,
  Dispatch<SetStateAction<boolean>>
] => {
  finalUnlockSchedules().then(res => {
    if (res === undefined) {
      return
    }
    const { endAtSec } = res
    const current = getUTC()
    const duration = (d => (d > SYSTEM_SETTIMEOUT_MAXIMUM_DELAY_VALUE ? SYSTEM_SETTIMEOUT_MAXIMUM_DELAY_VALUE : d))(
      (Number(endAtSec) - current) * 1000
    )
    setTimeout(() => stateSetter(true), duration)
  })
  return [state, stateSetter]
}

export const useRewardMultiplier = () => {
  const { data: block, error: errorGetStaked } = useSWR<number, Error>(SWRCachePath.getStaked(), () =>
    getStaked().then(allEvents => {
      return allEvents[0]?.blockNumber
    })
  )
  const { data: timestamp, error: errorGetBlock } = useSWR<number | undefined, Error>(
    SWRCachePath.getBlock(block),
    () => (block ? getBlock(block).then(Number) : undefined)
  )
  const { data: bonusPeriod, error: errorBonusPeriodSec } = useSWR<BigNumber, Error>(
    SWRCachePath.getBonusPeriodSec,
    () => bonusPeriodSec()
  )
  const { data: _startBonus, error: errorStartBonus } = useSWR<BigNumber, Error>(SWRCachePath.getStartBonus, () =>
    startBonus()
  )
  const startBonusPct = _startBonus ? toBigNumber(_startBonus).div(100) : toBigNumber(0)
  const data =
    timestamp && bonusPeriod && startBonusPct
      ? startBonusPct
          .plus(
            toBigNumber(1)
              .minus(startBonusPct)
              .times(getUTC() - timestamp)
              .div(bonusPeriod)
          )
          .div(startBonusPct)
          .toNumber()
      : undefined
  const max = toBigNumber(1).div(startBonusPct).dp(1).toNumber()

  return {
    data,
    max,
    error: errorGetStaked || errorGetBlock || errorBonusPeriodSec || errorStartBonus
  }
}

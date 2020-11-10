import { Dispatch, SetStateAction } from 'react'
import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR, { mutate } from 'swr'
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
  startBonus,
  allTokensLocked,
  totalStakedFor,
  unstakeQuery
} from './client'
import { useCallback, useState } from 'react'
import { message } from 'antd'
import { getUTC, toBigNumber, toEVMBigNumber, toNaturalNumber, UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS, SYSTEM_SETTIMEOUT_MAXIMUM_DELAY_VALUE } from '../constants/number'
import { getBlock } from 'src/fixtures/wallet/utility'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'
import { useTheGraph } from '../uniswap-pool/hooks'

const getAllTokensClaimed = () =>
  allTokensClaimed().then(allEvents => {
    console.log(allEvents)
    return allEvents.reduce(
      (a: BigNumber, c) => a.plus(c.returnValues.amount),
      toBigNumber(allEvents[0]?.returnValues.amount || 0)
    )
  })

const getTokensLocked = () =>
  allTokensLocked().then(allEvents => {
    console.log(allEvents)
    return allEvents.reduce((a: BigNumber, c) => a.plus(c.returnValues.amount), toBigNumber(0))
  })

export const useTotalRewards = () => {
  const { data, error } = useSWR<BigNumber, Error>(SWRCachePath.allTokensLocked, getTokensLocked)
  return {
    data,
    error
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
  const { accountAddress } = useGetAccountAddress()
  const { data: block, error: errorGetStaked, mutate } = useSWR<number | undefined, Error>(
    SWRCachePath.getStaked(accountAddress),
    () =>
      whenDefined(accountAddress, address =>
        getStaked(address).then(allEvents => {
          return allEvents[0]?.blockNumber
        })
      )
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
    mutate,
    error: errorGetStaked || errorGetBlock || errorBonusPeriodSec || errorStartBonus
  }
}

export const useTotalStakedFor = () => {
  const { accountAddress } = useGetAccountAddress()
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof totalStakedFor> | undefined, Error>(
    SWRCachePath.totalStakedFor(accountAddress),
    () => whenDefined(accountAddress, address => totalStakedFor(address))
  )
  return {
    data,
    error,
    mutate
  }
}

export const useMutateDepositDependence = () => {
  const purge = useCallback(() => {
    mutate(SWRCachePath.getStaked)
    mutate(SWRCachePath.totalStakedFor)
  }, [])

  return {
    purge
  }
}

export const useAPY = () => {
  const { data: totalRewards } = useTotalRewards()
  const { data: totalStaked } = useTotalStaked()
  const { data: theGraph } = useTheGraph(totalStaked?.toString())
  const apy =
    totalStaked && theGraph && theGraph.data.pair && totalRewards
      ? (() => {
          const max = toNaturalNumber(totalRewards)
          const stakedDev = toNaturalNumber(totalStaked)
            .div(theGraph.data.pair.totalSupply)
            .times(theGraph.data.pair.reserve0)

          return max.div(stakedDev).times(100)
        })()
      : toBigNumber(0)

  return {
    data: apy
  }
}

export const useUnstakeQuery = (amount?: BigNumber) => {
  const { data, error } = useSWR<UnwrapFunc<typeof totalStakedFor> | undefined, Error>(
    SWRCachePath.unstakeQuery(amount?.toFixed()),
    () => whenDefined(amount, x => unstakeQuery(x))
  )
  return {
    data,
    error
  }
}

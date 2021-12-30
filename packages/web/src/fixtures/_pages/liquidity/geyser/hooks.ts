import { Dispatch, SetStateAction } from 'react'
import { SWRCachePath } from './cache-path'
import BigNumber from 'bignumber.js'
import useSWR, { mutate } from 'swr'
import {
  allTokensClaimed,
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
  unstakeQuery,
  allSchedules,
  UnlockSchedule
} from './client'
import { useCallback, useState } from 'react'
import { message } from 'antd'
import Web3 from 'web3'
import {
  getUTC,
  toBigNumber,
  toEVMBigNumber,
  toNaturalNumber,
  UnwrapFunc,
  whenDefined,
  whenDefinedAll
} from 'src/fixtures/utility'
import { INITIAL_SHARES_PER_TOKEN, ONE_MONTH_SECONDS, SYSTEM_SETTIMEOUT_MAXIMUM_DELAY_VALUE } from '../constants/number'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useTheGraph } from '../uniswap-pool/hooks'

const getAllTokensClaimed = (client: Web3, geyserAddress: string) => () =>
  allTokensClaimed(client, geyserAddress).then(allEvents => {
    return allEvents.reduce(
      (a: BigNumber, c) => a.plus(c.returnValues.amount),
      toBigNumber(allEvents[0]?.returnValues.amount || 0)
    )
  })

const getTokensLocked = (client: Web3, geyserAddress: string) => () =>
  allTokensLocked(client, geyserAddress).then(allEvents => {
    return allEvents.reduce((a: BigNumber, c) => a.plus(c.returnValues.amount), toBigNumber(0))
  })

export const useTotalRewards = (geyserAddress: string) => {
  const { nonConnectedWeb3: web3 } = useProvider()
  const { data, error } = useSWR<BigNumber, Error>(
    SWRCachePath.allTokensLocked(geyserAddress),
    whenDefined(web3, x => getTokensLocked(x, geyserAddress)) || null,
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useStake = (geyserAddress: string) => {
  const { web3 } = useProvider()
  const key = 'useStake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const _stake = useCallback(
    async (amount: BigNumber) => {
      setIsLoading(true)
      message.loading({ content: 'Depositing...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        stake(x, amount, geyserAddress)
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
      )
    },
    [web3, geyserAddress]
  )
  return { stake: _stake, isLoading, error }
}

export const useUnstake = (geyserAddress: string) => {
  const { web3 } = useProvider()
  const key = 'useUnstake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const _unstake = useCallback(
    async (amount: BigNumber) => {
      setIsLoading(true)
      message.loading({ content: 'Withdrawing...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        unstake(x, amount, geyserAddress)
          .then(() => {
            message.success({ content: 'Withdrawal completed', key })
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            message.error({ content: err.message, key })
            setIsLoading(false)
          })
      )
    },
    [web3, geyserAddress]
  )
  return { unstake: _unstake, isLoading, error }
}

export const useAllTokensClaimed = (geyserAddress: string) => {
  const { nonConnectedWeb3: web3, accountAddress } = useProvider()
  const { data, error } = useSWR<BigNumber, Error>(
    SWRCachePath.useAllTokensClaimed(geyserAddress, accountAddress),
    whenDefined(web3, x => getAllTokensClaimed(x, geyserAddress)) || null,
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useTotalStakingShares = (geyserAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof totalStakingShares>, Error>(
    SWRCachePath.getTotalStakingShares(geyserAddress, accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalStakingShares(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useTotalStaked = (geyserAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof totalStakingShares>, Error>(
    SWRCachePath.useTotalStaked(geyserAddress, accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalStaked(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useUpdateAccounting = (geyserAddress: string) => {
  const { web3, accountAddress } = useProvider()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof updateAccounting>, Error>(
    SWRCachePath.getUpdateAccounting(geyserAddress, accountAddress),
    () => whenDefined(web3, x => updateAccounting(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useAllSchedules = (geyserAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof allSchedules>, Error>(
    SWRCachePath.getAllSchedules(geyserAddress, accountAddress),
    () => whenDefined(nonConnectedWeb3, x => allSchedules(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

export const useFinalUnlockSchedules = (geyserAddress: string) => {
  const { data: schedules, error } = useAllSchedules(geyserAddress)
  const data =
    schedules && schedules.length > 0
      ? schedules.reduce((a, c) => (toBigNumber(a.endAtSec).isGreaterThan(c.endAtSec) ? a : c))
      : undefined
  return {
    data,
    error
  }
}

export const useEntirePeriod = (geyserAddress: string) => {
  const { data: schedules, error } = useAllSchedules(geyserAddress)
  const startDate = whenDefined(schedules, x => (d => toBigNumber(d.endAtSec).minus(d.durationSec))(x[0]))
  const finalSchedule = whenDefined(schedules, x =>
    x.reduce((a, c) => (toBigNumber(a.endAtSec).isGreaterThan(c.endAtSec) ? a : c))
  )

  const data = whenDefinedAll([startDate, finalSchedule], ([start, final]) =>
    toBigNumber(final.endAtSec).minus(start).toNumber()
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
      finalUnlockSchedule: UnlockSchedule
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

export const useIsAlreadyFinished = (
  [state, stateSetter]: [boolean, Dispatch<SetStateAction<boolean>>],
  geyserAddress: string
): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const { data: final } = useFinalUnlockSchedules(geyserAddress)
  whenDefined(final, res => {
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

export const useRewardMultiplier = (geyserAddress: string) => {
  const { nonConnectedWeb3: web3, accountAddress } = useProvider()
  const {
    data: block,
    error: errorGetStaked,
    mutate
  } = useSWR<number | undefined, Error>(
    SWRCachePath.getStaked(geyserAddress, accountAddress),
    () =>
      whenDefinedAll([web3, accountAddress], ([client, address]) =>
        getStaked(client, address, geyserAddress).then(allEvents => {
          return allEvents[0]?.blockNumber
        })
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: timestamp, error: errorGetBlock } = useSWR<number | undefined, Error>(
    SWRCachePath.getBlock(geyserAddress, block),
    () => (block && web3 ? web3.eth.getBlock(block).then(x => Number(x.timestamp)) : undefined),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: bonusPeriod, error: errorBonusPeriodSec } = useSWR<undefined | BigNumber, Error>(
    SWRCachePath.getBonusPeriodSec(geyserAddress, accountAddress),
    () => whenDefined(web3, x => bonusPeriodSec(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const { data: _startBonus, error: errorStartBonus } = useSWR<undefined | BigNumber, Error>(
    SWRCachePath.getStartBonus(geyserAddress, accountAddress),
    () => whenDefined(web3, x => startBonus(x, geyserAddress)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const startBonusPct = _startBonus ? toBigNumber(_startBonus).div(100) : toBigNumber(0)
  const multiplier =
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
  const data = (multiplier ?? 0) < max ? multiplier : max

  return {
    data,
    max,
    mutate,
    error: errorGetStaked || errorGetBlock || errorBonusPeriodSec || errorStartBonus
  }
}

export const useTotalStakedFor = (geyserAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof totalStakedFor> | undefined, Error>(
    SWRCachePath.totalStakedFor(geyserAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, address]) =>
        totalStakedFor(client, address, geyserAddress)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error,
    mutate
  }
}

export const useMutateDepositDependence = (geyserAddress: string) => {
  const { accountAddress } = useProvider()
  const purge = useCallback(() => {
    mutate(SWRCachePath.getStaked(geyserAddress, accountAddress))
    mutate(SWRCachePath.totalStakedFor(geyserAddress, accountAddress))
  }, [accountAddress, geyserAddress])

  return {
    purge
  }
}

export const useAPY = (geyserAddress: string) => {
  const { data: totalRewards } = useTotalRewards(geyserAddress)
  const { data: totalStaked } = useTotalStaked(geyserAddress)
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

export const useUnstakeQuery = (geyserAddress: string, amount?: BigNumber) => {
  const { web3 } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof totalStakedFor> | undefined, Error>(
    SWRCachePath.unstakeQuery(geyserAddress, amount?.toFixed()),
    () => whenDefined(web3, w3 => whenDefined(amount, x => unstakeQuery(w3, x, geyserAddress))),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return {
    data,
    error
  }
}

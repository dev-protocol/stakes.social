import {
  getMyStakingAmount,
  getRewardsAmount,
  getTotalStakingAmount,
  withdrawHolderAmount,
  getMyHolderAmount,
  withdrawStakingAmount,
  stakeDev,
  cancelStaking,
  getLastAssetValueEachMetrics,
  getLastAssetValueEachMarketPerBlock
} from './client'
import { SWRCachePath } from './cache-path'
import { UnwrapFunc, toNaturalNumber, toAmountNumber } from 'src/fixtures/utility'
import useSWR from 'swr'
import { message } from 'antd'
import { useState, useCallback } from 'react'

export const useGetTotalRewardsAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getRewardsAmount>, Error>(
    SWRCachePath.getTotalRewardsAmount(propertyAddress),
    () => getRewardsAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { totalRewardsAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useWithdrawHolderReward = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawHolder = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    setError(undefined)
    return withdrawHolderAmount(propertyAddress)
      .then(() => {
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error(err.message)
        setIsLoading(false)
      })
  }, [])

  return { withdrawHolder, isLoading, error }
}

export const useGetMyHolderAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMyHolderAmount>, Error>(
    SWRCachePath.getMyHolderAmount(propertyAddress),
    () => getMyHolderAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { myHolderAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useGetTotalStakingAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress),
    () => getTotalStakingAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { totalStakingAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useGetMyStakingAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingAmount>, Error>(
    SWRCachePath.getMyStakingAmount(propertyAddress),
    () => getMyStakingAmount(propertyAddress),
    {
      onError: err => message.error(err.message)
    }
  )

  return { myStakingAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useWithdrawStakingReward = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStaking = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    setError(undefined)
    return withdrawStakingAmount(propertyAddress)
      .then(() => {
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error(err.message)
        setIsLoading(false)
      })
  }, [])

  return { withdrawStaking, isLoading, error }
}

export const useStake = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const stake = useCallback(async (propertyAddress: string, amount: string) => {
    setIsLoading(true)
    setError(undefined)
    return stakeDev(propertyAddress, toAmountNumber(amount).toFormat({ decimalSeparator: '' }))
      .then(() => {
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error(err.message)
        setIsLoading(false)
      })
  }, [])

  return { stake, isLoading, error }
}

export const useCancelStaking = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const cancel = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    setError(undefined)
    return cancelStaking(propertyAddress)
      .then(() => {
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error(err.message)
        setIsLoading(false)
      })
  }, [])

  return { cancel, isLoading, error }
}

export const useAssetStrength = (metricsAddress?: string, marketAddress?: string) => {
  const { data: metrics, error: metricsError } = useSWR<UnwrapFunc<typeof getLastAssetValueEachMetrics>, Error>(
    SWRCachePath.getLastAssetValueEachMetrics(metricsAddress ? metricsAddress : ''),
    () => getLastAssetValueEachMetrics(metricsAddress ? metricsAddress : ''),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: market, error: marketError } = useSWR<UnwrapFunc<typeof getLastAssetValueEachMarketPerBlock>, Error>(
    SWRCachePath.getLastAssetValueEachMarketPerBlock(marketAddress ? marketAddress : ''),
    () => getLastAssetValueEachMarketPerBlock(marketAddress ? marketAddress : ''),
    { onError: err => message.error(err.message) }
  )
  return {
    assetStrength: metrics && market ? Number(metrics) / Number(market) : undefined,
    error: metricsError || marketError
  }
}

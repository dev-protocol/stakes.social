import {
  getMyStakingAmount,
  getRewardsAmount,
  getTotalStakingAmount,
  withdrawHolderAmount,
  getMyHolderAmount,
  stakeDev,
  cancelStaking,
  withdrawStakingRewardAmount,
  withdrawStakingAmount,
  getMyStakingRewardAmount,
  createProperty,
  marketScheme,
  authenticate,
  getWithdrawalStatus,
  getTotalStakingAmountOnProtocol,
  calculateMaxRewardsPerBlock,
  totalSupply,
  holdersShare,
  createGetVotablePolicy,
  createAndAuthenticate
} from './client'
import { SWRCachePath } from './cache-path'
import { UnwrapFunc, toNaturalNumber, toAmountNumber } from 'src/fixtures/utility'
import { getBlockNumber } from 'src/fixtures/wallet/utility'
import useSWR from 'swr'
import { message } from 'antd'
import { useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'

export const useGetTotalRewardsAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getRewardsAmount>, Error>(
    SWRCachePath.getTotalRewardsAmount(propertyAddress),
    () => getRewardsAmount(propertyAddress),
    { onError: err => message.error(err.message) }
  )
  return { totalRewardsAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useWithdrawHolderReward = () => {
  const key = 'useWithdrawHolderReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawHolder = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    message.loading({ content: 'now withdrawing holder reward...', duration: 0, key })
    setError(undefined)
    return withdrawHolderAmount(propertyAddress)
      .then(() => {
        message.success({ content: 'success withdrawing!', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
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

export const useGetMyStakingRewardAmount = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingRewardAmount>, Error>(
    SWRCachePath.getMyStakingRewardAmount(propertyAddress),
    () => getMyStakingRewardAmount(propertyAddress),
    {
      onError: err => message.error(err.message)
    }
  )

  return { myStakingRewardAmount: data ? toNaturalNumber(data) : undefined, error }
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
  const key = 'useWithdrawStakingReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStakingReward = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    message.loading({ content: 'now withdrawing staking reward...', duration: 0, key })
    setError(undefined)
    return withdrawStakingRewardAmount(propertyAddress)
      .then(() => {
        message.success({ content: 'success withdrawing!', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])

  return { withdrawStakingReward, isLoading, error }
}

export const useWithdrawStaking = () => {
  const key = 'useWithdrawStaking'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStaking = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    message.loading({ content: 'now withdrawing staking...', duration: 0, key })
    setError(undefined)
    return withdrawStakingAmount(propertyAddress)
      .then(() => {
        message.success({ content: 'success withdrawing!', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])

  return { withdrawStaking, isLoading, error }
}

export const useStake = () => {
  const key = 'useStake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const stake = useCallback(async (propertyAddress: string, amount: string) => {
    setIsLoading(true)
    message.loading({ content: 'now staking...', duration: 0, key })
    setError(undefined)
    return stakeDev(propertyAddress, toAmountNumber(amount).toFormat({ decimalSeparator: '' }))
      .then(() => {
        message.success({ content: 'success staking!', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])

  return { stake, isLoading, error }
}

export const useCancelStaking = () => {
  const key = 'useCancelStaking'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const cancel = useCallback(async (propertyAddress: string) => {
    setIsLoading(true)
    message.loading({ content: 'now canceling staking...', duration: 0, key })
    setError(undefined)
    return cancelStaking(propertyAddress)
      .then(() => {
        message.success({ content: 'canceled staking', key })
        setIsLoading(false)
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        throw err
      })
  }, [])

  return { cancel, isLoading, error }
}

export const useGetWithdrawalStatus = (propertyAddress: string) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getWithdrawalStatus>, Error>(
    SWRCachePath.getWithdrawalStatus(propertyAddress),
    () => getWithdrawalStatus(propertyAddress),
    {
      onError: err => message.error(err.message)
    }
  )
  const withdrawable = getBlockNumber()?.then(x => (x && data ? x >= data : false))

  return { withdrawalStatus: data, withdrawable, error }
}

export const useStakingShare = (propertyAddress: string) => {
  const { data: inProperty, error: inPropertyError } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress),
    () => getTotalStakingAmount(propertyAddress),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: inProtocol, error: inProtocolError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(SWRCachePath.getTotalStakingAmountOnProtocol, () => getTotalStakingAmountOnProtocol(), {
    onError: err => message.error(err.message)
  })
  return {
    stakingShare: inProperty && inProtocol ? Number(inProperty) / Number(inProtocol) : undefined,
    error: inPropertyError || inProtocolError
  }
}

export const useCreateProperty = () => {
  const key = 'useCreateProperty'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async (name: string, symbol: string, author: string) => {
    setIsLoading(true)
    message.loading({ content: 'now creating property...', duration: 0, key })
    setError(undefined)
    return createProperty(name, symbol, author)
      .then(result => {
        message.success({ content: 'success creating property!', key })
        setIsLoading(false)
        return result || ''
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        return ''
      })
  }, [])
  return { createProperty: callback, isLoading, error }
}

export const useMarketScheme = () => {
  const key = 'useMarketScheme'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async (marketAddress: string) => {
    setIsLoading(true)
    message.loading({ content: 'now loading...', duration: 0, key })
    setError(undefined)
    return marketScheme(marketAddress)
      .then(result => {
        message.success({ content: 'success!', key })
        setIsLoading(false)
        return result || []
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])
  return { marketScheme: callback, isLoading, error }
}

export const useAuthenticate = () => {
  const key = 'useAuthenticate'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async (marketAddress: string, propertyAddress: string, args: string[]) => {
    setIsLoading(true)
    message.loading({ content: 'now authenticating...', duration: 0, key })
    setError(undefined)
    return authenticate(marketAddress, propertyAddress, args)
      .then(metricsAddress => {
        setIsLoading(false)
        message.success({ content: 'success authenticate!', key })
        return metricsAddress
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        return ''
      })
  }, [])
  return { authenticate: callback, isLoading, error }
}

export const useCreateAndAuthenticate = () => {
  const key = 'useCreateAndAuthenticate'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async (name: string, symbol: string, marketAddress: string, args: string[]) => {
    setIsLoading(true)
    message.loading({ content: 'now authenticating...', duration: 0, key })
    setError(undefined)
    return createAndAuthenticate(name, symbol, marketAddress, args)
      .then(metricsAddress => {
        setIsLoading(false)
        message.success({ content: 'success authenticate!', key })
        return metricsAddress
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        return ''
      })
  }, [])
  return { createAndAuthenticate: callback, isLoading, error }
}

export const useAPY = () => {
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock,
    () => calculateMaxRewardsPerBlock().catch(() => '0'),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: totalStaking, error: totalStakingError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(SWRCachePath.getTotalStakingAmountOnProtocol, () => getTotalStakingAmountOnProtocol(), {
    onError: err => message.error(err.message)
  })
  const { data: holders, error: holdersError } = useSWR<UnwrapFunc<typeof holdersShare>, Error>(
    SWRCachePath.holdersShare(maxRewards, totalStaking),
    () => (maxRewards && totalStaking ? holdersShare(maxRewards, totalStaking) : undefined),
    {
      onError: err => message.error(err.message)
    }
  )

  const stakers = maxRewards && holders ? new BigNumber(maxRewards).minus(new BigNumber(holders)) : undefined
  const year = new BigNumber(2102400)
  const apy = stakers && totalStaking ? stakers.times(year).div(totalStaking).times(100) : undefined
  const creators = holders && totalStaking ? new BigNumber(holders).times(year).div(totalStaking).times(100) : undefined

  return { apy, creators, error: maxRewardsError || totalStakingError || holdersError }
}

export const useAnnualSupplyGrowthRatio = () => {
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock,
    () => calculateMaxRewardsPerBlock().catch(() => '0'),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply,
    () => totalSupply(),
    {
      onError: err => message.error(err.message)
    }
  )
  const year = new BigNumber(2102400)
  const annualSupplyGrowthRatio =
    maxRewards && totalSupplyValue ? new BigNumber(maxRewards).times(year).div(totalSupplyValue).times(100) : undefined

  return { annualSupplyGrowthRatio, error: maxRewardsError || totalSupplyError }
}

export const useGetPolicyAddressesList = () => {
  const key = 'useGetPolicyList'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async () => {
    setIsLoading(true)
    setError(undefined)
    return createGetVotablePolicy()
      .then(policyAddressesList => {
        setIsLoading(false)
        return [...policyAddressesList]
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
      })
  }, [])
  return { getPolicyAddressesList: callback, isLoading, error }
}

import {
  getMyStakingAmount,
  getRewardsAmount,
  getTotalStakingAmount,
  withdrawHolderAmount,
  getMyHolderAmount,
  stakeDev,
  withdrawStakingAmount,
  getMyStakingRewardAmount,
  createProperty,
  marketScheme,
  authenticate,
  getTotalStakingAmountOnProtocol,
  calculateMaxRewardsPerBlock,
  totalSupply,
  holdersShare,
  createGetVotablePolicy,
  createAndAuthenticate,
  propertyAuthor,
  balanceOf,
  allClaimedRewards,
  propertyName,
  propertySymbol,
  balanceOfProperty
} from './client'
import { SWRCachePath } from './cache-path'
import {
  UnwrapFunc,
  toNaturalNumber,
  toAmountNumber,
  toBigNumber,
  whenDefined,
  whenDefinedAll
} from 'src/fixtures/utility'
import { getDevAmount } from 'src/fixtures/wallet/utility'
import useSWR from 'swr'
import { message } from 'antd'
import { useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useCurrency } from 'src/fixtures/currency/functions/useCurrency'
import Web3 from 'web3'
import { isAddress } from 'web3-utils'
import { INFURA_ENDPOINT } from 'src/fixtures/wallet/constants'

const validAddress = (address: string = ''): boolean =>
  typeof address === 'string' && isAddress(address) && address.length === 42

export const useGetTotalRewardsAmount = (propertyAddress: string) => {
  const { nonConnectedWeb3: web3, accountAddress } = useProvider()
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof getRewardsAmount>, Error>(
    SWRCachePath.getTotalRewardsAmount(propertyAddress, accountAddress),
    () => whenDefined(web3, x => getRewardsAmount(x, propertyAddress)),
    { onError: err => message.error(err.message) }
  )
  return {
    totalRewardsAmount: whenDefined(data, x => toCurrency(toNaturalNumber(toNaturalNumber(x)))),
    currency,
    error
  }
}

export const useWithdrawHolderReward = () => {
  const { web3 } = useProvider()
  const key = 'useWithdrawHolderReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawHolder = useCallback(
    async (propertyAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing holder reward...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        withdrawHolderAmount(x, propertyAddress)
          .then(() => {
            message.success({ content: 'success withdrawing!', key })
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            message.error({ content: err.message, key })
            setIsLoading(false)
          })
      )
    },
    [web3]
  )

  return { withdrawHolder, isLoading, error }
}

export const useGetMyHolderAmount = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyHolderAmount>, Error>(
    SWRCachePath.getMyHolderAmount(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, account]) =>
        getMyHolderAmount(client, propertyAddress, account)
      ),
    { onError: err => message.error(err.message) }
  )
  return { myHolderAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useGetTotalStakingAmount = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress, accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmount(x, propertyAddress)),
    { onError: err => message.error(err.message) }
  )
  return { totalStakingAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))), currency, error }
}

export const useGetMyStakingRewardAmount = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingRewardAmount>, Error>(
    SWRCachePath.getMyStakingRewardAmount(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, account]) =>
        getMyStakingRewardAmount(client, propertyAddress, account)
      ),
    {
      onError: err => message.error(err.message)
    }
  )

  return {
    dev: whenDefined(data, x => toNaturalNumber(x)),
    myStakingRewardAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))),
    currency,
    error
  }
}

export const useGetMyStakingAmount = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingAmount>, Error>(
    SWRCachePath.getMyStakingAmount(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, account]) =>
        getMyStakingAmount(client, propertyAddress, account)
      ),
    {
      onError: err => message.error(err.message)
    }
  )

  return { myStakingAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))), currency, error }
}

export const useWithdrawStakingReward = () => {
  const { web3 } = useProvider()
  const key = 'useWithdrawStakingReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStakingReward = useCallback(
    async (propertyAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing staking reward...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        withdrawStakingAmount(x, propertyAddress, toBigNumber(0))
          .then(() => {
            message.success({ content: 'success withdrawing!', key })
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            message.error({ content: err.message, key })
            setIsLoading(false)
          })
      )
    },
    [web3]
  )

  return { withdrawStakingReward, isLoading, error }
}

export const useWithdrawStaking = () => {
  const { web3 } = useProvider()
  const key = 'useWithdrawStaking'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStaking = useCallback(
    async (propertyAddress: string, amount: BigNumber) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing staking...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        withdrawStakingAmount(x, propertyAddress, amount)
          .then(() => {
            message.success({ content: 'success withdrawing!', key })
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            message.error({ content: err.message, key })
            setIsLoading(false)
          })
      )
    },
    [web3]
  )

  return { withdrawStaking, isLoading, error }
}

export const useStake = () => {
  const { web3 } = useProvider()
  const key = 'useStake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const stake = useCallback(
    async (propertyAddress: string, amount: string) => {
      setIsLoading(true)
      message.loading({ content: 'now staking...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        stakeDev(x, propertyAddress, toAmountNumber(amount).toFormat({ decimalSeparator: '' }))
          .then(() => {
            message.success({ content: 'success staking!', key })
            setIsLoading(false)
          })
          .catch(err => {
            setError(err)
            message.error({ content: err.message, key })
            setIsLoading(false)
          })
      )
    },
    [web3]
  )

  return { stake, isLoading, error }
}

export const useTotalStakingAmountOnProtocol = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: stakingAmount, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmountOnProtocol>, Error>(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmountOnProtocol(x)),
    { onError: err => message.error(err.message) }
  )
  return {
    totalStakingAmount: stakingAmount ? Number(stakingAmount) : undefined,
    error
  }
}

export const useTotalStakingRatio = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalSupply(x)),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: stakingAmount, error: stakingAmountError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => message.error(err.message)
    }
  )
  return {
    totalStakingRatio: totalSupplyValue && stakingAmount ? Number(stakingAmount) / Number(totalSupplyValue) : undefined,
    error: totalSupplyError || stakingAmountError
  }
}

export const useStakingShare = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: inProperty, error: inPropertyError } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress, accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmount(x, propertyAddress)),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: inProtocol, error: inProtocolError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => message.error(err.message)
    }
  )
  return {
    stakingShare: inProperty && inProtocol ? Number(inProperty) / Number(inProtocol) : undefined,
    error: inPropertyError || inProtocolError
  }
}

export const useCreateProperty = () => {
  const { web3 } = useProvider()
  const key = 'useCreateProperty'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (name: string, symbol: string, author: string) => {
      setIsLoading(true)
      message.loading({ content: 'now creating property...', duration: 0, key })
      setError(undefined)
      return (
        whenDefined(web3, x =>
          createProperty(x, name, symbol, author)
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
        ) || ''
      )
    },
    [web3]
  )
  return { createProperty: callback, isLoading, error }
}

export const useMarketScheme = () => {
  const { web3 } = useProvider()
  const key = 'useMarketScheme'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (marketAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now loading...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        marketScheme(x, marketAddress)
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
      )
    },
    [web3]
  )
  return { marketScheme: callback, isLoading, error }
}

export const useAuthenticate = () => {
  const { web3 } = useProvider()
  const key = 'useAuthenticate'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (marketAddress: string, propertyAddress: string, args: string[]) => {
      setIsLoading(true)
      message.loading({ content: 'now authenticating...', duration: 0, key })
      setError(undefined)
      return whenDefined(web3, x =>
        authenticate(x, marketAddress, propertyAddress, args)
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
      )
    },
    [web3]
  )
  return { authenticate: callback, isLoading, error }
}

export const useCreateAndAuthenticate = () => {
  const { web3 } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (name: string, symbol: string, marketAddress: string, args: string[]) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(web3, x =>
        createAndAuthenticate(x, name, symbol, marketAddress, args)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [web3]
  )
  return { createAndAuthenticate: callback, isLoading, error }
}

export const useAPY = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: totalStaking, error: totalStakingError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: holders, error: holdersError } = useSWR<UnwrapFunc<typeof holdersShare>, Error>(
    SWRCachePath.holdersShare(maxRewards, totalStaking),
    () =>
      maxRewards && totalStaking
        ? whenDefined(nonConnectedWeb3, x => holdersShare(x, maxRewards, totalStaking))
        : undefined,
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

export const useTotalSupply = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalSupply(x)),
    {
      onError: err => message.error(err.message)
    }
  )

  return { totalSupply: new BigNumber(totalSupplyValue || '0'), error }
}

export const useCirculatingSupply = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalSupply(x)),
    {
      onError: err => message.error(err.message)
    }
  )

  const circulatingSupplyValue = useCallback(async () => {
    const teamAmount = await getDevAmount('0xe23fe51187a807d56189212591f5525127003bdf')
    return new BigNumber(totalSupplyValue || '0').minus(new BigNumber(teamAmount || '0'))
  }, [totalSupplyValue])

  return { circulatingSupply: circulatingSupplyValue, error }
}

export const useAnnualSupplyGrowthRatio = () => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    {
      onError: err => message.error(err.message)
    }
  )
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(accountAddress),
    () => whenDefined(nonConnectedWeb3, x => totalSupply(x)),
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
  const { nonConnectedWeb3 } = useProvider()
  const key = 'useGetPolicyList'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async () => {
    setIsLoading(true)
    setError(undefined)
    return whenDefined(nonConnectedWeb3, x =>
      createGetVotablePolicy(x)
        .then(policyAddressesList => {
          setIsLoading(false)
          return [...policyAddressesList]
        })
        .catch(err => {
          setError(err)
          message.error({ content: err.message, key })
          setIsLoading(false)
        })
    )
  }, [nonConnectedWeb3])
  return { getPolicyAddressesList: callback, isLoading, error }
}

export const usePropertyAuthor = (propertyAddress?: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.propertyAuthor(propertyAddress, accountAddress),
    () => whenDefinedAll([nonConnectedWeb3, propertyAddress], ([client, property]) => propertyAuthor(client, property)),
    {
      onError: err => message.error(err.message)
    }
  )

  return { author: data, error }
}

export const useBalanceOf = () => {
  const { currency, toCurrency } = useCurrency()
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(SWRCachePath.balanceOf(accountAddress), () =>
    whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, account]) =>
      balanceOf(client, account).then(toBigNumber)
    )
  )
  const humanizedDev = whenDefined(data, toNaturalNumber)
  const amount = toCurrency(humanizedDev)
  return { amount, currency, error }
}

export const useAllClaimedRewards = () => {
  // TODO: use own node
  // NOTE: use Infura now becuase calling getPastEvents is very slow or error occured
  const web3 = new Web3(INFURA_ENDPOINT)
  const { currency, toCurrency } = useCurrency()
  const { accountAddress } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(SWRCachePath.allClaimedRewards(accountAddress), () =>
    whenDefinedAll([web3, accountAddress], ([client, account]) =>
      allClaimedRewards(client, account).then(allEvents => {
        return allEvents.reduce((a, c) => a.plus(c.returnValues.value), toBigNumber(0))
      })
    )
  )
  const humanizedDev = whenDefined(data, toNaturalNumber)
  const amount = toCurrency(humanizedDev)

  return { amount, currency, error }
}

export const usePropertyName = (propertyAddress?: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof propertyName>, Error>(
    SWRCachePath.propertyName(propertyAddress, accountAddress),
    () =>
      validAddress(propertyAddress)
        ? whenDefinedAll([nonConnectedWeb3, propertyAddress], ([client, property]) => propertyName(client, property))
        : 'Foo',
    {
      onError: err => message.error(err.message)
    }
  )

  return { name: data, error }
}

export const usePropertySymbol = (propertyAddress?: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof propertySymbol>, Error>(
    SWRCachePath.propertySymbol(propertyAddress, accountAddress),
    () =>
      validAddress(propertyAddress)
        ? whenDefinedAll([nonConnectedWeb3, propertyAddress], ([client, property]) => propertySymbol(client, property))
        : 'FOO',
    {
      onError: err => message.error(err.message)
    }
  )

  return { symbol: data, error }
}

export const useBalanceOfProperty = (propertyAddress: string) => {
  const { nonConnectedWeb3, accountAddress } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.balanceOfProperty(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, accountAddress], ([client, account]) =>
        balanceOfProperty(client, propertyAddress, account).then(toBigNumber)
      )
  )
  return { balance: data, error }
}

export const useBalanceOfAccountProperty = (propertyAddress?: string, accountAddress?: string) => {
  const { nonConnectedWeb3 } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.balanceOfProperty(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedWeb3, propertyAddress, accountAddress], ([client, property, account]) =>
        balanceOfProperty(client, property, account).then(toBigNumber)
      )
  )
  return { balance: data, error }
}

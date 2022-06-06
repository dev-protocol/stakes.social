import {
  getMyStakingAmount,
  getRewardsAmount,
  getTotalStakingAmount,
  withdrawHolderAmount,
  getMyHolderAmount,
  getTreasuryAmount,
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
  balanceOfProperty,
  detectStokens,
  detectStokensByPropertyAddress,
  getStokenTokenURI,
  setStokenTokenURIImage,
  getStokenOwnerOf,
  getStokenPositions,
  getStokenRewards,
  getStokenHeldAt,
  allowance,
  approve,
  depositToProperty,
  depositToPosition,
  withdrawByPosition,
  migrateToSTokens,
  getTokenURI,
  getStokenSymbol,
  positionsOfOwner,
  getEnabledMarkets,
  getAuthenticatedProperties,
  metricsOfProperty,
  getMarketBehavior,
  getId,
  getMarket
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
import useSWR from 'swr'
import { message } from 'antd'
import { useMemo, useState, useCallback } from 'react'
import BigNumber from 'bignumber.js'
import { useDetectChain, useIsL1, useProvider } from 'src/fixtures/wallet/hooks'
import { useCurrency } from 'src/fixtures/currency/functions/useCurrency'
import { isAddress } from 'web3-utils'
import { UndefinedOr } from '@devprotocol/util-ts'

interface DevAllocations {
  privateSale: string
  teamOptions: string
  teamTreasury: string
  ecosystemFund: string
  airdrop: string
}
const DEV_ALLOCATIONS: DevAllocations = {
  privateSale: '0x33b5043442979D2226E9a6389F7201932D11e448',
  teamOptions: '0xA47c73A77d358A985157034A2338fAB7742B107E',
  teamTreasury: '0x0dAb082C2f2CD7C6C2a9335b69d0B2aB8121178D',
  ecosystemFund: '0x93d7A66E10b6a8a5a00313bC68F0FB234c8eB06D',
  airdrop: '0x6B18fDa007ec96E187e5CF89D1873B9F75D5293D'
}

const validAddress = (address: string = ''): boolean =>
  typeof address === 'string' && isAddress(address) && address.length === 42

export const useGetTotalRewardsAmount = (propertyAddress: string) => {
  const { nonConnectedEthersProvider: prov, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(prov)
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof getRewardsAmount>, Error>(
    SWRCachePath.getTotalRewardsAmount(propertyAddress, accountAddress, chain),
    () => whenDefined(prov, x => getRewardsAmount(x, propertyAddress)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return {
    totalRewardsAmount: whenDefined(data, x => toCurrency(toNaturalNumber(toNaturalNumber(x)))),
    currency,
    error
  }
}

export const useWithdrawHolderReward = () => {
  const { ethersProvider } = useProvider()
  const key = 'useWithdrawHolderReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawHolder = useCallback(
    async (propertyAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing holder reward...', duration: 0, key })
      if (!ethersProvider) {
        message.error({ content: 'Could not find a Web3 provider', key })
      }
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )

  return { withdrawHolder, isLoading, error }
}

export const useGetMyHolderAmount = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof getMyHolderAmount>, Error>(
    SWRCachePath.getMyHolderAmount(chain, propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        getMyHolderAmount(client, property, account)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const [withdrawable, , , total] = data || []
  return {
    myHolderAmount: withdrawable ? toNaturalNumber(withdrawable) : undefined,
    total: total ? toNaturalNumber(total) : undefined,
    error
  }
}

export const useGetHolderAmountByAddress = (propertyAddress: string, srcAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyHolderAmount>, Error>(
    SWRCachePath.getMyHolderAmount(propertyAddress, srcAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, srcAddress], ([client, account]) =>
        getMyHolderAmount(client, propertyAddress, account)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const [withdrawable, , , total] = data || []
  return {
    holderAmount: withdrawable ? toNaturalNumber(withdrawable) : undefined,
    total: total ? toNaturalNumber(total) : undefined,
    error
  }
}

export const useGetTreasuryAmount = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof getTreasuryAmount>, Error>(
    SWRCachePath.getTreasuryAmount(chain, propertyAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress], ([client, property]) =>
        getTreasuryAmount(client, property)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return { treasuryAmount: data ? toNaturalNumber(data) : undefined, error }
}

export const useGetTotalStakingAmount = (propertyAddress: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress, accountAddress, chain),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmount(x, propertyAddress)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return { totalStakingAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))), currency, error }
}

export const useGetMyStakingRewardAmount = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingRewardAmount>, Error>(
    SWRCachePath.getMyStakingRewardAmount(chain, propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        getMyStakingRewardAmount(client, property, account)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return {
    dev: whenDefined(data, x => toNaturalNumber(x)),
    myStakingRewardAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))),
    currency,
    error
  }
}

export const useGetMyStakingAmount = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getMyStakingAmount>, Error>(
    SWRCachePath.getMyStakingAmount(chain, propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        getMyStakingAmount(client, property, account)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return { myStakingAmount: whenDefined(data, x => toCurrency(toNaturalNumber(x))), currency, error }
}

export const useWithdrawStakingReward = () => {
  const { ethersProvider } = useProvider()
  const key = 'useWithdrawStakingReward'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStakingReward = useCallback(
    async (propertyAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing staking reward...', duration: 0, key })
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )

  return { withdrawStakingReward, isLoading, error }
}

export const useWithdrawStaking = () => {
  const { ethersProvider } = useProvider()
  const key = 'useWithdrawStaking'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const withdrawStaking = useCallback(
    async (propertyAddress: string, amount: BigNumber) => {
      setIsLoading(true)
      message.loading({ content: 'now withdrawing staking...', duration: 0, key })
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )

  return { withdrawStaking, isLoading, error }
}

export const useStake = () => {
  const { ethersProvider } = useProvider()
  const key = 'useStake'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const stake = useCallback(
    async (propertyAddress: string, amount: string) => {
      setIsLoading(true)
      message.loading({ content: 'now staking...', duration: 0, key })
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )

  return { stake, isLoading, error }
}

export const useTotalStakingAmountOnProtocol = () => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data: stakingAmount, error } = useSWR<UnwrapFunc<typeof getTotalStakingAmountOnProtocol>, Error>(
    SWRCachePath.getTotalStakingAmountOnProtocol(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return {
    totalStakingAmount: stakingAmount ? Number(stakingAmount) : undefined,
    error
  }
}

export const useTotalStakingRatio = () => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => totalSupply(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: stakingAmount, error: stakingAmountError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return {
    totalStakingRatio: totalSupplyValue && stakingAmount ? Number(stakingAmount) / Number(totalSupplyValue) : undefined,
    error: totalSupplyError || stakingAmountError
  }
}

export const useStakingShare = (propertyAddress: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data: inProperty, error: inPropertyError } = useSWR<UnwrapFunc<typeof getTotalStakingAmount>, Error>(
    SWRCachePath.getTotalStakingAmount(propertyAddress, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmount(x, propertyAddress)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: inProtocol, error: inProtocolError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  return {
    stakingShare: inProperty && inProtocol ? Number(inProperty) / Number(inProtocol) : undefined,
    error: inPropertyError || inProtocolError
  }
}

export const useCreateProperty = () => {
  const { ethersProvider } = useProvider()
  const key = 'useCreateProperty'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (name: string, symbol: string, author: string) => {
      setIsLoading(true)
      message.loading({ content: 'now creating property...', duration: 0, key })
      setError(undefined)
      return (
        whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )
  return { createProperty: callback, isLoading, error }
}

export const useMarketScheme = () => {
  const { ethersProvider } = useProvider()
  const key = 'useMarketScheme'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (marketAddress: string) => {
      setIsLoading(true)
      message.loading({ content: 'now loading...', duration: 0, key })
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )
  return { marketScheme: callback, isLoading, error }
}

export const useAuthenticate = () => {
  const { ethersProvider } = useProvider()
  const key = 'useAuthenticate'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (marketAddress: string, propertyAddress: string, args: string[]) => {
      setIsLoading(true)
      message.loading({ content: 'now authenticating...', duration: 0, key })
      setError(undefined)
      return whenDefined(ethersProvider, x =>
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
    [ethersProvider]
  )
  return { authenticate: callback, isLoading, error }
}

export const useCreateAndAuthenticate = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (name: string, symbol: string, marketAddress: string, args: string[]) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, x =>
        createAndAuthenticate(x, name, symbol, marketAddress, args)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { createAndAuthenticate: callback, isLoading, error }
}

export const useAPY = () => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { isL1 } = useIsL1()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: totalStaking, error: totalStakingError } = useSWR<
    UnwrapFunc<typeof getTotalStakingAmountOnProtocol>,
    Error
  >(
    SWRCachePath.getTotalStakingAmountOnProtocol(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => getTotalStakingAmountOnProtocol(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: holders, error: holdersError } = useSWR<UnwrapFunc<typeof holdersShare>, Error>(
    SWRCachePath.holdersShare(chain, maxRewards, totalStaking),
    () =>
      maxRewards && totalStaking
        ? whenDefined(nonConnectedEthersProvider, x => holdersShare(x, maxRewards, totalStaking))
        : undefined,
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  const stakers = maxRewards && holders ? new BigNumber(maxRewards).minus(new BigNumber(holders)) : undefined
  const year = useMemo(() => new BigNumber(isL1 || isL1 === undefined ? 2102400 : 31536000), [isL1])
  const apy = stakers && totalStaking ? stakers.times(year).div(totalStaking).times(100) : undefined
  const creators = holders && totalStaking ? new BigNumber(holders).times(year).div(totalStaking).times(100) : undefined

  return { apy, creators, error: maxRewardsError || totalStakingError || holdersError }
}

export const useTotalSupply = () => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => totalSupply(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return { totalSupply: new BigNumber(totalSupplyValue || '0'), error }
}

export const useCirculatingSupply = () => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data: totalSupplyValue, error } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => totalSupply(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  const circulatingSupplyValue = useCallback(async () => {
    const amounts = await whenDefined(nonConnectedEthersProvider, prov =>
      Promise.all([
        balanceOf(prov, DEV_ALLOCATIONS.privateSale),
        balanceOf(prov, DEV_ALLOCATIONS.teamOptions),
        balanceOf(prov, DEV_ALLOCATIONS.teamTreasury),
        balanceOf(prov, DEV_ALLOCATIONS.ecosystemFund),
        balanceOf(prov, DEV_ALLOCATIONS.airdrop)
      ])
    )
    const privateSaleAmount = new BigNumber(amounts?.[0] || '0')
    const teamOptionAmount = new BigNumber(amounts?.[1] || '0')
    const teamAmount = new BigNumber(amounts?.[2] || '0')
    const ecosystemFundAmount = new BigNumber(amounts?.[3] || '0')
    const airdropAmount = new BigNumber(amounts?.[4] || '0')
    return new BigNumber(totalSupplyValue || '0')
      .minus(privateSaleAmount)
      .minus(teamOptionAmount)
      .minus(teamAmount)
      .minus(ecosystemFundAmount)
      .minus(airdropAmount)
  }, [totalSupplyValue, nonConnectedEthersProvider])

  return { circulatingSupply: circulatingSupplyValue, error }
}

export const useAnnualSupplyGrowthRatio = () => {
  const { nonConnectedEthersProvider, nonConnectedEthersL1Provider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { isL1 } = useIsL1()
  const { data: maxRewards, error: maxRewardsError } = useSWR<UnwrapFunc<typeof calculateMaxRewardsPerBlock>, Error>(
    SWRCachePath.calculateMaxRewardsPerBlock(chain, accountAddress),
    () => whenDefined(nonConnectedEthersProvider, x => calculateMaxRewardsPerBlock(x).catch(() => '0')),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const { data: totalSupplyValue, error: totalSupplyError } = useSWR<UnwrapFunc<typeof totalSupply>, Error>(
    SWRCachePath.totalSupply(chain, accountAddress),
    () => whenDefined(nonConnectedEthersL1Provider, x => totalSupply(x)),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )
  const year = useMemo(() => new BigNumber(isL1 || isL1 === undefined ? 2102400 : 31536000), [isL1])
  const annualSupplyGrowthRatio =
    maxRewards && totalSupplyValue ? new BigNumber(maxRewards).times(year).div(totalSupplyValue).times(100) : undefined

  return { annualSupplyGrowthRatio, error: maxRewardsError || totalSupplyError }
}

export const useGetPolicyAddressesList = () => {
  const { nonConnectedEthersProvider } = useProvider()
  const key = 'useGetPolicyList'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(async () => {
    setIsLoading(true)
    setError(undefined)
    return whenDefined(nonConnectedEthersProvider, x =>
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
  }, [nonConnectedEthersProvider])
  return { getPolicyAddressesList: callback, isLoading, error }
}

export const usePropertyAuthor = (propertyAddress?: string) => {
  const shouldFetch = propertyAddress && propertyAddress.startsWith('0x')
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<undefined | UnwrapFunc<typeof totalSupply>, Error>(
    shouldFetch ? SWRCachePath.propertyAuthor(chain, propertyAddress, accountAddress) : null,
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress], ([client, property]) =>
        propertyAuthor(client, property)
      ),
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return { author: data, error }
}

export const useBalanceOf = () => {
  const { currency, toCurrency } = useCurrency()
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.balanceOf(chain, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, accountAddress], ([client, account]) =>
        balanceOf(client, account).then(toBigNumber)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const humanizedDev = whenDefined(data, toNaturalNumber)
  const amount = toCurrency(humanizedDev)
  return { amount, currency, error }
}

export const useAllClaimedRewards = () => {
  const { currency, toCurrency } = useCurrency()
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.allClaimedRewards(accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, accountAddress], ([client, account]) =>
        allClaimedRewards(client, account).then(allEvents => {
          return allEvents.reduce((a, c) => a.plus(c.args?.value), toBigNumber(0))
        })
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const humanizedDev = whenDefined(data, toNaturalNumber)
  const amount = toCurrency(humanizedDev)

  return { amount, currency, error }
}

export const usePropertyName = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof propertyName>, Error>(
    SWRCachePath.propertyName(chain, propertyAddress, accountAddress),
    () =>
      validAddress(propertyAddress)
        ? whenDefinedAll([nonConnectedEthersProvider, propertyAddress], ([client, property]) =>
            propertyName(client, property)
          )
        : 'Foo',
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return { name: data, error }
}

export const usePropertySymbol = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof propertySymbol>, Error>(
    SWRCachePath.propertySymbol(chain, propertyAddress, accountAddress),
    () =>
      validAddress(propertyAddress)
        ? whenDefinedAll([nonConnectedEthersProvider, propertyAddress], ([client, property]) =>
            propertySymbol(client, property)
          )
        : 'FOO',
    {
      onError: err => {
        console.log(err)
        message.error(err.message)
      },
      revalidateOnFocus: false,
      focusThrottleInterval: 0
    }
  )

  return { symbol: data, error }
}

export const useBalanceOfProperty = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.balanceOfProperty(chain, propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        balanceOfProperty(client, property, account).then(toBigNumber)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { balance: data, error }
}

export const useBalanceOfAccountProperty = (propertyAddress?: string, accountAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { data, error } = useSWR<BigNumber | undefined, Error>(
    SWRCachePath.balanceOfProperty(propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        balanceOfProperty(client, property, account).then(toBigNumber)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { balance: data, error }
}

export const useDetectSTokens = (propertyAddress?: string, accountAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof detectStokens>, Error>(
    SWRCachePath.detectStokens(chain, propertyAddress, accountAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress, accountAddress], ([client, property, account]) =>
        detectStokens(client, property, account)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  const { data: detectStokensByPropertyAddressData, error: byPropertyAddressError } = useSWR<
    UnwrapFunc<typeof detectStokensByPropertyAddress>,
    Error
  >(
    SWRCachePath.detectStokens(chain, propertyAddress, 'ALL'),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, propertyAddress], ([client, property]) =>
        detectStokensByPropertyAddress(client, property)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  return {
    sTokens: data,
    sTokensByPropertyAddress: detectStokensByPropertyAddressData,
    error: error || byPropertyAddressError
  }
}

export const usePositionsOfOwner = (accountAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const shouldFetch = accountAddress && chain
  const { data, error } = useSWR<UnwrapFunc<typeof positionsOfOwner>, Error>(
    shouldFetch ? SWRCachePath.positionsOfOwner(chain, accountAddress) : null,
    () =>
      whenDefinedAll([nonConnectedEthersProvider, accountAddress], ([client, account]) =>
        positionsOfOwner(client, account)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )

  return { positions: data, error }
}

export const useGetSTokenTokenURI = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getStokenTokenURI>, Error>(
    SWRCachePath.getStokenTokenURI(chain, sTokenId),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
        getStokenTokenURI(client, sTokenId)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { tokenURI: data, error, mutate }
}

export const useSetSTokenTokenURIImage = (sTokenId?: number) => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()

  const callback = useCallback(
    async (data: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefinedAll([ethersProvider, sTokenId], ([client, id]) =>
        setStokenTokenURIImage(client, id, data)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider, sTokenId]
  )

  return { callback, loading: isLoading, error }
}

export const useGetSTokenOwnerOf = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const shouldFetch = chain && sTokenId
  const { data, error } = useSWR<UnwrapFunc<typeof getStokenOwnerOf>, Error>(
    shouldFetch ? SWRCachePath.getStokenOwnerOf(chain, `${sTokenId}`) : null,
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
        getStokenOwnerOf(client, sTokenId)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { owner: data, error }
}

export const useGetSTokenPositions = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getStokenPositions>, Error>(
    SWRCachePath.getStokenPositions(chain, `${sTokenId}`),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
        getStokenPositions(client, sTokenId)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const amount = whenDefined(data, pos => toCurrency(toNaturalNumber(pos.amount)))
  return { positions: data, error, currency, amount }
}

export const useGetStokenRewards = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const shouldFetch = chain && sTokenId
  const { currency, toCurrency } = useCurrency()
  const { data, error } = useSWR<UnwrapFunc<typeof getStokenRewards>, Error>(
    shouldFetch ? SWRCachePath.getStokenRewards(chain, `${sTokenId}`) : null,
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
        getStokenRewards(client, sTokenId)
      ),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  const withdrawableReward = whenDefined(data, pos => toCurrency(toNaturalNumber(pos.withdrawableReward)))
  return { rewards: data, error, currency, withdrawableReward }
}

export const useAllowance = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (contractAddress: string, accountAddress?: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, client =>
        allowance(client, contractAddress, accountAddress)
          .then(d => new BigNumber(d || '0'))
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { allowance: callback, isLoading, error }
}

export const useApprove = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState(false)
  const [ok, setOK] = useState(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (address: string, amount: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, client =>
        approve(client, address, amount)
          .then(result => setOK((result && true) || false))
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { approve: callback, ok, isLoading, error }
}

export const useDepositToProperty = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (propertyAddress: string, amount: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, client =>
        depositToProperty(client, propertyAddress, amount)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { depositToProperty: callback, isLoading, error }
}

export const useDepositToPosition = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (sTokenId: string, amount: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, client =>
        depositToPosition(client, sTokenId, amount)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { depositToPosition: callback, isLoading, error }
}

export const useWithdrawByPosition = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (sTokenId: string, amount: string) => {
      setIsLoading(true)
      setError(undefined)
      return whenDefined(ethersProvider, client =>
        withdrawByPosition(client, sTokenId, amount)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { withdrawByPosition: callback, isLoading, error }
}

export const useMigrateToSTokens = () => {
  const { ethersProvider } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const callback = useCallback(
    async (propertyAddress: string) => {
      setIsLoading(true)
      setError(undefined)
      // return new Promise(resolve =>
      //   setTimeout(() => {
      //     store.set(1, true)
      //     resolve()
      //   }, 3000)
      // )
      return whenDefined(ethersProvider, client =>
        migrateToSTokens(client, propertyAddress)
          .catch(setError)
          .finally(() => {
            setIsLoading(false)
          })
      )
    },
    [ethersProvider]
  )
  return { migrateToSTokens: callback, isLoading, error }
}

export const useGetTokenURI = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const shouldFetch = chain && sTokenId
  const { data, error } = useSWR<UnwrapFunc<typeof getTokenURI>, Error>(
    shouldFetch ? SWRCachePath.getTokenURI(chain, `${sTokenId}`) : null,
    () => whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) => getTokenURI(client, sTokenId)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { tokenURI: data, error }
}

export const useGetStokenSymbol = (sTokenId?: number) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { data, error } = useSWR<UnwrapFunc<typeof getStokenSymbol>, Error>(
    SWRCachePath.getStokenSymbol(`${sTokenId}`),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) => getStokenSymbol(client, sTokenId)),
    { revalidateOnFocus: false, focusThrottleInterval: 0 }
  )
  return { symbol: data, error }
}

export const useGetEnabledMarkets = () => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(nonConnectedEthersProvider)
  return useSWR<UnwrapFunc<typeof getEnabledMarkets>, Error>(SWRCachePath.enabledMarkets(name), () =>
    whenDefined(nonConnectedEthersProvider, client => getEnabledMarkets(client))
  )
}

export const useGetAuthenticatedProperties = (marketAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(nonConnectedEthersProvider)
  return useSWR<UnwrapFunc<typeof getAuthenticatedProperties>, Error>(
    SWRCachePath.getAuthenticatedProperties(name, marketAddress),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, marketAddress], ([client, market]) =>
        getAuthenticatedProperties(client, market)
      )
  )
}

export const useGetAssetsByProperties = (propertyAddress?: string) => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(nonConnectedEthersProvider)
  return useSWR<
    UndefinedOr<
      {
        market?: string
        id?: string
      }[]
    >,
    Error
  >(SWRCachePath.useGetAssetsByProperties(name, propertyAddress), () =>
    whenDefinedAll([nonConnectedEthersProvider, propertyAddress], async ([client, property]) => {
      const metrics = await metricsOfProperty(client, property)
      const markets = await whenDefined(metrics, met => Promise.all(met.map(m => getMarket(client, m))))
      const behaviors = await whenDefined(markets, marks =>
        Promise.all(marks.map(mak => whenDefined(mak, m => getMarketBehavior(client, m))))
      )
      const ids = await whenDefinedAll([behaviors, metrics], ([behav, mets]) =>
        Promise.all(behav.map((beh, i) => whenDefinedAll([beh, mets[i]], ([b, m]) => getId(client, b, m))))
      )
      const res = whenDefinedAll([ids, markets], ([idx, marks]) => marks.map((market, i) => ({ market, id: idx[i] })))
      return res
    })
  )
}

export const useGetStokenHeldAt = (sTokenId?: number) => {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const { ethersProvider, nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(ethersProvider)
  const { data, error } = useSWR<UnwrapFunc<typeof getStokenHeldAt>, Error>(
    SWRCachePath.getStokenHeldAt(chain, sTokenId),
    () =>
      whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) => getStokenHeldAt(client, sTokenId)),
    { revalidateOnFocus: false }
  )
  const block = useMemo(async () => {
    data && data.length > 0 && setIsLoading(false)
    return data && data.length > 0 && (await data[0].getBlock())
  }, [data])
  return { since: data, block, loading: isLoading, error }
}

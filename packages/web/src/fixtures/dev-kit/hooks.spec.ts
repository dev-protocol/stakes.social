import { renderHook, act } from '@testing-library/react-hooks'
import {
  useGetTotalRewardsAmount,
  useGetTotalStakingAmount,
  useGetMyStakingAmount,
  useWithdrawHolderReward,
  useWithdrawStakingReward,
  useGetMyHolderAmount,
  useStake,
  useStakingShare,
  useWithdrawStaking,
  useCreateProperty,
  useMarketScheme,
  useAuthenticate,
  useAPY,
  useAnnualSupplyGrowthRatio,
  useGetPolicyAddressesList,
  usePropertyAuthor,
  useBalanceOf,
  useAllClaimedRewards,
  usePropertyName,
  useGetMyStakingRewardAmount,
  useBalanceOfProperty,
  usePropertySymbol,
  useBalanceOfAccountProperty,
  useDetectSTokens,
  useGetSTokenPositions,
  useGetStokenRewards,
  useApprove,
  useDepositToProperty,
  useDepositToPosition,
  useWithdrawByPosition,
  useMigrateToSTokens,
  useGetTokenURI,
  useGetStokenSymbol,
  usePositionsOfOwner,
  useGetEnabledMarkets,
  useGetAuthenticatedProperties
} from './hooks'
import { useCurrency } from 'src/fixtures/currency/functions/useCurrency'
import useSWR from 'swr'
import { toNaturalNumber, toBigNumber } from 'src/fixtures/utility'
import {
  withdrawHolderAmount,
  withdrawStakingAmount,
  stakeDev,
  createProperty,
  marketScheme,
  authenticate,
  createGetVotablePolicy,
  approve,
  depositToProperty,
  depositToPosition,
  withdrawByPosition,
  migrateToSTokens
} from './client'
import { message } from 'antd'
import BigNumber from 'bignumber.js'

jest.mock('swr')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/dev-kit/client.ts')
jest.mock('src/fixtures/uniswap/client.ts')
jest.mock('src/fixtures/currency/functions/useCurrency')

describe('dev-kit hooks', () => {
  describe('useGetTotalRewardsAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount?.toFixed()).toBe(toNaturalNumber(toNaturalNumber(data)).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and USD', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount?.toFixed()).toBe(
        toNaturalNumber(toNaturalNumber(data)).times(3).toFixed()
      )
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetTotalStakingAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and USD', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount?.toFixed()).toBe(toNaturalNumber(data).times(3).toFixed())
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetMyHolderAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyHolderAmount('property-address'))
      expect(result.current.myHolderAmount).toBe(data)
    })

    test('success fetching data', () => {
      const data = ['10000', '20000', '30000', '40000']
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyHolderAmount('property-address'))
      expect(result.current.myHolderAmount?.toFixed()).toBe(toNaturalNumber('10000').toFixed())
      expect(result.current.total?.toFixed()).toBe(toNaturalNumber('40000').toFixed())
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyHolderAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetMyStakingRewardAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingRewardAmount('property-address'))
      expect(result.current.myStakingRewardAmount).toBe(data)
      expect(result.current.dev).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingRewardAmount('property-address'))
      expect(result.current.myStakingRewardAmount).toBe(data)
      expect(result.current.dev).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingRewardAmount('property-address'))
      expect(result.current.myStakingRewardAmount?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.dev?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingRewardAmount('property-address'))
      expect(result.current.myStakingRewardAmount?.toFixed()).toBe(toNaturalNumber(data).times(3).toFixed())
      expect(result.current.dev?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingRewardAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetMylStakingAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount?.toFixed()).toBe(toNaturalNumber(data).times(3).toFixed())
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useWithdrawHolderReward', () => {
    test('success withdraw', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawHolderReward())
      ;(withdrawHolderAmount as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.withdrawHolder('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure withdraw', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawHolderReward())
      ;(withdrawHolderAmount as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.withdrawHolder('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useWithdrawStakingReward', () => {
    test('success withdraw', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawStakingReward())
      ;(withdrawStakingAmount as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.withdrawStakingReward('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure withdraw', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawStakingReward())
      ;(withdrawStakingAmount as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.withdrawStakingReward('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useWithdrawStaking', () => {
    test('success withdraw', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawStaking())
      ;(withdrawStakingAmount as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.withdrawStaking('property-address', toBigNumber(0))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure withdraw', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawStaking())
      ;(withdrawStakingAmount as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.withdrawStaking('property-address', toBigNumber(0))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useStake', () => {
    test('success withdraw', async () => {
      const data = '11111'
      const { result, waitForNextUpdate } = renderHook(() => useStake())
      ;(stakeDev as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.stake('property-address', data)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure withdraw', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useStake())
      ;(stakeDev as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.stake('property-address', '11111')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useStakingShare', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useStakingShare('property-address'))
      expect(result.current.stakingShare).toBe(data)
    })

    test('success fetching data', () => {
      const data1 = '10000'
      const data2 = '5000'
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data1, error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data2, error: undefined }))
      const { result } = renderHook(() => useStakingShare('property-address'))
      expect(result.current.stakingShare).toBe(Number(data1) / Number(data2))
    })

    test('failure fetching metrics data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useStakingShare('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })

    test('failure fetching market data', () => {
      const data1 = '10000'
      const data2 = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data1, error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data2, error }))
      const { result } = renderHook(() => useStakingShare('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe(`${useCreateProperty.name}`, () => {
    const name = 'name'
    const symbol = 'symbol'
    const author = 'author'
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useCreateProperty())
      ;(createProperty as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.createProperty(name, symbol, author)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useCreateProperty())
      ;(createProperty as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.createProperty(name, symbol, author)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe(`${useMarketScheme.name}`, () => {
    const market = 'market-address'
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useMarketScheme())
      ;(marketScheme as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.marketScheme(market)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useMarketScheme())
      ;(marketScheme as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.marketScheme(market)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe(`${useAuthenticate.name}`, () => {
    const market = 'market-address'
    const property = 'property-address'
    const args = ['arg1', 'arg2']
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useAuthenticate())
      ;(authenticate as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.authenticate(market, property, args)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useAuthenticate())
      ;(authenticate as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.authenticate(market, property, args)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useAPY', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAPY())
      expect(result.current.apy).toBe(data)
    })

    test('success fetching data', () => {
      const apyForStakers = new BigNumber(1000).times(2102400).div(500000).times(100)
      const apyForCreators = new BigNumber(9000).times(2102400).div(500000).times(100)
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: '10000', error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: '500000', error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: '9000', error: undefined }))
      const { result } = renderHook(() => useAPY())
      expect(result.current.apy?.toFixed()).toBe(apyForStakers.toFixed())
      expect(result.current.creators?.toFixed()).toBe(apyForCreators.toFixed())
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAPY())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useAnnualSupplyGrowthRatio', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAnnualSupplyGrowthRatio())
      expect(result.current.annualSupplyGrowthRatio).toBe(data)
    })

    test('success fetching data', () => {
      const data = new BigNumber(10000).times(2102400).div(12000000).times(100)
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: '10000', error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: '12000000', error: undefined }))
      const { result } = renderHook(() => useAnnualSupplyGrowthRatio())
      expect(result.current.annualSupplyGrowthRatio?.toFixed()).toBe(data.toFixed())
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAnnualSupplyGrowthRatio())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe(`${useGetPolicyAddressesList.name}`, () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useGetPolicyAddressesList())
      ;(createGetVotablePolicy as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.getPolicyAddressesList()
      })
      await waitForNextUpdate()
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useGetPolicyAddressesList())
      ;(createGetVotablePolicy as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.getPolicyAddressesList()
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('usePropertyAuthor', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyAuthor('property-address'))
      expect(result.current.author).toBe(data)
    })

    test('success fetching data', () => {
      const data = 'author'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyAuthor('property-address'))
      expect(result.current.author).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyAuthor('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useBalanceOf', () => {
    test('data is undefined and currency is DEV', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOf())
      expect(result.current.amount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and currncy is USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOf())
      expect(result.current.amount).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data and currency is DEV', () => {
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementation(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber('10000000000000000000') }))
      const { result } = renderHook(() => useBalanceOf())
      expect(result.current.amount?.toFixed()).toBe('10')
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and currency is USD', () => {
      const toCurrency = (x?: BigNumber) => toBigNumber(x).times(3)
      ;(useCurrency as jest.Mock).mockImplementation(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber('10000000000000000000') }))
      const { result } = renderHook(() => useBalanceOf())
      expect(result.current.amount?.toFixed()).toBe('30')
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOf())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useAllClaimedRewards', () => {
    test('data is undefined and currency is DEV', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useAllClaimedRewards())
      expect(result.current.amount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and currncy is USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useAllClaimedRewards())
      expect(result.current.amount).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data and currency is DEV', () => {
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementation(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber('10000000000000000000') }))
      const { result } = renderHook(() => useAllClaimedRewards())
      expect(result.current.amount?.toFixed()).toBe('10')
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and currency is USD', () => {
      const toCurrency = (x?: BigNumber) => toBigNumber(x).times(3)
      ;(useCurrency as jest.Mock).mockImplementation(() => ({ currency: 'USD', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber('10000000000000000000') }))
      const { result } = renderHook(() => useAllClaimedRewards())
      expect(result.current.amount?.toFixed()).toBe('30')
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAllClaimedRewards())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('usePropertyName', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyName('property-address'))
      expect(result.current.name).toBe(data)
    })

    test('success fetching data', () => {
      const data = 'name'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyName('property-address'))
      expect(result.current.name).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertyName('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('usePropertySymbol', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertySymbol('property-address'))
      expect(result.current.symbol).toBe(data)
    })

    test('success fetching data', () => {
      const data = 'symbol'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertySymbol('property-address'))
      expect(result.current.symbol).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePropertySymbol('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useBalanceOfProperty', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfProperty('property-address'))
      expect(result.current.balance).toBe(data)
    })

    test('success fetching data', () => {
      const data = toBigNumber(1000)
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfProperty('property-address'))
      expect(result.current.balance?.toFixed()).toBe(data.toFixed())
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfProperty('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useBalanceOfAccountProperty', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfAccountProperty('property-address', 'user'))
      expect(result.current.balance).toBe(data)
    })

    test('success fetching data', () => {
      const data = toBigNumber(1000)
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfAccountProperty('property-address', 'user'))
      expect(result.current.balance?.toFixed()).toBe(data.toFixed())
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useBalanceOfAccountProperty('property-address', 'user'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useDetectSTokens', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useDetectSTokens('property-address', 'user'))
      expect(result.current.sTokens).toBe(data)
    })

    test('success fetching data', () => {
      const data = [1, 2, 3]
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useDetectSTokens('property-address', 'user'))
      expect(result.current.sTokens).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useDetectSTokens('property-address', 'user'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('usePositionsOfOwner', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePositionsOfOwner('user'))
      expect(result.current.positions).toBe(data)
    })

    test('success fetching data', () => {
      const data = [1, 2, 3]
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePositionsOfOwner('user'))
      expect(result.current.positions).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => usePositionsOfOwner('user'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetSTokenPositions', () => {
    const DUMMY_STOKEN_ID = 0
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetSTokenPositions(DUMMY_STOKEN_ID))
      expect(result.current.positions).toBe(data)
      expect(result.current.amount).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data', () => {
      const data = { amount: '1000000' }
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetSTokenPositions(DUMMY_STOKEN_ID))
      expect(result.current.positions).toBe(data)
      expect(result.current.amount?.toFixed()).toBe('0.000000000001')
      expect(result.current.currency).toBe('DEV')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetSTokenPositions(DUMMY_STOKEN_ID))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetStokenRewards', () => {
    const DUMMY_STOKEN_ID = 0
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenRewards(DUMMY_STOKEN_ID))
      expect(result.current.rewards).toBe(data)
      expect(result.current.withdrawableReward).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data', () => {
      const data = { withdrawableReward: '1000000' }
      const error = undefined
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenRewards(DUMMY_STOKEN_ID))
      expect(result.current.rewards).toBe(data)
      expect(result.current.withdrawableReward?.toFixed()).toBe('0.000000000001')
      expect(result.current.currency).toBe('DEV')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenRewards(DUMMY_STOKEN_ID))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useApprove', () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useApprove())
      ;(approve as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.approve('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useApprove())
      ;(approve as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.approve('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useDepositToProperty', () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useDepositToProperty())
      ;(depositToProperty as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.depositToProperty('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useDepositToProperty())
      ;(depositToProperty as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.depositToProperty('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useDepositToPosition', () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useDepositToPosition())
      ;(depositToPosition as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.depositToPosition('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useDepositToPosition())
      ;(depositToPosition as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.depositToPosition('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useWithdrawByPosition', () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawByPosition())
      ;(withdrawByPosition as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.withdrawByPosition('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useWithdrawByPosition())
      ;(withdrawByPosition as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.withdrawByPosition('address', '10000')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useMigrateToSTokens', () => {
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useMigrateToSTokens())
      ;(migrateToSTokens as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.migrateToSTokens('sTokenId')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useMigrateToSTokens())
      ;(migrateToSTokens as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.migrateToSTokens('sTokenId')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useGetTokenURI', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined

      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTokenURI(0))
      expect(result.current.tokenURI).toBe(data)
    })

    test('success fetching data', () => {
      const data = 'https://test.com'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTokenURI(0))
      expect(result.current.tokenURI).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTokenURI(0))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetStokenSymbol', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined

      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenSymbol(0))
      expect(result.current.symbol).toBe(data)
    })

    test('success fetching data', () => {
      const data = 'https://test.com'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenSymbol(0))
      expect(result.current.symbol).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetStokenSymbol(0))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetEnabledMarkets', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEnabledMarkets())
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(undefined)
    })

    test('success fetching data', () => {
      const data = ['0x0']
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEnabledMarkets())
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(undefined)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEnabledMarkets())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetAuthenticatedProperties', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthenticatedProperties('0x0'))
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(undefined)
    })

    test('success fetching data', () => {
      const data = ['0x0']
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthenticatedProperties('0x0'))
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(undefined)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthenticatedProperties('0x0'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

import { renderHook, act } from '@testing-library/react-hooks'
import {
  useGetTotalRewardsAmount,
  useGetTotalStakingAmount,
  useGetMyStakingAmount,
  useWithdrawHolderReward,
  useWithdrawStakingReward,
  useGetMyHolderAmount,
  useStake,
  useCancelStaking,
  useAssetStrength,
  useAllocate,
  useWithdrawStaking,
  useCreateProperty,
  useMarketScheme
} from './hooks'
import useSWR from 'swr'
import { toNaturalNumber, toAmountNumber } from 'src/fixtures/utility'
import {
  withdrawHolderAmount,
  withdrawStakingAmount,
  stakeDev,
  cancelStaking,
  allocate,
  withdrawStakingRewardAmount,
  createProperty,
  marketScheme
} from './client'
import { message } from 'antd'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-kit/client.ts')

describe('dev-kit hooks', () => {
  describe('useGetTotalRewardsAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount).toBe(data)
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.totalRewardsAmount).toBe(Number(data))
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetTotalRewardsAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetTotalStakingAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount).toBe(data)
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetTotalStakingAmount('property-address'))
      expect(result.current.totalStakingAmount).toBe(Number(data))
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
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
      const data = '10000'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetMyHolderAmount('property-address'))
      expect(result.current.myHolderAmount).toBe(Number(data))
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetMyHolderAmount('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetMylStakingAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount).toBe(data)
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
      const { result } = renderHook(() => useGetMyStakingAmount('property-address'))
      expect(result.current.myStakingAmount).toBe(Number(data))
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(toNaturalNumber as jest.Mock).mockImplementation(() => Number(data))
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
      ;(withdrawStakingRewardAmount as jest.Mock).mockResolvedValue(true)
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
      ;(withdrawStakingRewardAmount as jest.Mock).mockRejectedValue(error)
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
        result.current.withdrawStaking('property-address')
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
        result.current.withdrawStaking('property-address')
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
      ;(toAmountNumber as jest.Mock).mockImplementation(() => ({
        toFormat: () => data
      }))
      act(() => {
        result.current.stake('property-address', data)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure withdraw', async () => {
      const data = '11111'
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useStake())
      ;(stakeDev as jest.Mock).mockRejectedValue(error)
      ;(toAmountNumber as jest.Mock).mockImplementation(() => ({
        toFormat: () => data
      }))
      act(() => {
        result.current.stake('property-address', '11111')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useCancelStaking', () => {
    test('success cancel', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useCancelStaking())
      ;(cancelStaking as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.cancel('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure cancel', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useCancelStaking())
      ;(cancelStaking as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.cancel('property-address')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useAssetStrength', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAssetStrength('metrics-address', 'market-address'))
      expect(result.current.assetStrength).toBe(data)
    })

    test('success fetching data', () => {
      const data1 = '10000'
      const data2 = '5000'
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data1, error: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: data2, error: undefined }))
      const { result } = renderHook(() => useAssetStrength('metrics-address', 'market-address'))
      expect(result.current.assetStrength).toBe(Number(data1) / Number(data2))
    })

    test('failure fetching metrics data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAssetStrength('metrics-address', 'market-address'))
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
      const { result } = renderHook(() => useAssetStrength('metrics-address', 'market-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useAllocate', () => {
    const metrics = 'metrics'
    test('success allocate', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useAllocate())
      ;(allocate as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.allocate(metrics)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure allocate', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useAllocate())
      ;(allocate as jest.Mock).mockRejectedValue(error)
      act(() => {
        result.current.allocate(metrics)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
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
    test('success', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useMarketScheme())
      ;(marketScheme as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.marketScheme()
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
        result.current.marketScheme()
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })
})

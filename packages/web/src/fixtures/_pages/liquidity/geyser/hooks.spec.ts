import { renderHook, act } from '@testing-library/react-hooks'
import { message } from 'antd'
import { useState } from 'react'
import { getUTC, toBigNumber, toEVMBigNumber } from 'src/fixtures/utility'
import useSWR, { mutate } from 'swr'
import { SWRCachePath } from './cache-path'
import { stake, unstake } from './client'
import {
  useAllSchedules,
  useAllTokensClaimed,
  useAPY,
  useEntirePeriod,
  useEstimateReward,
  useFinalUnlockSchedules,
  useIsAlreadyFinished,
  useMutateDepositDependence,
  useRewardMultiplier,
  useStake,
  useTotalRewards,
  useTotalStaked,
  useTotalStakedFor,
  useTotalStakingShares,
  useUnstake,
  useUnstakeQuery,
  useUpdateAccounting
} from './hooks'
import { GEYSER_V1_ETHDEV_V2_ADDRESS } from '../constants/address'

jest.mock('swr')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/geyser/client.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/client.ts')

const geyserAddress = GEYSER_V1_ETHDEV_V2_ADDRESS

describe('geyser hooks', () => {
  describe('useTotalRewards', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalRewards(geyserAddress))
      expect(result.current.data?.toString()).toBe(undefined)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('30000'), error }))
      const { result } = renderHook(() => useTotalRewards(geyserAddress))
      expect(result.current.data?.toString()).toBe('30000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalRewards(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useStake', () => {
    test('success stake', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useStake(geyserAddress))
      ;(stake as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.stake(toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure stake', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useStake(geyserAddress))
      ;(stake as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.stake(toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useUnstake', () => {
    test('success unstake', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useUnstake(geyserAddress))
      ;(unstake as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.unstake(toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure unstake', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useUnstake(geyserAddress))
      ;(unstake as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.unstake(toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useAllTokensClaimed', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useAllTokensClaimed(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useAllTokensClaimed(geyserAddress))
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAllTokensClaimed(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useTotalStakingShares', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStakingShares(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useTotalStakingShares(geyserAddress))
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStakingShares(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useTotalStaked', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStaked(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useTotalStaked(geyserAddress))
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStaked(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useUpdateAccounting', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useUpdateAccounting(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: {
          totalLocked: '100000',
          totalUnlocked: '100000',
          totalsStakingShareSeconds: '100000',
          totalStakingShareSeconds: '100000',
          totalUserRewards: '100000',
          now: '100000'
        },
        error
      }))
      const { result } = renderHook(() => useUpdateAccounting(geyserAddress))
      expect(result.current.data).toEqual({
        totalLocked: '100000',
        totalUnlocked: '100000',
        totalsStakingShareSeconds: '100000',
        totalStakingShareSeconds: '100000',
        totalUserRewards: '100000',
        now: '100000'
      })
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useUpdateAccounting(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useAllSchedules', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useAllSchedules(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: [
          {
            initialLockedShares: '100000',
            unlockedShares: '100000',
            lastUnlockTimestampSec: '100000',
            endAtSec: '100000',
            durationSec: '100000'
          }
        ],
        error
      }))
      const { result } = renderHook(() => useAllSchedules(geyserAddress))
      expect(result.current.data).toEqual([
        {
          initialLockedShares: '100000',
          unlockedShares: '100000',
          lastUnlockTimestampSec: '100000',
          endAtSec: '100000',
          durationSec: '100000'
        }
      ])
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAllSchedules(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useFinalUnlockSchedules', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useFinalUnlockSchedules(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: [
          {
            initialLockedShares: '100000',
            unlockedShares: '100000',
            lastUnlockTimestampSec: '100000',
            endAtSec: '100000',
            durationSec: '100000'
          },
          {
            initialLockedShares: '200000',
            unlockedShares: '200000',
            lastUnlockTimestampSec: '200000',
            endAtSec: '100001',
            durationSec: '100000'
          }
        ],
        error
      }))
      const { result } = renderHook(() => useFinalUnlockSchedules(geyserAddress))
      expect(result.current.data).toEqual({
        initialLockedShares: '200000',
        unlockedShares: '200000',
        lastUnlockTimestampSec: '200000',
        endAtSec: '100001',
        durationSec: '100000'
      })
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useFinalUnlockSchedules(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('entirePeriod', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useEntirePeriod(geyserAddress))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: [
          {
            initialLockedShares: '100000',
            unlockedShares: '100000',
            lastUnlockTimestampSec: '100000',
            endAtSec: '100000',
            durationSec: '50000'
          },
          {
            initialLockedShares: '200000',
            unlockedShares: '200000',
            lastUnlockTimestampSec: '200000',
            endAtSec: '110001',
            durationSec: '110000'
          },
          {
            initialLockedShares: '300000',
            unlockedShares: '300000',
            lastUnlockTimestampSec: '300000',
            endAtSec: '120001',
            durationSec: '120000'
          }
        ],
        error
      }))
      const { result } = renderHook(() => useEntirePeriod(geyserAddress))
      expect(result.current.data).toEqual(70001)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useEntirePeriod(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useEstimateReward', () => {
    test('amount is 0', () => {
      const { result } = renderHook(() => useEstimateReward())
      expect(
        result
          .current({
            amount: toBigNumber(0),
            totalStakingShares: toEVMBigNumber(0),
            totalStaked: toEVMBigNumber(0),
            timestamp: 1603441393,
            accounting: {
              totalLocked: '100000',
              totalUnlocked: '100000',
              totalsStakingShareSeconds: '100000',
              totalStakingShareSeconds: '100000',
              totalUserRewards: '100000',
              now: '100000'
            },
            finalUnlockSchedule: {
              initialLockedShares: '100000',
              unlockedShares: '100000',
              lastUnlockTimestampSec: '100000',
              endAtSec: '100000',
              durationSec: '100000'
            }
          })
          .toFixed()
      ).toBe('0')
    })

    test('timestamp is equal to endAtSec', () => {
      const { result } = renderHook(() => useEstimateReward())
      expect(
        result
          .current({
            amount: toBigNumber(1),
            totalStakingShares: toEVMBigNumber(100),
            totalStaked: toEVMBigNumber(100),
            timestamp: 1603441393,
            accounting: {
              totalLocked: '100000',
              totalUnlocked: '100000',
              totalsStakingShareSeconds: '100000',
              totalStakingShareSeconds: '100000',
              totalUserRewards: '100000',
              now: '100000'
            },
            finalUnlockSchedule: {
              initialLockedShares: '100000',
              unlockedShares: '100000',
              lastUnlockTimestampSec: '100000',
              endAtSec: '1603441393',
              durationSec: '100000'
            }
          })
          .toFixed()
      ).toBe('0')
    })

    test('timestamp is greater than endAtSec', () => {
      const { result } = renderHook(() => useEstimateReward())
      expect(
        result
          .current({
            amount: toBigNumber(1),
            totalStakingShares: toEVMBigNumber(100),
            totalStaked: toEVMBigNumber(100),
            timestamp: 1603441394,
            accounting: {
              totalLocked: '100000',
              totalUnlocked: '100000',
              totalsStakingShareSeconds: '100000',
              totalStakingShareSeconds: '100000',
              totalUserRewards: '100000',
              now: '100000'
            },
            finalUnlockSchedule: {
              initialLockedShares: '100000',
              unlockedShares: '100000',
              lastUnlockTimestampSec: '100000',
              endAtSec: '1603441393',
              durationSec: '100000'
            }
          })
          .toFixed()
      ).toBe('0')
    })

    test('amount is not 0', () => {
      const { result } = renderHook(() => useEstimateReward())
      expect(
        result
          .current({
            amount: toBigNumber(1),
            totalStakingShares: toEVMBigNumber(100),
            totalStaked: toEVMBigNumber(100),
            timestamp: 1603441393,
            accounting: {
              totalLocked: '100000',
              totalUnlocked: '100000',
              totalsStakingShareSeconds: '100000',
              totalStakingShareSeconds: '100000',
              totalUserRewards: '100000',
              now: '100000'
            },
            finalUnlockSchedule: {
              initialLockedShares: '100000',
              unlockedShares: '100000',
              lastUnlockTimestampSec: '100000',
              endAtSec: '1605441393',
              durationSec: '100000'
            }
          })
          .toFixed()
      ).toBe('989.72095367556091824111')
    })
  })

  describe('useIsAlreadyFinished', () => {
    test('success fetching data', async () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({
        data: [
          {
            initialLockedShares: '100000',
            unlockedShares: '100000',
            lastUnlockTimestampSec: '100000',
            endAtSec: getUTC() + 0,
            durationSec: '100000'
          },
          {
            initialLockedShares: '200000',
            unlockedShares: '200000',
            lastUnlockTimestampSec: '200000',
            endAtSec: getUTC() + 1,
            durationSec: '100000'
          }
        ],
        error
      }))
      const { result, waitForNextUpdate } = renderHook(() =>
        useIsAlreadyFinished(useState<boolean>(false), geyserAddress)
      )
      expect(result.current[0]).toBe(false)
      await waitForNextUpdate({ timeout: 1500 })
      expect(result.current[0]).toBe(true)
    })
  })

  describe('useRewardMultiplier', () => {
    test('data is undefined', () => {
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data: undefined }))
      const { result } = renderHook(() => useRewardMultiplier(geyserAddress))
      expect(result.current.data).toBe(undefined)
    })

    test('success fetching data', () => {
      const utc = getUTC()
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: 12345 }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: utc - 10000 }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber(20000) }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber(20) }))
      const { result } = renderHook(() => useRewardMultiplier(geyserAddress))
      expect(result.current.max).toBe(5)
      expect(result.current.data).toBe(3)
    })

    test('success fetching data (max)', () => {
      const utc = getUTC()
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: 12345 }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: utc - 10000 }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber(8000) }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber(20) }))
      const { result } = renderHook(() => useRewardMultiplier(geyserAddress))
      expect(result.current.max).toBe(5)
      expect(result.current.data).toBe(5)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useRewardMultiplier(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useTotalStakedFor', () => {
    test('data is undefined', () => {
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data: undefined }))
      const { result } = renderHook(() => useTotalStakedFor(geyserAddress))
      expect(result.current.data).toBe(undefined)
    })

    test('success fetching data', () => {
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toBigNumber(12345) }))
      const { result } = renderHook(() => useTotalStakedFor(geyserAddress))
      expect(result.current.data?.toString()).toBe('12345')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStakedFor(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useMutateDepositDependence', () => {
    test('mutate data', () => {
      const { result } = renderHook(() => useMutateDepositDependence(geyserAddress))
      act(() => {
        result.current.purge()
      })
      expect((mutate as jest.Mock).mock.calls.length).toBe(2)
      expect((mutate as jest.Mock).mock.calls[0][0]).toBe(SWRCachePath.getStaked(geyserAddress, '0x'))
      expect((mutate as jest.Mock).mock.calls[1][0]).toBe(SWRCachePath.totalStakedFor(geyserAddress, '0x'))
    })
  })

  describe('useAPY', () => {
    test('data is undefined', () => {
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: undefined }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: undefined }))
      const { result } = renderHook(() => useAPY(geyserAddress))
      expect(result.current.data.toString()).toBe('0')
    })

    test('success fetching data', () => {
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('30000') }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000') }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: {
          data: {
            pair: {
              reserveUSD: '10000',
              totalSupply: '10000',
              reserve0: '10000'
            }
          }
        }
      }))
      const { result } = renderHook(() => useAPY(geyserAddress))
      expect(result.current.data.toString()).toBe('300')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAPY(geyserAddress))
      expect(result.current.data.toString()).toBe('0')
    })
  })

  describe('useUnstakeQuery', () => {
    test('data is undefined', () => {
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data: undefined }))
      const { result } = renderHook(() => useUnstakeQuery(geyserAddress))
      expect(result.current.data).toBe(undefined)
    })

    test('success fetching data', () => {
      const value = '12345'
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data: toBigNumber(value) }))
      const { result } = renderHook(() => useUnstakeQuery(geyserAddress, toBigNumber(value)))
      expect(result.current.data?.toString()).toBe(value)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useUnstakeQuery(geyserAddress))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

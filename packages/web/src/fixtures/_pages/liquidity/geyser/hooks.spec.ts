import { renderHook, act } from '@testing-library/react-hooks'
import { message } from 'antd'
import { useState } from 'react'
import { getUTC, toBigNumber, toEVMBigNumber } from 'src/fixtures/utility'
import useSWR from 'swr'
import { finalUnlockSchedules, stake, unstake } from './client'
import {
  useAllTokensClaimed,
  useEstimateReward,
  useFinalUnlockSchedules,
  useIsAlreadyFinished,
  useStake,
  useTotalRewards,
  useTotalStaked,
  useTotalStakingShares,
  useUnstake,
  useUpdateAccounting
} from './hooks'

jest.mock('swr')
jest.mock('src/fixtures/_pages/liquidity/geyser/client.ts')

describe('geyser hooks', () => {
  describe('useTotalRewards', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalRewards())
      expect(result.current.data.toString()).toBe('0')
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: {
          totalLocked: '10000',
          totalUnlocked: '20000',
          totalsStakingShareSeconds: '10000',
          totalStakingShareSeconds: '10000',
          totalUserRewards: '10000',
          now: '10000'
        },
        error
      }))
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('30000'), error }))
      const { result } = renderHook(() => useTotalRewards())
      expect(result.current.data.toString()).toBe('60000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalRewards())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useStake', () => {
    test('success stake', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useStake())
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
      const { result, waitForNextUpdate } = renderHook(() => useStake())
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
      const { result, waitForNextUpdate } = renderHook(() => useUnstake())
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
      const { result, waitForNextUpdate } = renderHook(() => useUnstake())
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
      const { result } = renderHook(() => useAllTokensClaimed())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useAllTokensClaimed())
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useAllTokensClaimed())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useTotalStakingShares', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStakingShares())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useTotalStakingShares())
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStakingShares())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useTotalStaked', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStaked())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: toEVMBigNumber('10000'), error }))
      const { result } = renderHook(() => useTotalStaked())
      expect(result.current.data!.toString()).toBe('10000')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTotalStaked())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useUpdateAccounting', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useUpdateAccounting())
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
      const { result } = renderHook(() => useUpdateAccounting())
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
      const { result } = renderHook(() => useUpdateAccounting())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useFinalUnlockSchedules', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useFinalUnlockSchedules())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({
        data: {
          initialLockedShares: '100000',
          unlockedShares: '100000',
          lastUnlockTimestampSec: '100000',
          endAtSec: '100000',
          durationSec: '100000'
        },
        error
      }))
      const { result } = renderHook(() => useFinalUnlockSchedules())
      expect(result.current.data).toEqual({
        initialLockedShares: '100000',
        unlockedShares: '100000',
        lastUnlockTimestampSec: '100000',
        endAtSec: '100000',
        durationSec: '100000'
      })
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useFinalUnlockSchedules())
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
      ;(finalUnlockSchedules as jest.Mock).mockImplementation(() =>
        Promise.resolve({
          endAtSec: getUTC() + 1
        })
      )
      const { result, waitForNextUpdate } = renderHook(() => useIsAlreadyFinished(useState<boolean>(false)))
      expect(result.current[0]).toBe(false)
      await waitForNextUpdate()
      expect(result.current[0]).toBe(true)
    })
  })
})

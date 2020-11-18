import { renderHook, act } from '@testing-library/react-hooks'
import { message } from 'antd'
import { toBigNumber } from 'src/fixtures/utility'
import useSWR from 'swr'
import { approve } from './client'
import { useApprove, useTheGraph } from './hooks'

jest.mock('swr')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/_pages/liquidity/uniswap-pool/client.ts')

describe('uniswap-pool hooks', () => {
  describe('useApprove', () => {
    test('success approve', async () => {
      const { result, waitForNextUpdate } = renderHook(() => useApprove())
      ;(approve as jest.Mock).mockResolvedValue(true)
      act(() => {
        result.current.approve('user', toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })

    test('failure approve', async () => {
      const error = new Error('error')
      const { result, waitForNextUpdate } = renderHook(() => useApprove())
      ;(approve as jest.Mock).mockRejectedValue(error)
      message.error = jest.fn(() => {}) as any
      act(() => {
        result.current.approve('user', toBigNumber(1))
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isLoading).toBe(false)
    })
  })

  describe('useTheGraph', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data, error }))
      const { result } = renderHook(() => useTheGraph())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementationOnce(() => ({ data: { a: 'a' }, error }))
      const { result } = renderHook(() => useTheGraph())
      expect(result.current.data).toEqual({ a: 'a' })
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useTheGraph())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

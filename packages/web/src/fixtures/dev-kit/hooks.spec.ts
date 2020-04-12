import { renderHook } from '@testing-library/react-hooks'
import { useGetTotalRewardsAmount } from './hooks'
import useSWR from 'swr'
import { toNaturalNumber } from 'src/fixtures/utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')

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
})

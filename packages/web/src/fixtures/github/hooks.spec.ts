import { renderHook } from '@testing-library/react-hooks'
import { useGetMarketInformation, useGetMarkets } from './hooks'
import useSWR from 'swr'

jest.mock('swr')
jest.mock('src/fixtures/utility')

describe('dev-kit hooks', () => {
  describe('useGetTotalRewardsAmount', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarketInformation('market-address'))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const data = {
        name: 'npm',
        description: 'Marketize the number of downloads of public npm packages.',
        asset: {
          authentication: 'Your npm package',
          calculation: 'Number of downloads',
          usingKhaos: false
        }
      }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarketInformation('market-address'))
      expect(result.current.data).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarketInformation('market-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
  describe('useGetMarkets', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarkets())
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const data = ['0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318']
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarkets())
      expect(result.current.data).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetMarkets())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

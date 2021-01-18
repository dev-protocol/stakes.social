import { renderHook } from '@testing-library/react-hooks'
import { useGetMarketInformation, useGetMarkets, useGetPolicyInformation } from './hooks'
import useSWR from 'swr'

jest.mock('swr')
jest.mock('src/fixtures/utility')

describe('github hooks', () => {
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

  describe('useGetPolicyInformation', () => {
    test('success fetching data', () => {
      const policyAddress = '0x11223344'
      const data = {
        name: 'DIP7',
        description: 'Decrease Inflation Rate',
        reference: 'https://github.com/dev-protocol/DIPs/issues/7'
      }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPolicyInformation(policyAddress))
      expect(result.current.data).toBe(data)
    })
  })
})

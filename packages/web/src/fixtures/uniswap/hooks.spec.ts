import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { renderHook } from '@testing-library/react-hooks'
import { useGetEthPrice, useGetDevEthPrice, useGetDevPrice } from './hooks'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/uniswap/client.ts')

describe('uniswap hooks', () => {
  describe('useGetEthPrice', () => {
    test('success get eth price', async () => {
      const data = { ethPrice: '100.123456789' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEthPrice())
      expect(result.current.data).toEqual(new BigNumber('100.123456789'))
    })
  })

  describe('useGetDevEthPrice', () => {
    test('success get dev eth price', async () => {
      const data = { derivedETH: '0.92345678' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetDevEthPrice())
      expect(result.current.data).toEqual(new BigNumber('0.92345678'))
    })
  })

  describe('useGetDevPrice', () => {
    test('success get dev eth price', async () => {
      const ethPriceData = { ethPrice: '100.123456789' }
      const devEthPriceData = { derivedETH: '0.92345678' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation((key: string) => {
        if (key === 'getBundle') {
          return { data: ethPriceData, error }
        } else {
          return { data: devEthPriceData, error }
        }
      })
      const { result } = renderHook(() => useGetDevPrice())
      expect(result.current.data).toEqual(new BigNumber('92.45968500883907'))
    })
  })
})

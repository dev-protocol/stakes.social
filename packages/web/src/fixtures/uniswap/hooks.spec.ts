import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { renderHook } from '@testing-library/react-hooks'
import { useGetEthPrice, useGetDevEthPrice, useGetDevPrice, useGetTokenDayDatas } from './hooks'

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

  describe('useGetTokenDayDatas', () => {
    test('success get dev day datas', async () => {
      const tokenDayDatas = [
        {
          dailyVolumeETH: '25985.340154189155936447',
          dailyVolumeToken: '25985.340154189155936447',
          dailyVolumeUSD: '130489.7727429444941340424682012101',
          date: 1605571200,
          id: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26-18583',
          priceUSD: '4.533149774488700026397360890550335',
          totalLiquidityETH: '479.076145060802771092',
          totalLiquidityToken: '49378.830918006417028222',
          totalLiquidityUSD: '223841.6362404764378551348670196004'
        },
        {
          dailyVolumeETH: '19388.24473941580375707',
          dailyVolumeToken: '19388.24473941580375707',
          dailyVolumeUSD: '91577.78151008869112578269724749263',
          date: 1605484800,
          id: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26-18582',
          priceUSD: '5.162812713391924046017092339692472',
          totalLiquidityETH: '510.12932196783987311',
          totalLiquidityToken: '45648.888813239423126874',
          totalLiquidityUSD: '235676.6635172068736320804785419322'
        }
      ]
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => {
        return { data: tokenDayDatas, error }
      })
      const { result } = renderHook(() => useGetTokenDayDatas())
      expect(result.current.data?.length).toEqual(2)
      expect(result.current.data).toEqual(tokenDayDatas)
    })
  })
})

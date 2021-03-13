import BigNumber from 'bignumber.js'
import { useCallback, useContext } from 'react'
import SettingContext from 'src/context/settingContext'
import { useGetDevPrice } from '../../uniswap/hooks'
import { toBigNumber } from '../../utility'

export const useCurrency = (): {
  currency: 'DEV' | 'USD'
  toCurrency: (amount?: BigNumber | string | number) => BigNumber
  devToUSD: (amount?: BigNumber | string | number) => BigNumber
} => {
  const { data: devPrice } = useGetDevPrice()
  const { isCurrencyDEV } = useContext(SettingContext)
  const currency = isCurrencyDEV ? 'DEV' : 'USD'
  const devToUSD = useCallback(
    (amount?: BigNumber | string | number) => {
      return toBigNumber(amount).times(devPrice)
    },
    [devPrice]
  )
  const toCurrency = useCallback(
    (amount?: BigNumber | string | number) => {
      return currency === 'DEV' ? toBigNumber(amount) : toBigNumber(amount).times(devPrice)
    },
    [currency, devPrice]
  )

  return { currency, toCurrency, devToUSD }
}

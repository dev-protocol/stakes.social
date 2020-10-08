import React, { useContext } from 'react'
import BigNumber from 'bignumber.js'
import { useGetDevPrice } from 'src/fixtures/uniswap/hooks'
import SettingContext from 'src/context/settingContext'

interface Props {
  value?: BigNumber
}

export const Currency = ({ value }: Props) => {
  const { data: devPrice } = useGetDevPrice()
  const { isCurrencyDEV } = useContext(SettingContext)
  const currencyUnit = isCurrencyDEV ? 'DEV' : 'USD'
  const currencyValue = isCurrencyDEV ? value : value?.multipliedBy(devPrice)

  return (
    <span>
      {currencyValue ? currencyValue.dp(1).toFormat() : '0'} {currencyUnit}
    </span>
  )
}

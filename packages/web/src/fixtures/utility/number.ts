import BigNumber from 'bignumber.js'

const toNaturalBasis = new BigNumber(10).pow(18)

const toAmountBasis = new BigNumber(10).pow(-18)

export const toNaturalNumber = (num: number | string | BigNumber): BigNumber => new BigNumber(num).div(toNaturalBasis)

export const toAmountNumber = (amount: number | string | BigNumber): BigNumber =>
  new BigNumber(amount).div(toAmountBasis)

export const toBigNumber = (value: number | string | BigNumber): BigNumber => new BigNumber(value)

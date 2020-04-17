import BigNumber from 'bignumber.js'

const toNaturalBasis = new BigNumber(10).pow(18)

const toAmountBasis = new BigNumber(10).pow(-18)

export const toNaturalNumber = (num: string | BigNumber): BigNumber => new BigNumber(num).div(toNaturalBasis)

export const toAmountNumber = (amount: string | BigNumber): BigNumber => new BigNumber(amount).div(toAmountBasis)

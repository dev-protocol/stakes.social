import BigNumber from 'bignumber.js'

const basis = new BigNumber(10).pow(18)

export const toNaturalNumber = (num: string | BigNumber): BigNumber => new BigNumber(num).div(basis)

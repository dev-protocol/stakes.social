import BigNumber from 'bignumber.js'

const falsyOrZero = <T>(num?: T): T | 0 => (num ? num : 0)

const toNaturalBasis = new BigNumber(10).pow(18)

const toAmountBasis = new BigNumber(10).pow(-18)

const EvmBN = BigNumber.clone({ DECIMAL_PLACES: 0, ROUNDING_MODE: 1 })

export const toNaturalNumber = (num?: number | string | BigNumber): BigNumber =>
  new BigNumber(falsyOrZero(num)).div(toNaturalBasis)

export const toAmountNumber = (amount?: number | string | BigNumber): BigNumber =>
  new BigNumber(falsyOrZero(amount)).div(toAmountBasis)

export const toBigNumber = (value?: number | string | BigNumber): BigNumber => new BigNumber(falsyOrZero(value))

export const toEVMBigNumber = (value?: number | string | BigNumber): BigNumber => new EvmBN(falsyOrZero(value))

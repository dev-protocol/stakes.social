import BigNumber from 'bignumber.js'
import { BigNumber as ethersBigNumber } from 'ethers'

const falsyOrZero = <T>(num: T): T | 0 => (num ? num : 0)

const toNaturalBasis = new BigNumber(10).pow(18)

const toAmountBasis = new BigNumber(10).pow(-18)

export type EvmBigNumber = ethersBigNumber

export const toNaturalNumber = (num: number | string | BigNumber | EvmBigNumber): BigNumber =>
  new BigNumber(num instanceof ethersBigNumber ? num.toString() : falsyOrZero(num)).div(toNaturalBasis)

export const toAmountNumber = (amount: number | string | BigNumber | EvmBigNumber): BigNumber =>
  new BigNumber(amount instanceof ethersBigNumber ? amount.toString() : falsyOrZero(amount)).div(toAmountBasis)

export const toBigNumber = (value: number | string | BigNumber): BigNumber => new BigNumber(falsyOrZero(value))

export const toEVMBigNumber = (value: number | string | BigNumber): EvmBigNumber => {
  try {
    return ethersBigNumber.from(falsyOrZero(value))
  } catch (error) {
    return ethersBigNumber.from(0)
  }
}

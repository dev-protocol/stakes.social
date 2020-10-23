import { toEVMBigNumber } from './number'

export const getUTC = () => toEVMBigNumber(new Date().getTime()).div(1000).toNumber()

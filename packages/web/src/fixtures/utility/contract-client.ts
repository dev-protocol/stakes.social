import { AbiItem } from 'web3-utils'
import Web3 from 'web3'

export const createContract = (abi: AbiItem[], contractAddress: string, libWeb3: Web3) =>
  new libWeb3.eth.Contract(abi, contractAddress)

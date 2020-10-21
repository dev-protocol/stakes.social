import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toBigNumber } from 'src/fixtures/utility'
import { GEYSER_ETHDEV_V2_ADDRESS } from '../constants/address'
import { execute } from '@devprtcl/dev-kit-js/cjs/utils/execute'
import BigNumber from 'bignumber.js'

const client: Map<string, Contract> = new Map()

export const getClient = (contractAddress = GEYSER_ETHDEV_V2_ADDRESS): [Contract, Web3] => {
  const { ethereum } = window
  if (!ethereum) {
    throw new Error('Ethereum provider is not found')
  }
  const web3 = new Web3(ethereum)

  const stored = client.get(contractAddress)
  if (stored) {
    return [stored, web3]
  }

  const contract = (createContract(abi, contractAddress, web3) as unknown) as Contract
  client.set(contractAddress, contract)

  return [contract, web3]
}

export const totalStaked = async () => {
  const address = await getAccountAddress()
  if (address === undefined) {
    return toBigNumber(0)
  }
  return (([contract]) =>
    execute({
      contract,
      method: 'totalStaked',
      args: [address]
    }))(getClient()).then(toBigNumber)
}

export const estimateReward = (amount: string): number => {
  return toBigNumber(amount).toNumber()
}

export const stake = async (amount: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        execute({
          contract,
          client,
          mutation: true,
          method: 'stake',
          args: [amount.toFixed(), '']
        }))(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

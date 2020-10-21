import { abi } from './abi'
import Web3 from 'web3'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toBigNumber } from 'src/fixtures/utility'
import BigNumber from 'bignumber.js'

const client: Map<string, ReturnType<typeof createContract>> = new Map()

export const getClient = (contractAddress = '0xD36132E0c1141B26E62733e018f12Eb38A7b7678') => {
  const stored = client.get(contractAddress)
  if (stored) {
    return stored
  }

  const { ethereum } = window
  if (!ethereum) {
    throw new Error('Ethereum provider is not found')
  }
  const web3 = new Web3(ethereum)
  const contract = createContract(abi, contractAddress, web3)
  client.set(contractAddress, contract)

  return contract
}

export const totalStaked = async () => {
  const address = await getAccountAddress()
  return getClient().methods.totalStaked(address).call().then(toBigNumber)
}

export const estimateReward = (amount: string): number => {
  return toBigNumber(amount).toNumber()
}

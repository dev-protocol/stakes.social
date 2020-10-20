import { abi } from './abi'
import Web3 from 'web3'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toBigNumber } from 'src/fixtures/utility'
import BigNumber from 'bignumber.js'

const client: Map<string, ReturnType<typeof createContract>> = new Map()

export const getClient = (contractAddress = '0x4168cef0fca0774176632d86ba26553e3b9cf59d') => {
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

export const balanceOf = async (): Promise<BigNumber> => {
  const address = await getAccountAddress()
  return getClient().methods.balanceOf(address).call().then(toBigNumber)
}

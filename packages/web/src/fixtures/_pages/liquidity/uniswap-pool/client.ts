import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toEVMBigNumber } from 'src/fixtures/utility'
import BigNumber from 'bignumber.js'
import { utils } from '@devprotocol/alias-legacy-dev-kit'
import { ETHDEV_V2_ADDRESS } from '../constants/address'

const { execute } = utils
const client: Map<string, Contract> = new Map()

export const getContract = (web3: Web3, contractAddress = ETHDEV_V2_ADDRESS): Contract => {
  const stored = client.get(contractAddress)
  if (stored) {
    return stored
  }

  const contract = createContract(abi, contractAddress, web3) as unknown as Contract
  client.set(contractAddress, contract)

  return contract
}

export const balanceOf = async (web3: Web3): Promise<BigNumber | undefined> => {
  const address = await getAccountAddress(web3)
  if (address === undefined) {
    return undefined
  }
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'balanceOf',
          args: [address]
        })
      : Promise.resolve(''))(getContract(web3)).then(toEVMBigNumber)
}

export const allowance = async (web3: Web3, spender: string): Promise<BigNumber | undefined> => {
  const address = await getAccountAddress(web3)
  if (address === undefined) {
    return undefined
  }
  return (contract =>
    contract
      ? execute({
          contract,
          method: 'allowance',
          args: [address, spender]
        })
      : Promise.resolve(''))(getContract(web3)).then(toEVMBigNumber)
}

export const approve = async (web3: Web3, spender: string, value: BigNumber) => {
  return (contract =>
    contract && client
      ? execute({
          contract,
          client: web3,
          mutation: true,
          method: 'approve',
          args: [spender, value.toFixed()]
        })
      : Promise.resolve())(getContract(web3))
}

export const fromTheGraph = async (): Promise<{
  data: {
    pair: {
      reserveUSD: string
      totalSupply: string
      reserve0: string
    } | null
  }
}> => {
  return fetch('https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2', {
    method: 'post',
    headers: {
      'content-type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify({
      query: `{
        pair(id:"${ETHDEV_V2_ADDRESS}") {
          reserveUSD
          totalSupply
          reserve0
        }
      }`,
      variables: null
    })
  }).then(res => res.json())
}

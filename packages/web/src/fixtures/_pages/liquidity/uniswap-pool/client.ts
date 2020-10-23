import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { toEVMBigNumber } from 'src/fixtures/utility'
import BigNumber from 'bignumber.js'
import { utils } from '@devprtcl/dev-kit-js'
import { ETHDEV_V2_ADDRESS } from '../constants/address'

const { execute } = utils
const client: Map<string, Contract> = new Map()

export const getClient = (contractAddress = ETHDEV_V2_ADDRESS): [Contract, Web3] => {
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

export const balanceOf = async (): Promise<BigNumber | undefined> => {
  const address = await getAccountAddress()
  if (address === undefined) {
    return undefined
  }
  return (([contract]) =>
    execute({
      contract,
      method: 'balanceOf',
      args: [address]
    }))(getClient()).then(toEVMBigNumber)
}

export const allowance = async (spender: string): Promise<BigNumber | undefined> => {
  const address = await getAccountAddress()
  if (address === undefined) {
    return undefined
  }
  return (([contract]) =>
    execute({
      contract,
      method: 'allowance',
      args: [address, spender]
    }))(getClient()).then(toEVMBigNumber)
}

export const approve = async (spender: string, value: BigNumber) => {
  return process.env.NODE_ENV === 'production'
    ? (([contract, client]) =>
        execute({
          contract,
          client,
          mutation: true,
          method: 'approve',
          args: [spender, value.toFixed()]
        }))(getClient())
    : new Promise(resolve => setTimeout(resolve, 3000))
}

export const fromTheGraph = async (): Promise<{
  data: {
    pair: {
      reserveUSD: string
      totalSupply: string
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
        }
      }`,
      variables: null
    })
  }).then(res => res.json())
}

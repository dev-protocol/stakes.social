import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { utils } from '@devprotocol/alias-legacy-dev-kit'

const { execute, watchEvent } = utils
const client: Map<string, WeakMap<Web3, Contract>> = new Map()
const INCUBATOR_CONTRACT_ADDRESS = '0x7f1b8c30832ca3ABC6326A58903A3a47ade00019'

export const getContract = (web3: Web3, contractAddress = INCUBATOR_CONTRACT_ADDRESS): Contract => {
  const cache = client.get(contractAddress)
  const fromCache = cache?.get(web3)
  if (fromCache) {
    return fromCache
  }

  const contract = createContract(abi, contractAddress, web3) as unknown as Contract
  client.set(contractAddress, cache ? cache.set(web3, contract) : new WeakMap([[web3, contract]]))

  return contract
}

export const waitForFinishEvent = async (client: Web3, propertyAddress: string): Promise<string> => {
  const fromBlock = await client.eth.getBlockNumber()
  const contract = getContract(client)
  return new Promise((resolve, reject) => {
    watchEvent({
      fromBlock,
      contract,
      resolver: async e =>
        (dispatchedPropertyAddress => dispatchedPropertyAddress === propertyAddress)(
          e.event === 'Finish' ? (e.returnValues._property as string) : undefined
        )
    })
      .then(res => resolve(res.returnValues._property as string))
      .catch(reject)
  })
}

export const getPropertyAddress = async (client: Web3, githubRepository: string): Promise<string> => {
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          method: 'getPropertyAddress',
          args: [githubRepository]
        })
      : Promise.resolve(''))(getContract(client))
}

export const authenticate = async (client: Web3, githubRepository: string, publicSignature: string) => {
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          method: 'authenticate',
          args: [githubRepository, publicSignature],
          mutation: true
        })
      : Promise.resolve())(getContract(client))
}

export const intermediateProcess = async (
  client: Web3,
  githubRepository: string,
  metricsAddress: string,
  twitterStatusUrl: string,
  twitterPublicSignature: string
) => {
  const stripId = (word: string) => {
    // care both 'https://twitter.com/staus/111' and '111'
    const _ = word.split('/')
    return _[_.length - 1].replace(/^([0-9]+).*$/, '$1')
  }
  const strippedTwitterStatusId = stripId(twitterStatusUrl)
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          method: 'intermediateProcess',
          args: [githubRepository, metricsAddress, strippedTwitterStatusId, twitterPublicSignature],
          mutation: true
        })
      : Promise.resolve())(getContract(client))
}

export const getReward = async (client: Web3, githubRepository: string): Promise<string> => {
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          method: 'getReward',
          args: [githubRepository]
        })
      : Promise.resolve(''))(getContract(client))
}

export const isFinished = async (client: Web3, propertyAddress: string): Promise<boolean> => {
  const contract = getContract(client)
  const events = await contract.getPastEvents('Finish', {
    fromBlock: 0,
    toBlock: 'latest',
    filter: { _property: propertyAddress, _status: 0 }
  })
  return events.length > 0
}

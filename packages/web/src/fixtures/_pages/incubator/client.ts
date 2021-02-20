import { abi } from './abi'
import Web3 from 'web3'
import { Contract } from 'web3-eth-contract'
import { createContract } from 'src/fixtures/utility/contract-client'
import { utils } from '@devprotocol/dev-kit'

const { execute, watchEvent } = utils
const client: Map<string, WeakMap<Web3, Contract>> = new Map()
const INCUBATOR_CONTRACT_ADDRESS = '0x1'

export const getContract = (web3: Web3, contractAddress = INCUBATOR_CONTRACT_ADDRESS): Contract => {
  const cache = client.get(contractAddress)
  const fromCache = cache?.get(web3)
  if (fromCache) {
    return fromCache
  }

  const contract = (createContract(abi, contractAddress, web3) as unknown) as Contract
  client.set(contractAddress, cache ? cache.set(web3, contract) : new WeakMap([[web3, contract]]))

  return contract
}

export const waitForFinishEvent = async (client: Web3, githubPublicSignature: string): Promise<string> => {
  const fromBlock = await client.eth.getBlockNumber()
  const contract = getContract(client)
  return new Promise((resolve, reject) => {
    watchEvent({
      fromBlock,
      contract,
      resolver: async e =>
        ((propertyAddress, publicSignature) => (propertyAddress ? githubPublicSignature === publicSignature : false))(
          e.event === 'Finish'
            ? (e.returnValues._property as string, e.returnValues._publicSignature as string)
            : undefined
        )
    })
      .then(res => resolve(res.returnValues._property as string))
      .catch(reject)
  })
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
  address: string,
  twitterStatusId: string,
  twitterPublicSignature: string
) => {
  const stripId = (word: string) => {
    // care both 'https://twitter.com/staus/111' and '111'
    const _ = word.split('/')
    return _[_.length - 1]
  }
  const strippedTwitterStatusId = stripId(twitterStatusId)
  return (contract =>
    contract
      ? execute({
          contract,
          client,
          method: 'intermediateProcess',
          args: [githubRepository, address, strippedTwitterStatusId, twitterPublicSignature],
          mutation: true
        })
      : Promise.resolve())(getContract(client))
}

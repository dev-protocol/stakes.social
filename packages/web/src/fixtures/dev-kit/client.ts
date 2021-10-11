import {
  contractFactory,
  DevkitContract,
  client as devClient,
  utils,
  addresses,
  metricsAbi,
  metricsFactoryAbi,
  devAbi,
  lockupAbi,
  propertyFactoryAbi,
  withdrawAbi,
  RegistryContract
} from '@devprotocol/dev-kit'
import { contractFactory as l2ContractFactory, DevkitContract as L2DevkitContract } from '@devprotocol/dev-kit/l2'
import { getContractAddress as _getContractAddress } from './get-contract-address'
import BigNumber from 'bignumber.js'
import { ethers, providers, Event } from 'ethers'
import { utils as legacyUtils } from '@devprotocol/alias-legacy-dev-kit'
import Web3 from 'web3'
import { ChainName, detectChain } from '../wallet/utility'
const { execute } = utils
const { watchEvent } = legacyUtils

const cacheForContractFactory: WeakMap<providers.BaseProvider, DevkitContract> = new WeakMap()
const cacheForL2ContractFactory: WeakMap<providers.BaseProvider, L2DevkitContract> = new WeakMap()
const cacheForNetwork: WeakMap<providers.BaseProvider, ChainName> = new WeakMap()
const newClient = (prov: providers.BaseProvider) => {
  const fromCache = cacheForContractFactory.get(prov)
  if (fromCache) {
    return fromCache
  }
  const contracts = contractFactory(prov)
  cacheForContractFactory.set(prov, contracts)
  return contracts
}
const newL2Client = (prov: providers.BaseProvider) => {
  const fromCache = cacheForL2ContractFactory.get(prov)
  if (fromCache) {
    return fromCache
  }
  const contracts = l2ContractFactory(prov)
  cacheForL2ContractFactory.set(prov, contracts)
  return contracts
}
const getNetwork = async (prov: providers.BaseProvider) => {
  const fromCache = cacheForNetwork.get(prov)
  if (fromCache) {
    return fromCache
  }
  const net = await detectChain(prov)
  cacheForNetwork.set(prov, net.name)
  return net.name
}
const createGetContractAddress =
  (prov: providers.BaseProvider) =>
  async (client: DevkitContract, contract: keyof Omit<RegistryContract, 'contract'>): Promise<string> => {
    const net = await getNetwork(prov)
    return _getContractAddress(client, contract, net)
  }
const getL2Registry = async (prov: providers.BaseProvider) => {
  const net = await getNetwork(prov)
  return net === 'arbitrum-one-main'
    ? addresses.arbitrumOne.main
    : net === 'arbitrum-one-rinkeby'
    ? addresses.arbitrumOne.rinkeby
    : undefined
}

export const getRewardsAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateCumulativeHoldersRewardAmount(propertyAddress)
  }
  return undefined
}

export const getTotalStakingAmount = async (prov: providers.BaseProvider, proepertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getPropertyValue(proepertyAddress)
  }
  return undefined
}

export const getTotalStakingAmountOnProtocol = async (prov: providers.BaseProvider) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    console.log('***')
    return client.lockup(await getContractAddress(client, 'lockup')).getAllValue()
  }
  return undefined
}

export const getMyHolderAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  accountAddress: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateRewardAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getTreasuryAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  const treasuryAddress = await client.policy(await getContractAddress(client, 'policy')).treasury()
  if (client && treasuryAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateWithdrawableAmount(propertyAddress, treasuryAddress)
  }
  return undefined
}

export const getMyStakingRewardAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  accountAddress: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateWithdrawableInterestAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  accountAddress: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client.lockup(await getContractAddress(client, 'lockup')).getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const withdrawHolderAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  return client.withdraw(await getContractAddress(client, 'withdraw')).withdraw(propertyAddress)
}

export const getEstimateGas4WithdrawHolderAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  const contract = new ethers.Contract(await getContractAddress(client, 'withdraw'), [...withdrawAbi])
  return new BigNumber(await contract.estimateGas['withdraw'](propertyAddress).then(x => x.toString()))
}

export const withdrawStakingAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  amount: BigNumber
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdraw(propertyAddress, amount.toFixed())
}

export const getEstimateGas4WithdrawStakingAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  amount: string,
  from: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  const contract = new ethers.Contract(await getContractAddress(client, 'lockup'), [...lockupAbi])
  return new BigNumber(await contract.methods['withdraw'](propertyAddress, amount).estimateGas({ from }))
}

export const stakeDev = async (prov: providers.BaseProvider, propertyAddress: string, amount: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  return client.dev(await getContractAddress(client, 'token')).deposit(propertyAddress, amount)
}

export const getEstimateGas4StakeDev = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  amount: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  const contract = new ethers.Contract(await getContractAddress(client, 'token'), [...devAbi])
  return new BigNumber(await contract.estimateGas['deposit'](propertyAddress, amount).then(x => x.toString()))
}

export const calculateMaxRewardsPerBlock = async (prov: providers.BaseProvider) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.allocator(await getContractAddress(client, 'allocator')).calculateMaxRewardsPerBlock()
  }
  return undefined
}

export const createProperty = async (prov: providers.BaseProvider, name: string, symbol: string, author: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (process.env.NODE_ENV == 'production' && client) {
    return client.propertyFactory(await getContractAddress(client, 'propertyFactory')).create(name, symbol, author)
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:0xd5f3c1bA399E000B1a76210d7dB12bb5eefA8e47'
  }
  return undefined
}

export const getEstimateGas4CreateProperty = async (
  prov: providers.BaseProvider,
  name: string,
  symbol: string,
  author: string
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) {
    return undefined
  }
  const contract = new ethers.Contract(await getContractAddress(client, 'propertyFactory'), [...propertyFactoryAbi])
  return new BigNumber(await contract.estimateGas['create'](name, symbol, author).then(x => x.toString()))
}

export const marketScheme = async (prov: providers.BaseProvider, marketAddress: string) => {
  const client = newClient(prov)
  if (client) {
    return client.market(marketAddress).schema()
  }
  return []
}

export const authenticate = async (
  prov: providers.BaseProvider,
  marketAddress: string,
  propertyAddress: string,
  args: string[]
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (process.env.NODE_ENV == 'production' && client) {
    return client.market(marketAddress).authenticate(propertyAddress, args, {
      metricsFactoryAddress: await getContractAddress(client, 'metricsFactory')
    })
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:metrics-address'
  }
  return undefined
}

export const createAndAuthenticate = async (
  prov: providers.BaseProvider,
  name: string,
  symbol: string,
  marketAddress: string,
  args: string[]
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  return client
    .propertyFactory(await getContractAddress(client, 'propertyFactory'))
    .createAndAuthenticate(name, symbol, marketAddress, args, {
      metricsFactoryAddress: await getContractAddress(client, 'metricsFactory')
    })

  /**
   * During development, you can check the operation using the commented out code below.
   * If you want to use these, comment out the return statement above.
   */
  // return new Promise<UnwrapFunc<PropertyFactoryContract['createAndAuthenticate']>>(resolve => {
  //   setTimeout(
  //     () =>
  //       resolve({
  //         property: 'property_address',
  //         transaction: {} as any,
  //         waitForAuthentication: () =>
  //           new Promise(res => {
  //             setTimeout(() => res('metrics_address'), 1000 * 15)
  //           })
  //       }),
  //     1000 * 15
  //   )
  // })
}

export const getEstimateGas4CreateAndAuthenticate = async (
  prov: providers.BaseProvider,
  name: string,
  symbol: string,
  marketAddress: string,
  args: string[]
) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  const contract = new ethers.Contract(await getContractAddress(client, 'propertyFactory'), [...propertyFactoryAbi])
  return new BigNumber(
    await contract.estimateGas['createAndAuthenticate'](name, symbol, marketAddress, ...args).then(x => x.toString())
  )
}

export const totalSupply = async (prov: providers.BaseProvider) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).totalSupply()
  }
  return undefined
}

export const holdersShare = async (prov: providers.BaseProvider, amount: string, lockedups: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.policy(await getContractAddress(client, 'policy')).holdersShare(amount, lockedups)
  }
  return undefined
}

export const createGetVotablePolicy = async (prov: providers.BaseProvider) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    const policyGroup = client.policyGroup(await getContractAddress(client, 'policyGroup'))
    const [policies, currentPolicy] = await Promise.all([
      devClient.createGetVotablePolicy(policyGroup)(),
      getContractAddress(client, 'policy')
    ])
    return policies.filter(p => p !== currentPolicy)
  }
  throw new Error(`No wallet`)
}

export const propertyAuthor = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  if (client) {
    return client.property(propertyAddress).author()
  }
  return undefined
}

export const propertyName = async (
  prov: providers.BaseProvider,
  propertyAddress: string
): Promise<undefined | string> => {
  const client = newClient(prov)
  if (client) {
    return client.property(propertyAddress).name()
  }
  return undefined
}

export const propertySymbol = async (
  prov: providers.BaseProvider,
  propertyAddress: string
): Promise<undefined | string> => {
  const client = newClient(prov)
  if (client) {
    return client.property(propertyAddress).symbol()
  }
  return undefined
}

export const balanceOf = async (prov: providers.BaseProvider, accountAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client.dev(await getContractAddress(client, 'token')).balanceOf(accountAddress)
  }
  return undefined
}

export const allClaimedRewards = async (prov: providers.BaseProvider, accountAddress: string): Promise<Event[]> => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    const contract = new ethers.Contract(await getContractAddress(client, 'token'), [...devAbi])
    return contract.queryFilter(
      contract.filters.Transfer('0x0000000000000000000000000000000000000000', accountAddress),
      'earliest',
      'latest'
    )
  }
  return []
}

export const balanceOfProperty = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  accountAddress: string
) => {
  const client = newClient(prov)
  if (client && accountAddress) {
    return client.property(propertyAddress).balanceOf(accountAddress)
  }
  return undefined
}

const getMetricsProperty = async (address: string): Promise<string> =>
  execute({
    contract: new ethers.Contract(address, [...metricsAbi]),
    method: 'property',
    mutation: false
  })

export const waitForCreateMetrics = async (
  prov: providers.BaseProvider,
  web3: Web3,
  propertyAddress: string
): Promise<string> => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  const [fromBlock, metricsFactoryAddress] = await Promise.all([
    prov.getBlockNumber(),
    getContractAddress(client, 'metricsFactory')
  ])
  return new Promise((resolve, reject) => {
    watchEvent({
      fromBlock,
      contract: new web3.eth.Contract([...(metricsFactoryAbi as any)], metricsFactoryAddress),
      resolver: async e =>
        (metricsAddress =>
          metricsAddress
            ? getMetricsProperty(metricsAddress)
                .then(property => (property === propertyAddress ? true : false))
                .catch(reject)
            : false)(e.event === 'Create' ? (e.returnValues._metrics as string) : undefined)
    })
      .then(res => resolve(res.returnValues._metrics as string))
      .catch(reject)
  })
}

export const positionsOfOwner = async (prov: providers.BaseProvider, accountAddress: string) => {
  const client = newClient(prov)
  if (client) {
    const TokenIdList = await client.sTokens(addresses.eth.main.sTokens).positionsOfOwner(accountAddress)
    return TokenIdList
  }
  return undefined
}

export const detectStokens = async (prov: providers.BaseProvider, propertyAddress: string, accountAddress: string) => {
  const client = newClient(prov)
  if (client) {
    const TokenIdList = await devClient.createDetectSTokens(client.sTokens(addresses.eth.main.sTokens))(
      propertyAddress,
      accountAddress
    )
    return TokenIdList
  }
  return undefined
}

export const getStokenPositions = async (prov: providers.BaseProvider, sTokenID: number) => {
  const client = newClient(prov)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).positions(sTokenID)
  }
  return undefined
}

export const getStokenRewards = async (prov: providers.BaseProvider, sTokenId: number) => {
  const client = newClient(prov)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).rewards(sTokenId)
  }
  return undefined
}

export const approve = async (prov: providers.BaseProvider, address: string, amount: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).approve(address, amount)
  }
  return undefined
}

export const depositToProperty = async (prov: providers.BaseProvider, propertyAddress: string, amount: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToProperty(propertyAddress, amount)
  }
  return undefined
}

export const depositToPosition = async (prov: providers.BaseProvider, sTokenId: string, amount: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToPosition(sTokenId, amount)
  }
  return undefined
}

export const withdrawByPosition = async (prov: providers.BaseProvider, sTokenId: string, amount: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).withdrawByPosition(sTokenId, amount)
  }
  return undefined
}

export const migrateToSTokens = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const client = newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).migrateToSTokens(propertyAddress)
  }
  return undefined
}

export const getTokenURI = async (prov: providers.BaseProvider, sTokenId: number) => {
  const client = newClient(prov)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).tokenURI(sTokenId)
  }
  return undefined
}

export const getStokenSymbol = async (prov: providers.BaseProvider, sTokenId: number) => {
  const client = newClient(prov)
  if (client) {
    return client
      .sTokens(addresses.eth.main.sTokens)
      .positions(sTokenId)
      .then(res => client.property(res.property).symbol)
  }
  return undefined
}

export const enabledMarkets = async (prov: providers.BaseProvider) => {
  const client = newL2Client(prov)
  const reg = await getL2Registry(prov)
  if (client && reg) {
    return client.marketFactory(reg.marketFactory).enabledMarkets()
  }
  return undefined
}

export const getAuthenticatedProperties = async (prov: providers.BaseProvider, marketAddress: string) => {
  const client = newL2Client(prov)
  if (client) {
    return client.market(marketAddress).getAuthenticatedProperties()
  }
  return undefined
}

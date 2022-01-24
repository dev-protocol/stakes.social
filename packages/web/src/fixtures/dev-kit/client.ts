import {
  contractFactory,
  DevkitContract,
  client as devClient,
  addresses,
  devAbi,
  sTokensAbi,
  RegistryContract
} from '@devprotocol/dev-kit'
import { contractFactory as l2ContractFactory, DevkitContract as L2DevkitContract } from '@devprotocol/dev-kit/l2'
import { getContractAddress as _getContractAddress } from './get-contract-address'
import BigNumber from 'bignumber.js'
import { ethers, providers, Event } from 'ethers'
import { ChainName, detectChain } from '../wallet/utility'
import { whenDefinedAll, whenDefined, UndefinedOr } from '@devprotocol/util-ts'

const cacheForContractFactory: WeakMap<
  providers.BaseProvider,
  [UndefinedOr<DevkitContract>, UndefinedOr<L2DevkitContract>]
> = new WeakMap()
const cacheForNetwork: WeakMap<providers.BaseProvider, ChainName> = new WeakMap()
const newClient = async (
  prov: providers.BaseProvider
): Promise<
  [UndefinedOr<DevkitContract>, UndefinedOr<L2DevkitContract>, UndefinedOr<DevkitContract | L2DevkitContract>]
> => {
  const fromCache = cacheForContractFactory.get(prov)
  if (fromCache) {
    return [...fromCache, fromCache[0] || fromCache[1]]
  }
  const isL2 = await getNetwork(prov).then(name => name !== 'ethereum' && name !== 'ropsten')
  const contracts = !isL2 ? contractFactory(prov) : undefined
  const l2Contracts = isL2 ? l2ContractFactory(prov) : undefined
  cacheForContractFactory.set(prov, [contracts, l2Contracts])
  return [contracts, l2Contracts, contracts || l2Contracts]
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
  async <C extends DevkitContract | L2DevkitContract>(
    client: C,
    contract: keyof Omit<RegistryContract, 'contract'>
  ): Promise<string> => {
    const net = await getNetwork(prov)
    return _getContractAddress(client, contract, net)
  }
const getL2Registry = async (prov: providers.BaseProvider) => {
  const net = await getNetwork(prov)
  return net === 'arbitrum-one'
    ? addresses.arbitrum.one
    : net === 'arbitrum-rinkeby'
    ? addresses.arbitrum.rinkeby
    : net === 'polygon'
    ? addresses.polygon.mainnet
    : net === 'polygon-mumbai'
    ? addresses.polygon.mumbai
    : undefined
}
const getSTokensAddress = async (prov: providers.BaseProvider) => {
  const net = await getNetwork(prov)
  return net === 'ethereum'
    ? addresses.eth.main.sTokens
    : net === 'ropsten'
    ? addresses.eth.ropsten.sTokens
    : net === 'arbitrum-one'
    ? addresses.arbitrum.one.sTokens
    : net === 'arbitrum-rinkeby'
    ? addresses.arbitrum.rinkeby.sTokens
    : net === 'polygon'
    ? addresses.polygon.mainnet.sTokens
    : net === 'polygon-mumbai'
    ? addresses.polygon.mumbai.sTokens
    : undefined
}

export const getRewardsAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateRewardAmount(propertyAddress)
      .then(x => x[0])
  }
  return undefined
}

export const getTotalStakingAmount = async (prov: providers.BaseProvider, proepertyAddress: string) => {
  const [client, l2] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getPropertyValue(proepertyAddress)
  }
  return whenDefinedAll([l2, await getL2Registry(prov)], ([l2x, reg]) =>
    l2x.lockup(reg.lockup).totalLockedForProperty(proepertyAddress)
  )
}

export const getTotalStakingAmountOnProtocol = async (prov: providers.BaseProvider) => {
  const [client, l2] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getAllValue()
  }
  return whenDefinedAll([l2, await getL2Registry(prov)], ([l2x, reg]) => l2x.lockup(reg.lockup).totalLocked())
}

export const getMyHolderAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  accountAddress: string
) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateRewardAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getTreasuryAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [l1, l2, client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  const reg = await getL2Registry(prov)
  const treasuryAddress =
    (await whenDefined(l1, async x => x.policy(await getContractAddress(x, 'policy')).treasury())) ??
    (await whenDefinedAll([l2, reg], ([x, regis]) => x.registry(regis.registry).registries('Treasury')))
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
  const [client] = await newClient(prov)
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
  const [client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client.lockup(await getContractAddress(client, 'lockup')).getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const withdrawHolderAmount = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet`)
  return client.withdraw(await getContractAddress(client, 'withdraw')).withdraw(propertyAddress)
}

export const withdrawStakingAmount = async (
  prov: providers.BaseProvider,
  propertyAddress: string,
  amount: BigNumber
) => {
  const [client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet or not supported network`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdraw(propertyAddress, amount.toFixed())
}

export const stakeDev = async (prov: providers.BaseProvider, propertyAddress: string, amount: string) => {
  const [client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (!client) throw new Error(`No wallet or not supported network`)
  return client.dev(await getContractAddress(client, 'token')).deposit(propertyAddress, amount)
}

export const calculateMaxRewardsPerBlock = async (prov: providers.BaseProvider) => {
  const [l1, l2] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (l1) {
    return l1.allocator(await getContractAddress(l1, 'allocator')).calculateMaxRewardsPerBlock()
  }
  if (l2) {
    const totalLocked = await l2.lockup(await getContractAddress(l2, 'lockup')).totalLocked()
    const totalAssets = await l2.metricsFactory(await getContractAddress(l2, 'metricsFactory')).metricsCount()
    return l2.policy(await getContractAddress(l2, 'policy')).rewards(totalLocked, totalAssets.toString())
  }
  return undefined
}

export const createProperty = async (prov: providers.BaseProvider, name: string, symbol: string, author: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (process.env.NODE_ENV == 'production' && client) {
    return client.propertyFactory(await getContractAddress(client, 'propertyFactory')).create(name, symbol, author)
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:0xd5f3c1bA399E000B1a76210d7dB12bb5eefA8e47'
  }
  return undefined
}

export const marketScheme = async (prov: providers.BaseProvider, marketAddress: string) => {
  const [, , client] = await newClient(prov)
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
  const [, , client] = await newClient(prov)
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
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    console.log('***', await (prov as any).getSigner().getAddress())
    return client.propertyFactory(await getContractAddress(client, 'propertyFactory')).createAndAuthenticate(
      name,
      symbol,
      marketAddress,
      args,
      {
        metricsFactoryAddress: await getContractAddress(client, 'metricsFactory')
      },
      { fallback: { gasLimit: 2000000 } }
    )
  }
  return undefined

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

export const totalSupply = async (prov: providers.BaseProvider) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    console.log(await getContractAddress(client, 'token'))
    return client.dev(await getContractAddress(client, 'token')).totalSupply()
  }
  return undefined
}

export const holdersShare = async (prov: providers.BaseProvider, amount: string, lockedups: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.policy(await getContractAddress(client, 'policy')).holdersShare(amount, lockedups)
  }
  return undefined
}

export const createGetVotablePolicy = async (prov: providers.BaseProvider) => {
  const [client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    const policyGroup = client.policyGroup(await getContractAddress(client, 'policyGroup'))
    const [policies, currentPolicy] = await Promise.all([
      devClient.createGetVotablePolicy(policyGroup)(),
      getContractAddress(client, 'policy')
    ])
    return policies.filter(p => p !== currentPolicy)
  }
  throw new Error(`No wallet or not supported network`)
}

export const propertyAuthor = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.property(propertyAddress).author()
  }
  return undefined
}

export const propertyName = async (
  prov: providers.BaseProvider,
  propertyAddress: string
): Promise<undefined | string> => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.property(propertyAddress).name()
  }
  return undefined
}

export const propertySymbol = async (
  prov: providers.BaseProvider,
  propertyAddress: string
): Promise<undefined | string> => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.property(propertyAddress).symbol()
  }
  return undefined
}

export const balanceOf = async (prov: providers.BaseProvider, accountAddress: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client && accountAddress) {
    return client.dev(await getContractAddress(client, 'token')).balanceOf(accountAddress)
  }
  return undefined
}

export const allClaimedRewards = async (prov: providers.BaseProvider, accountAddress: string): Promise<Event[]> => {
  const [, , client] = await newClient(prov)
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
  const [, , client] = await newClient(prov)
  if (client && accountAddress) {
    return client.property(propertyAddress).balanceOf(accountAddress)
  }
  return undefined
}

export const positionsOfOwner = async (prov: providers.BaseProvider, accountAddress: string) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    const TokenIdList = await client.sTokens(address).positionsOfOwner(accountAddress)
    return TokenIdList
  }
  return undefined
}

export const detectStokens = async (prov: providers.BaseProvider, propertyAddress: string, accountAddress: string) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    const TokenIdList = await devClient.createDetectSTokens(client.sTokens(address))(propertyAddress, accountAddress)
    return TokenIdList
  }
  return undefined
}

export const detectStokensByPropertyAddress = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    const TokenIdList = await (client.sTokens(address) as any).positionsOfProperty(propertyAddress)
    return TokenIdList
  }
  return undefined
}

export const getStokenTokenURI = async (prov: providers.BaseProvider, sTokenID: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).tokenURI(sTokenID)
  }
  return undefined
}

export const setStokenTokenURIImage = async (prov: providers.BaseProvider, sTokenID: number, data: string) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).setTokenURIImage(sTokenID, data)
  }
  return undefined
}

export const getStokenOwnerOf = async (prov: providers.BaseProvider, sTokenID: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).ownerOf(sTokenID)
  }
  return undefined
}

export const getStokenPositions = async (prov: providers.BaseProvider, sTokenID: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).positions(sTokenID)
  }
  return undefined
}

export const getStokenRewards = async (prov: providers.BaseProvider, sTokenId: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).rewards(sTokenId)
  }
  return undefined
}

export const allowance = async (prov: providers.BaseProvider, contractAddress: string, address?: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (address && client) {
    return client.dev(await getContractAddress(client, 'token')).allowance(address, contractAddress)
  }
  return undefined
}

export const approve = async (prov: providers.BaseProvider, address: string, amount: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).approve(address, amount)
  }
  return undefined
}

export const depositToProperty = async (prov: providers.BaseProvider, propertyAddress: string, amount: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToProperty(propertyAddress, amount)
  }
  return undefined
}

export const depositToPosition = async (prov: providers.BaseProvider, sTokenId: string, amount: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToPosition(sTokenId, amount)
  }
  return undefined
}

export const withdrawByPosition = async (prov: providers.BaseProvider, sTokenId: string, amount: string) => {
  const [, , client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).withdrawByPosition(sTokenId, amount)
  }
  return undefined
}

export const migrateToSTokens = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [client] = await newClient(prov)
  const getContractAddress = createGetContractAddress(prov)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).migrateToSTokens(propertyAddress)
  }
  return undefined
}

export const getTokenURI = async (prov: providers.BaseProvider, sTokenId: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client.sTokens(address).tokenURI(sTokenId)
  }
  return undefined
}

export const getStokenSymbol = async (prov: providers.BaseProvider, sTokenId: number) => {
  const [, , client] = await newClient(prov)
  const address = await getSTokensAddress(prov)
  if (client && address) {
    return client
      .sTokens(address)
      .positions(sTokenId)
      .then(res => client.property(res.property).symbol)
  }
  return undefined
}

export const getEnabledMarkets = async (prov: providers.BaseProvider) => {
  const [, l2] = await newClient(prov)
  const reg = await getL2Registry(prov)
  if (l2 && reg) {
    return l2.marketFactory(reg.marketFactory).getEnabledMarkets()
  }
  return undefined
}

export const getAuthenticatedProperties = async (prov: providers.BaseProvider, marketAddress: string) => {
  const [, l2] = await newClient(prov)
  if (l2) {
    return l2.market(marketAddress).getAuthenticatedProperties()
  }
  return undefined
}

export const metricsOfProperty = async (prov: providers.BaseProvider, propertyAddress: string) => {
  const [, l2] = await newClient(prov)
  const reg = await getL2Registry(prov)
  if (l2 && reg) {
    return l2.metricsFactory(reg.metricsFactory).metricsOfProperty(propertyAddress)
  }
  return undefined
}

export const getMarket = async (prov: providers.BaseProvider, metricsAddress: string) => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.metrics(metricsAddress).market()
  }
  return undefined
}

export const getMarketBehavior = async (prov: providers.BaseProvider, marketAddress: string) => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.market(marketAddress).behavior()
  }
  return undefined
}

export const getId = async (prov: providers.BaseProvider, marketBehavior: string, metricsAddress: string) => {
  const [, , client] = await newClient(prov)
  if (client) {
    return client.marketBehavior(marketBehavior).getId(metricsAddress)
  }
  return undefined
}

export const getStokenHeldAt = async (prov: providers.BaseProvider, sTokenId: number) => {
  const address = await getSTokensAddress(prov)
  if (address) {
    const contract = new ethers.Contract(address, [...sTokensAbi], prov)
    return contract.queryFilter(contract.filters.Transfer('0x0000000000000000000000000000000000000000', null, sTokenId))
  }
  return undefined
}

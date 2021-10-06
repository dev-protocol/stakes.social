import Web3 from 'web3'
import { EventData } from 'web3-eth-contract'
import { contractFactory, DevkitContract, client as devClient, utils, addresses } from '@devprotocol/dev-kit'
import { getContractAddress } from './get-contract-address'
import BigNumber from 'bignumber.js'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropertyFactoryContract } from '@devprotocol/dev-kit'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UnwrapFunc } from '../utility'
import { metricsAbi, metricsFactoryAbi, devAbi, lockupAbi, propertyFactoryAbi, withdrawAbi } from './abi'

const { execute, watchEvent } = utils

const cache: WeakMap<Web3, DevkitContract> = new WeakMap()
const newClient = (web3: Web3) => {
  const fromCache = cache.get(web3)
  if (fromCache) {
    return fromCache
  }
  const contracts = contractFactory(web3.currentProvider)
  cache.set(web3, contracts)
  return contracts
}

export const getRewardsAmount = async (web3: Web3, propertyAddress: string) => {
  const client = newClient(web3)
  if (client) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateCumulativeHoldersRewardAmount(propertyAddress)
  }
  return undefined
}

export const getTotalStakingAmount = async (web3: Web3, proepertyAddress: string) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getPropertyValue(proepertyAddress)
  }
  return undefined
}

export const getTotalStakingAmountOnProtocol = async (web3: Web3) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getAllValue()
  }
  return undefined
}

export const getMyHolderAmount = async (web3: Web3, propertyAddress: string, accountAddress: string) => {
  const client = newClient(web3)
  if (client && accountAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateRewardAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getTreasuryAmount = async (web3: Web3, propertyAddress: string) => {
  const client = newClient(web3)
  const treasuryAddress = await client.policy(await getContractAddress(client, 'policy')).treasury()
  if (client && treasuryAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateWithdrawableAmount(propertyAddress, treasuryAddress)
  }
  return undefined
}

export const getMyStakingRewardAmount = async (web3: Web3, propertyAddress: string, accountAddress: string) => {
  const client = newClient(web3)
  if (client && accountAddress) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateWithdrawableInterestAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingAmount = async (web3: Web3, propertyAddress: string, accountAddress: string) => {
  const client = newClient(web3)
  if (client && accountAddress) {
    return client.lockup(await getContractAddress(client, 'lockup')).getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const withdrawHolderAmount = async (web3: Web3, propertyAddress: string) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  return client.withdraw(await getContractAddress(client, 'withdraw')).withdraw(propertyAddress)
}

export const getEstimateGas4WithdrawHolderAmount = async (web3: Web3, propertyAddress: string, from: string) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  const contract = new web3.eth.Contract([...withdrawAbi], await getContractAddress(client, 'withdraw'), {})
  return new BigNumber(await contract.methods['withdraw'](propertyAddress).estimateGas({ from }))
}

export const withdrawStakingAmount = async (web3: Web3, propertyAddress: string, amount: BigNumber) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdraw(propertyAddress, amount.toFixed())
}

export const getEstimateGas4WithdrawStakingAmount = async (
  web3: Web3,
  propertyAddress: string,
  amount: string,
  from: string
) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  const contract = new web3.eth.Contract([...lockupAbi], await getContractAddress(client, 'lockup'), {})
  return new BigNumber(await contract.methods['withdraw'](propertyAddress, amount).estimateGas({ from }))
}

export const stakeDev = async (web3: Web3, propertyAddress: string, amount: string) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  return client.dev(await getContractAddress(client, 'token')).deposit(propertyAddress, amount)
}

export const getEstimateGas4StakeDev = async (web3: Web3, propertyAddress: string, amount: string, from: string) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  const contract = new web3.eth.Contract([...devAbi], await getContractAddress(client, 'token'), {})
  return new BigNumber(await contract.methods['deposit'](propertyAddress, amount).estimateGas({ from }))
}

export const calculateMaxRewardsPerBlock = async (web3: Web3) => {
  const client = newClient(web3)
  if (client) {
    return client.allocator(await getContractAddress(client, 'allocator')).calculateMaxRewardsPerBlock()
  }
  return undefined
}

export const createProperty = async (web3: Web3, name: string, symbol: string, author: string) => {
  const client = newClient(web3)
  if (process.env.NODE_ENV == 'production' && client) {
    return client.propertyFactory(await getContractAddress(client, 'propertyFactory')).create(name, symbol, author)
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:0xd5f3c1bA399E000B1a76210d7dB12bb5eefA8e47'
  }
  return undefined
}

export const getEstimateGas4CreateProperty = async (
  web3: Web3,
  name: string,
  symbol: string,
  author: string,
  from: string
) => {
  const client = newClient(web3)
  if (!client) {
    return undefined
  }
  const contract = new web3.eth.Contract(
    [...propertyFactoryAbi],
    await getContractAddress(client, 'propertyFactory'),
    {}
  )
  return new BigNumber(await contract.methods['create'](name, symbol, author).estimateGas({ from }))
}

export const marketScheme = async (web3: Web3, marketAddress: string) => {
  const client = newClient(web3)
  if (client) {
    return client.market(marketAddress).schema()
  }
  return []
}

export const authenticate = async (web3: Web3, marketAddress: string, propertyAddress: string, args: string[]) => {
  const client = newClient(web3)
  if (process.env.NODE_ENV == 'production' && client) {
    const _args = ['', '', '', '', ''].map((x, i) => (args[i] ? args[i] : x))
    return client.market(marketAddress).authenticate(propertyAddress, _args, {
      metricsFactory: await getContractAddress(client, 'metricsFactory')
    })
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:metrics-address'
  }
  return undefined
}

export const createAndAuthenticate = async (
  web3: Web3,
  name: string,
  symbol: string,
  marketAddress: string,
  args: string[]
) => {
  const client = newClient(web3)
  return client
    .propertyFactory(await getContractAddress(client, 'propertyFactory'))
    .createAndAuthenticate(name, symbol, marketAddress, args, {
      metricsFactory: await getContractAddress(client, 'metricsFactory')
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
  web3: Web3,
  name: string,
  symbol: string,
  marketAddress: string,
  args: string[],
  from: string
) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  const contract = new web3.eth.Contract(
    [...propertyFactoryAbi],
    await getContractAddress(client, 'propertyFactory'),
    {}
  )
  return new BigNumber(
    await contract.methods['createAndAuthenticate'](name, symbol, marketAddress, ...args).estimateGas({ from })
  )
}

export const totalSupply = async (web3: Web3) => {
  const client = newClient(web3)
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).totalSupply()
  }
  return undefined
}

export const holdersShare = async (web3: Web3, amount: string, lockedups: string) => {
  const client = newClient(web3)
  if (client) {
    return client.policy(await getContractAddress(client, 'policy')).holdersShare(amount, lockedups)
  }
  return undefined
}

export const createGetVotablePolicy = async (web3: Web3) => {
  const client = newClient(web3)
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

export const propertyAuthor = async (web3: Web3, propertyAddress: string) => {
  const client = newClient(web3)
  if (client) {
    return client.property(propertyAddress).author()
  }
  return undefined
}

export const propertyName = async (web3: Web3, propertyAddress: string): Promise<undefined | string> => {
  const client = newClient(web3)
  if (client) {
    return client.property(propertyAddress).name()
  }
  return undefined
}

export const propertySymbol = async (web3: Web3, propertyAddress: string): Promise<undefined | string> => {
  const client = newClient(web3)
  if (client) {
    return client.property(propertyAddress).symbol()
  }
  return undefined
}

export const balanceOf = async (web3: Web3, accountAddress: string) => {
  const client = newClient(web3)
  if (client && accountAddress) {
    return client.dev(await getContractAddress(client, 'token')).balanceOf(accountAddress)
  }
  return undefined
}

export const allClaimedRewards = async (web3: Web3, accountAddress: string): Promise<EventData[]> => {
  const client = newClient(web3)
  if (client) {
    return client
      .dev(await getContractAddress(client, 'token'))
      .contract()
      .getPastEvents('Transfer', {
        filter: { from: '0x0000000000000000000000000000000000000000', to: accountAddress },
        fromBlock: 0,
        toBlock: 'latest'
      })
  }
  return []
}

export const balanceOfProperty = async (web3: Web3, propertyAddress: string, accountAddress: string) => {
  const client = newClient(web3)
  if (client && accountAddress) {
    return client.property(propertyAddress).contract().methods.balanceOf(accountAddress).call()
  }
  return undefined
}

const getMetricsProperty = async (address: string, client: Web3): Promise<string> =>
  execute({
    contract: new client.eth.Contract([...metricsAbi], address),
    method: 'property'
  })

export const waitForCreateMetrics = async (web3: Web3, propertyAddress: string): Promise<string> => {
  const client = newClient(web3)
  const [fromBlock, metricsFactoryAddress] = await Promise.all([
    web3.eth.getBlockNumber(),
    getContractAddress(client, 'metricsFactory')
  ])
  return new Promise((resolve, reject) => {
    watchEvent({
      fromBlock,
      contract: new web3.eth.Contract([...metricsFactoryAbi], metricsFactoryAddress),
      resolver: async e =>
        (metricsAddress =>
          metricsAddress
            ? getMetricsProperty(metricsAddress, web3)
                .then(property => (property === propertyAddress ? true : false))
                .catch(reject)
            : false)(e.event === 'Create' ? (e.returnValues._metrics as string) : undefined)
    })
      .then(res => resolve(res.returnValues._metrics as string))
      .catch(reject)
  })
}

export const positionsOfOwner = async (web3: Web3, accountAddress: string) => {
  const client = newClient(web3)
  if (client) {
    const TokenIdList = await client.sTokens(addresses.eth.main.sTokens).positionsOfOwner(accountAddress)
    return TokenIdList
  }
  return undefined
}

export const detectStokens = async (web3: Web3, propertyAddress: string, accountAddress: string) => {
  const client = newClient(web3)
  if (client) {
    const TokenIdList = await devClient.createDetectSTokens(client.sTokens(addresses.eth.main.sTokens))(
      propertyAddress,
      accountAddress
    )
    return TokenIdList
  }
  return undefined
}

export const getStokenPositions = async (web3: Web3, sTokenID: number) => {
  const client = newClient(web3)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).positions(sTokenID)
  }
  return undefined
}

export const getStokenRewards = async (web3: Web3, sTokenId: number) => {
  const client = newClient(web3)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).rewards(sTokenId)
  }
  return undefined
}

export const approve = async (web3: Web3, address: string, amount: string) => {
  const client = newClient(web3)
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).approve(address, amount)
  }
  return undefined
}

export const depositToProperty = async (web3: Web3, propertyAddress: string, amount: string) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToProperty(propertyAddress, amount)
  }
  return undefined
}

export const depositToPosition = async (web3: Web3, sTokenId: string, amount: string) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).depositToPosition(sTokenId, amount)
  }
  return undefined
}

export const withdrawByPosition = async (web3: Web3, sTokenId: string, amount: string) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).withdrawByPosition(sTokenId, amount)
  }
  return undefined
}

export const migrateToSTokens = async (web3: Web3, propertyAddress: string) => {
  const client = newClient(web3)
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).migrateToSTokens(propertyAddress)
  }
  return undefined
}

export const getTokenURI = async (web3: Web3, sTokenId: number) => {
  const client = newClient(web3)
  if (client) {
    return client.sTokens(addresses.eth.main.sTokens).tokenURI(sTokenId)
  }
  return undefined
}

export const getStokenSymbol = async (web3: Web3, sTokenId: number) => {
  const client = newClient(web3)
  if (client) {
    return client
      .sTokens(addresses.eth.main.sTokens)
      .positions(sTokenId)
      .then(res => client.property(res.property).symbol)
  }
  return undefined
}

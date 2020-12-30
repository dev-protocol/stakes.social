import Web3 from 'web3'
import { EventData } from 'web3-eth-contract'
import { contractFactory } from '@devprotocol/dev-kit'
import { getContractAddress } from './get-contract-address'
import { client as devClient } from '@devprotocol/dev-kit'
import BigNumber from 'bignumber.js'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PropertyFactoryContract } from '@devprotocol/dev-kit'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { UnwrapFunc } from '../utility'

const newClient = (web3: Web3) => {
  return contractFactory(web3.currentProvider)
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
      .calculateWithdrawableAmount(propertyAddress, accountAddress)
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

export const withdrawStakingAmount = async (web3: Web3, propertyAddress: string, amount: BigNumber) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdraw(propertyAddress, amount.toFixed())
}

export const stakeDev = async (web3: Web3, propertyAddress: string, amount: string) => {
  const client = newClient(web3)
  if (!client) throw new Error(`No wallet`)
  return client.dev(await getContractAddress(client, 'token')).deposit(propertyAddress, amount)
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
    return client.property(propertyAddress).contract().methods.name().call()
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

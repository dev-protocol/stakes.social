import { contractFactory } from '@devprtcl/dev-kit-js'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { getContractAddress } from './get-contract-address'
import { client as devClient } from '@devprtcl/dev-kit-js'

const newClient = () => {
  const { ethereum } = window
  if (ethereum) {
    return contractFactory(ethereum)
  }
  return undefined
}

export const getRewardsAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (client) {
    return client.withdraw(await getContractAddress(client, 'withdraw')).getRewardsAmount(propertyAddress)
  }
  return undefined
}

export const getTotalStakingAmount = async (proepertyAddress: string) => {
  const client = newClient()
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getPropertyValue(proepertyAddress)
  }
  return undefined
}

export const getTotalStakingAmountOnProtocol = async () => {
  const client = newClient()
  if (client) {
    return client.lockup(await getContractAddress(client, 'lockup')).getAllValue()
  }
  return undefined
}

export const getMyHolderAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .withdraw(await getContractAddress(client, 'withdraw'))
      .calculateWithdrawableAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingRewardAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .calculateWithdrawableInterestAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client.lockup(await getContractAddress(client, 'lockup')).getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const withdrawHolderAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.withdraw(await getContractAddress(client, 'withdraw')).withdraw(propertyAddress)
}

export const withdrawStakingAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdraw(propertyAddress)
}

export const withdrawStakingRewardAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).withdrawInterest(propertyAddress)
}

export const stakeDev = async (propertyAddress: string, amount: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.dev(await getContractAddress(client, 'token')).deposit(propertyAddress, amount)
}

export const cancelStaking = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await getContractAddress(client, 'lockup')).cancel(propertyAddress)
}

export const getWithdrawalStatus = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .lockup(await getContractAddress(client, 'lockup'))
      .getStorageWithdrawalStatus(propertyAddress, accountAddress)
      .then(Number)
  }
  return undefined
}

export const calculateMaxRewardsPerBlock = async () => {
  const client = newClient()
  if (client) {
    return client.allocator(await getContractAddress(client, 'allocator')).calculateMaxRewardsPerBlock()
  }
  return undefined
}

export const createProperty = async (name: string, symbol: string, author: string) => {
  const client = newClient()
  if (process.env.NODE_ENV == 'production' && client) {
    return client.propertyFactory(await getContractAddress(client, 'propertyFactory')).create(name, symbol, author)
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:0xd5f3c1bA399E000B1a76210d7dB12bb5eefA8e47'
  }
  return undefined
}

export const marketScheme = async (marketAddress: string) => {
  const client = newClient()
  if (client) {
    return client.market(marketAddress).schema()
  }
  return []
}

export const authenticate = async (marketAddress: string, propertyAddress: string, args: string[]) => {
  const client = newClient()
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

export const createAndAuthenticate = async (name: string, symbol: string, marketAddress: string, args: string[]) => {
  const client = newClient()
  if (client) {
    return client
      .propertyFactory(await getContractAddress(client, 'propertyFactory'))
      .createAndAuthenticate(name, symbol, marketAddress, args, {
        metricsFactory: await getContractAddress(client, 'metricsFactory')
      })
  }
  return undefined
}

export const totalSupply = async () => {
  const client = newClient()
  if (client) {
    return client.dev(await getContractAddress(client, 'token')).totalSupply()
  }
  return undefined
}

export const holdersShare = async (amount: string, lockedups: string) => {
  const client = newClient()
  if (client) {
    return client.policy(await getContractAddress(client, 'policy')).holdersShare(amount, lockedups)
  }
  return undefined
}

export const createGetVotablePolicy = async () => {
  const client = newClient()
  if (client) {
    const policySet = client.policySet(await getContractAddress(client, 'policySet'))
    const [policies, currentPolicy] = await Promise.all([
      devClient.createGetVotablePolicy(policySet)(),
      getContractAddress(client, 'policy')
    ])
    return policies.filter(p => p !== currentPolicy)
  }
  throw new Error(`No wallet`)
}

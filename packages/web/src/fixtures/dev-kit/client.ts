import { contractFactory } from '@devprtcl/dev-kit-js'
import { addresses } from '@devprtcl/dev-kit-js'
import { getAccountAddress } from 'src/fixtures/wallet/utility'

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
    return client
      .withdraw(await client.registry(addresses.eth.main.registry).withdraw())
      .getRewardsAmount(propertyAddress)
  }
  return undefined
}

export const getTotalStakingAmount = async (proepertyAddress: string) => {
  const client = newClient()
  if (client) {
    return client.lockup(await client.registry(addresses.eth.main.registry).lockup()).getPropertyValue(proepertyAddress)
  }
  return undefined
}

export const getMyHolderAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .withdraw(await client.registry(addresses.eth.main.registry).withdraw())
      .calculateWithdrawableAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingRewardAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .lockup(await client.registry(addresses.eth.main.registry).lockup())
      .calculateWithdrawableInterestAmount(propertyAddress, accountAddress)
  }
  return undefined
}

export const getMyStakingAmount = async (propertyAddress: string) => {
  const client = newClient()
  const accountAddress = await getAccountAddress()
  if (client && accountAddress) {
    return client
      .lockup(await client.registry(addresses.eth.main.registry).lockup())
      .getValue(propertyAddress, accountAddress)
  }
  return undefined
}

export const withdrawHolderAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.withdraw(await client.registry(addresses.eth.main.registry).withdraw()).withdraw(propertyAddress)
}

export const withdrawStakingAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await client.registry(addresses.eth.main.registry).lockup()).withdraw(propertyAddress)
}

export const withdrawStakingRewardAmount = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await client.registry(addresses.eth.main.registry).lockup()).withdrawInterest(propertyAddress)
}

export const stakeDev = async (propertyAddress: string, amount: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.dev(await client.registry(addresses.eth.main.registry).token()).deposit(propertyAddress, amount)
}

export const cancelStaking = async (propertyAddress: string) => {
  const client = newClient()
  if (!client) throw new Error(`No wallet`)
  return client.lockup(await client.registry(addresses.eth.main.registry).lockup()).cancel(propertyAddress)
}

export const getLastAssetValueEachMetrics = async (metricsAddress: string) => {
  const client = newClient()
  if (client) {
    return client
      .allocatorStorage(await client.registry(addresses.eth.main.registry).allocatorStorage())
      .getLastAssetValueEachMetrics(metricsAddress)
  }
  return undefined
}

export const getLastAssetValueEachMarketPerBlock = async (marketAddress: string) => {
  const client = newClient()
  if (client) {
    return client
      .allocatorStorage(await client.registry(addresses.eth.main.registry).allocatorStorage())
      .getLastAssetValueEachMarketPerBlock(marketAddress)
  }
  return undefined
}

export const allocate = async (metricsAddress: string) => {
  const client = newClient()
  if (client) {
    return client.allocator(await client.registry(addresses.eth.main.registry).allocator()).allocate(metricsAddress)
  }
  return undefined
}

export const createProperty = async (name: string, symbol: string, author: string) => {
  const client = newClient()
  if (process.env.NODE_ENV == 'production' && client) {
    return client
      .propertyFactory(await client.registry(addresses.eth.main.registry).propertyFactory())
      .createProperty(name, symbol, author)
  } else if (process.env.NODE_ENV == 'development') {
    console.log('env:', process.env.NODE_ENV, 'return mock value')
    return 'Dummy:0xd5f3c1bA399E000B1a76210d7dB12bb5eefA8e47'
  }
  return undefined
}

export const marketScheme = async () => {
  const client = newClient()
  if (client) {
    return client.market(await client.registry(addresses.eth.main.registry).marketFactory()).schema()
  }
  return []
}

export const authenticate = async (address: string, args: string[]) => {
  const client = newClient()
  if (client) {
    return client.market(await client.registry(addresses.eth.main.registry).marketFactory()).authenticate(address, args)
  }
  return undefined
}

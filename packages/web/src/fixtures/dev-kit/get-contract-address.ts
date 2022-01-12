import { DevkitContract, RegistryContract } from '@devprotocol/dev-kit'
import { DevkitContract as L2DevkitContract } from '@devprotocol/dev-kit/l2'
import { addresses } from '@devprotocol/dev-kit'
import { ChainName } from '../wallet/utility'

const cache: Map<ChainName, Map<string, string>> = new Map()

export const getContractAddress = async <
  C extends DevkitContract | L2DevkitContract,
  K extends keyof Omit<RegistryContract, 'contract'>
>(
  client: C,
  contract: K,
  net: ChainName = 'ethereum'
): Promise<string> =>
  (async fromCache => {
    if (typeof fromCache === 'string') {
      return fromCache
    }
    if (!cache.get(net)) {
      cache.set(net, new Map())
    }
    const registryOrAddress =
      net === 'ethereum'
        ? await (client as DevkitContract).registry(addresses.eth.main.registry)[contract]()
        : net === 'ropsten'
        ? await (client as DevkitContract).registry(addresses.eth.ropsten.registry)[contract]()
        : net === 'arbitrum-one'
        ? addresses.arbitrum.one
        : net === 'arbitrum-rinkeby'
        ? addresses.arbitrum.rinkeby
        : net === 'polygon'
        ? addresses.polygon.mainnet
        : net === 'polygon-mumbai'
        ? addresses.polygon.mumbai
        : undefined
    const address =
      typeof registryOrAddress === 'string'
        ? registryOrAddress
        : registryOrAddress
        ? registryOrAddress[contract as keyof typeof addresses.arbitrum.one]
          ? registryOrAddress[contract as keyof typeof addresses.arbitrum.one]
          : await (client as L2DevkitContract)
              .registry(registryOrAddress.registry)
              .registries(`${contract.charAt(0).toUpperCase()}${contract.slice(1)}`)
        : (undefined as never)
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

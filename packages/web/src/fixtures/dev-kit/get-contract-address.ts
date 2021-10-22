import { DevkitContract, RegistryContract } from '@devprotocol/dev-kit'
import { DevkitContract as L2DevkitContract } from '@devprotocol/dev-kit/l2'
import { addresses } from '@devprotocol/dev-kit'
import { ChainName } from '../wallet/utility'

const cache: Map<ChainName, Map<string, string>> = new Map()

export const getContractAddress = async <C extends DevkitContract | L2DevkitContract>(
  client: C,
  contract: keyof Omit<RegistryContract, 'contract'>,
  net: ChainName = 'main'
): Promise<string> =>
  (async fromCache => {
    if (typeof fromCache === 'string') {
      return fromCache
    }
    if (!cache.get(net)) {
      cache.set(net, new Map())
    }
    const registry =
      net === 'main'
        ? addresses.eth.main.registry
        : net === 'ropsten'
        ? addresses.eth.ropsten.registry
        : net === 'arbitrum-one'
        ? addresses.arbitrum.one.registry
        : net === 'arbitrum-rinkeby'
        ? addresses.arbitrum.rinkeby.registry
        : undefined
    const address =
      registry && (net === 'main' || net === 'ropsten')
        ? await (client as DevkitContract).registry(registry)[contract]()
        : registry
        ? await (client as L2DevkitContract)
            .registry(registry)
            .registries(`${contract.charAt(0).toUpperCase()}${contract.slice(1)}`)
        : (undefined as never)
    console.log({ address, contract })
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

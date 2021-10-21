import { DevkitContract, RegistryContract } from '@devprotocol/dev-kit'
import { DevkitContract as L2DevkitContract, RegistryContract as L2RegistryContract } from '@devprotocol/dev-kit/l2'
import { addresses } from '@devprotocol/dev-kit'
import { ChainName } from '../wallet/utility'

const cache: Map<ChainName, Map<string, string>> = new Map()

export const getContractAddress = async <C extends DevkitContract | L2DevkitContract>(
  client: C,
  contract: C extends DevkitContract ? keyof Omit<RegistryContract, 'contract'> : keyof L2RegistryContract,
  net: ChainName = 'main'
): Promise<string> =>
  (async fromCache => {
    if (typeof fromCache === 'string') {
      return fromCache
    }
    if (!cache.get(net)) {
      cache.set(net, new Map())
    }
    const map = net === 'main' ? addresses.eth.main : net === 'ropsten' ? addresses.eth.ropsten : undefined
    const addressFromDevKit =
      net === 'arbitrum-one'
        ? addresses.arbitrum.one[contract as unknown as keyof typeof addresses.arbitrum.one]
        : net === 'arbitrum-rinkeby'
        ? addresses.arbitrum.rinkeby[contract as unknown as keyof typeof addresses.arbitrum.rinkeby]
        : undefined
    const address = map ? await client.registry(map.registry)[contract]() : addressFromDevKit!
    console.log({ address, contract })
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

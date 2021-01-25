import { DevkitContract } from '@devprotocol/dev-kit'
import { RegistryContract } from '@devprotocol/dev-kit'
import { addresses } from '@devprotocol/dev-kit'

const cache: Map<'main', Map<string, string>> = new Map()

export const getContractAddress = async (
  client: DevkitContract,
  contract: keyof Omit<RegistryContract, 'contract'>,
  net: 'main' = 'main'
): Promise<string> =>
  (async fromCache => {
    if (typeof fromCache === 'string') {
      return fromCache
    }
    if (!cache.get(net)) {
      cache.set(net, new Map())
    }
    const address = await client.registry(addresses.eth[net]?.registry)[contract]()
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

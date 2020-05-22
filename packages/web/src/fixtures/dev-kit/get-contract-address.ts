import { DevkitContract } from '@devprtcl/dev-kit-js/esm/client'
import { RegistryContract } from '@devprtcl/dev-kit-js/esm/registry'
import { addresses } from '@devprtcl/dev-kit-js'

const cache: Map<'main', Map<string, string>> = new Map()

export const getContractAddress = async (
  client: DevkitContract,
  contract: keyof RegistryContract,
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

import { DevkitContract } from '@devprtcl/dev-kit-js/esm/contract'
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
    const address = await client.registry('0xD6D07f1c048bDF2B3d5d9B6c25eD1FC5348D0A70')[contract]()
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

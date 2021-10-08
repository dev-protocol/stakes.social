import { DevkitContract } from '@devprotocol/dev-kit'
import { RegistryContract } from '@devprotocol/dev-kit'
import { addresses } from '@devprotocol/dev-kit'
import { ChainName } from '../wallet/utility'

const cache: Map<ChainName, Map<string, string>> = new Map()

export const getContractAddress = async (
  client: DevkitContract,
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
    const map =
      net === 'main'
        ? addresses.eth.main
        : net === 'ropsten'
        ? addresses.eth.ropsten
        : net === 'arbitrum-one-main'
        ? addresses.arbitrumOne.main
        : net === 'arbitrum-one-rinkeby'
        ? addresses.arbitrumOne.rinkeby
        : addresses.eth.main
    const address = await client.registry(map.registry)[contract]()
    cache.get(net)?.set(contract, address)
    return address
  })(cache.get(net)?.get(contract))

import { utils } from 'ethers'
import { ChainName } from './utility'

type Chains = Map<
  ChainName,
  {
    chainId: string
    rpcUrls?: string[]
    chainName?: string
    nativeCurrency?: {
      name: string
      symbol: string
      decimals: number
    }
    blockExplorerUrls?: string[]
  }
>
const chains: Chains = new Map([
  [
    'ethereum',
    {
      chainId: utils.hexValue(1)
    }
  ],
  [
    'ropsten',
    {
      chainId: utils.hexValue(3)
    }
  ],
  [
    'arbitrum-one',
    {
      chainId: utils.hexValue(42161),
      rpcUrls: ['https://arb1.arbitrum.io/rpc'],
      chainName: 'Arbitrum One',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://arbiscan.io/']
    }
  ],
  [
    'arbitrum-rinkeby',
    {
      chainId: utils.hexValue(421611),
      rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
      chainName: 'Arbitrum Rinkeby',
      nativeCurrency: {
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18
      },
      blockExplorerUrls: ['https://testnet.arbiscan.io/']
    }
  ]
])

export const switchChain = async (chainName: ChainName, ethersProvider?: any): Promise<boolean> => {
  const chain = chains.get(chainName)
  const requester = ethersProvider?.provider?.request
  console.log({ requester, chain, chainName })

  if (!requester || !chain) {
    return false
  }
  const res = await requester({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: chain.chainId }]
  }).catch((err: any) => err)

  if (res && res?.code === 4902) {
    const add = await requester({
      method: 'wallet_addEthereumChain',
      params: [chain]
    }).catch((err: any) => err)
    if (add) {
      return false
    }
  }

  return true
}

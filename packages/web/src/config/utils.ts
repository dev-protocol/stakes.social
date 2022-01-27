import { ChainName } from 'src/fixtures/wallet/utility'
import denylist from './denylist.json'

export const isDenyProperty = (network: ChainName, propertyAddress: string): boolean => {
  const d = getDenyList(network)
  return (d && d.includes(propertyAddress)) || false
}

export const getDenyList = (network: ChainName): Array<string> | undefined =>
  network === 'ethereum'
    ? denylist.ethereum
    : network === 'ropsten'
    ? denylist.ropsten
    : network === 'arbitrum-one'
    ? denylist['arbitrum-one']
    : network === 'arbitrum-rinkeby'
    ? denylist['arbitrum-rinkeby']
    : network === 'polygon'
    ? denylist.polygon
    : network === 'polygon-mumbai'
    ? denylist['polygon-mumbai']
    : undefined

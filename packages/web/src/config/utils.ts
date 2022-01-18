import { ChainName } from 'src/fixtures/wallet/utility'
import denylist from './denylist.json'

export const isDenyProperty = (network: ChainName, propertyAddress: string) => {
  const d = getDenyList(network)
  const isResult = d && d.includes(propertyAddress)
  return isResult === true
}

export const getDenyList = (network: ChainName) =>
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

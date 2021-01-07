import { ethers } from 'ethers'
import { WEB3_PROVIDER_ENDPOINT } from 'src/fixtures/wallet/constants'

export const useENS = () => {
  const provider = new ethers.providers.JsonRpcProvider(WEB3_PROVIDER_ENDPOINT)
  const getENS = async (address: string) => {
    return provider.lookupAddress(address).then(result => {
      return result
    })
  }

  return { getENS }
}

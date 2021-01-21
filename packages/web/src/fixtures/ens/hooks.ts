import { ethers } from 'ethers'
import { WEB3_PROVIDER_ENDPOINT } from 'src/fixtures/wallet/constants'

export const useENS = () => {
  const getENS = async (address: string) => {
    const provider = new ethers.providers.JsonRpcProvider(WEB3_PROVIDER_ENDPOINT)
    return provider.lookupAddress(address)
  }

  return { getENS }
}

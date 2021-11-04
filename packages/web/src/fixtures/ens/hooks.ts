import { useProvider } from '../wallet/hooks'

export const useENS = () => {
  // NOTE: ENS can only be used in mainnet
  const { nonConnectedEthersL1Provider } = useProvider()
  const getENS = async (address: string) => {
    return nonConnectedEthersL1Provider?.lookupAddress(address)
  }

  return { getENS }
}

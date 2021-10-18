import { useProvider } from '../wallet/hooks'

export const useENS = () => {
  const { nonConnectedEthersProvider } = useProvider()
  const getENS = async (address: string) => {
    return nonConnectedEthersProvider?.lookupAddress(address)
  }

  return { getENS }
}

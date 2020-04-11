import { cachePath } from './catch-path'
import { UnwrapFunc } from 'src/fixtures/utility'
import useSWR from 'swr'

const connectWallet = async () => {
  const { ethereum } = window
  if (ethereum) {
    return ethereum
      .enable()
      .then(() => true)
      .catch(() => false)
  }
  return false
}

export const useConnectWallet = () => {
  const { data, mutate } = useSWR<UnwrapFunc<typeof connectWallet>, Error>(cachePath.connectWallet())

  const connect = () => {
    connectWallet().then(result => mutate(result))
  }

  return { isConnected: data, connect }
}

import { cachePath } from './catch-path'
import { connectWallet, getBlockNumber } from './utility'
import { UnwrapFunc } from 'src/fixtures/utility'
import useSWR from 'swr'

export const useConnectWallet = () => {
  const { data, mutate } = useSWR<UnwrapFunc<typeof connectWallet>, Error>(cachePath.connectWallet())

  const connect = () => {
    connectWallet().then(result => mutate(result))
  }

  return { isConnected: data, connect }
}

export const useBlockNumberStream = () => {
  const { data, mutate } = useSWR<UnwrapFunc<typeof getBlockNumber>, Error>(cachePath.getBlockNumber(), {
    refreshInterval: 15000
  })

  const connectBlockNumberStream = (shouldFetch: boolean) => {
    if (shouldFetch) {
      getBlockNumber()?.then(result => mutate(result))
    }
  }

  return { blockNumber: data, connectBlockNumberStream }
}

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

export const useBlockNumberStream = (shouldFetch: boolean) => {
  const { data, error } = useSWR<UnwrapFunc<typeof getBlockNumber>, Error>(
    shouldFetch ? cachePath.getBlockNumber() : null,
    getBlockNumber,
    {
      refreshInterval: 15000
    }
  )
  return { blockNumber: data, error }
}

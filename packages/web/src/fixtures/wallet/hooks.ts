import { cachePath } from './catch-path'
import { connectWallet, getAccountAddress, getBlockNumber } from './utility'
import { UnwrapFunc } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useState } from 'react'

export const useConnectWallet = () => {
  const { data, mutate } = useSWR<UnwrapFunc<typeof connectWallet>, Error>(cachePath.connectWallet())
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = () => {
    setIsConnecting(true)
    connectWallet().then(result => {
      mutate(result)
      setIsConnecting(false)
    })
  }

  return { isConnected: data, connect, isConnecting: isConnecting }
}

export const useGetAccountAddress = () => {
  const { data, error } = useSWR<UnwrapFunc<typeof getAccountAddress>, Error>(
    cachePath.getAccountAddress(),
    getAccountAddress
  )
  return { accountAddress: data, error }
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

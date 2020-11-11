import { cachePath } from './catch-path'
import { connectWallet, getAccountAddress, getBlockNumber } from './utility'
import { UnwrapFunc } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import WalletContext from 'src/context/walletContext'

export const useConnectWallet = () => {
  const { web3Modal, setWeb3 } = useContext(WalletContext)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connect = async () => {
    setIsConnecting(true)
    setIsConnected(false)
    return connectWallet(setWeb3, web3Modal).then(result => {
      setIsConnecting(false)
      setIsConnected(result)
      return result
    })
  }

  return { isConnected, connect, isConnecting: isConnecting }
}

export const useProvider = () => {
  const { web3 } = useContext(WalletContext)
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  return { web3, accountAddress }
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

import Web3 from 'web3'
import { cachePath } from './catch-path'
import { connectWallet, disconnectWallet, getAccountAddress, getBlockNumber } from './utility'
import { UnwrapFunc } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT } from 'src/fixtures/wallet/constants'

const nonConnectedWeb3 = new Web3(WEB3_PROVIDER_ENDPOINT)

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

  const disconnect = () => {
    disconnectWallet(setWeb3, web3Modal)
    setIsConnecting(false)
    setIsConnected(false)
  }

  return { isConnected, connect, disconnect, isConnecting }
}

export const useProvider = () => {
  const { web3 } = useContext(WalletContext)
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  return { web3, nonConnectedWeb3, accountAddress }
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

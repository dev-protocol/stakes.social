import Web3 from 'web3'
import { cachePath } from './catch-path'
import { connectWallet, disconnectWallet, getAccountAddress, getBlockNumber } from './utility'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'
import { UndefinedOr } from '@devprotocol/util-ts'

const nonConnectedWeb3 = new Web3(WEB3_PROVIDER_ENDPOINT)
const nonConnectedEthersProvider = new providers.JsonRpcProvider(WEB3_PROVIDER_ENDPOINT)

export const useConnectWallet = () => {
  const { web3Modal, setProviders } = useContext(WalletContext)
  const [isConnecting, setIsConnecting] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  const connect = async () => {
    setIsConnecting(true)
    setIsConnected(false)
    return connectWallet(setProviders, web3Modal).then(result => {
      setIsConnecting(false)
      setIsConnected(result)
      return result
    })
  }

  const disconnect = () => {
    disconnectWallet(setProviders, web3Modal)
    setIsConnecting(false)
    setIsConnected(false)
  }

  return { isConnected, connect, disconnect, isConnecting }
}

export const useProvider = () => {
  const { web3, ethersProvider } = useContext(WalletContext)
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  return { web3, ethersProvider, nonConnectedWeb3, nonConnectedEthersProvider, accountAddress }
}

export const useDetectChain = (ethersProvider?: providers.BaseProvider) => {
  const [chainId, setChainId] = useState<undefined | number>(undefined)
  useEffect(() => {
    whenDefined(ethersProvider, prov => prov.getNetwork().then(r => setChainId(r.chainId)))
  }, [ethersProvider])
  const name: UndefinedOr<'main' | 'ropsten' | 'arbitrum-one-main' | 'arbitrum-one-rinkeby'> =
    chainId === 1
      ? 'main'
      : chainId === 3
      ? 'ropsten'
      : chainId === 42161
      ? 'arbitrum-one-main'
      : chainId === 421611
      ? 'arbitrum-one-rinkeby'
      : undefined

  return { chainId, name }
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

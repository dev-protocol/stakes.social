import Web3 from 'web3'
import { cachePath } from './catch-path'
import { connectWallet, disconnectWallet, getAccountAddress, getBlockNumber } from './utility'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT_KEY, WEB3_PROVIDER_ENDPOINT_HOSTS } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'
import { UndefinedOr } from '@devprotocol/util-ts'

type ChainNames = UndefinedOr<'main' | 'ropsten' | 'arbitrum-one-main' | 'arbitrum-one-rinkeby'>
const providerUrl = (chain: ChainNames = 'main') =>
  `${
    chain === 'main'
      ? WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN
      : chain === 'ropsten'
      ? WEB3_PROVIDER_ENDPOINT_HOSTS.ROPSTEN
      : chain === 'arbitrum-one-main'
      ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB1_MAIN
      : chain === 'arbitrum-one-rinkeby'
      ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB1_RINKEBY
      : WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN
  }/${WEB3_PROVIDER_ENDPOINT_KEY}`
const nonConnectedWeb3 = (chain: ChainNames) => new Web3(providerUrl(chain))
const nonConnectedEthersProvider = (chain: ChainNames) => new providers.JsonRpcProvider(providerUrl(chain))

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
  const { name } = useDetectChain(ethersProvider)
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  return {
    web3,
    ethersProvider,
    accountAddress,
    nonConnectedWeb3: nonConnectedWeb3(name),
    nonConnectedEthersProvider: nonConnectedEthersProvider(name)
  }
}

export const useDetectChain = (ethersProvider?: providers.BaseProvider) => {
  const [chainId, setChainId] = useState<undefined | number>(undefined)
  useEffect(() => {
    whenDefined(ethersProvider, prov => prov.getNetwork().then(r => setChainId(r.chainId)))
  }, [ethersProvider])
  const name: ChainNames =
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

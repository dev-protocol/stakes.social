import Web3 from 'web3'
import { ChainName, connectWallet, detectChain, disconnectWallet, getAccountAddress } from './utility'
import { useContext, useEffect, useMemo, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT_KEY, WEB3_PROVIDER_ENDPOINT_HOSTS } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'
import { whenDefined } from '@devprotocol/util-ts'
import { useNetworkInRouter } from '../utility'

const providerUrl = (chain: ChainName) =>
  chain
    ? `${
        chain === 'ethereum'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN
          : chain === 'ropsten'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ROPSTEN
          : chain === 'arbitrum-one'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB_ONE
          : chain === 'arbitrum-rinkeby'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB_RINKEBY
          : chain === 'polygon'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.POLYGON
          : chain === 'polygon-mumbai'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.POLYGON_MUMBAI
          : WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN
      }/${WEB3_PROVIDER_ENDPOINT_KEY}`
    : undefined
const nonConnectedWeb3 = (chain: ChainName) => whenDefined(providerUrl(chain), url => new Web3(url))
const nonConnectedEthersProvider = (chain: ChainName) =>
  whenDefined(providerUrl(chain), url => new providers.JsonRpcProvider(url))
const nonConnectedWeb3L1 = new Web3(providerUrl('ethereum')!)
const nonConnectedEthersL1Provider = new providers.JsonRpcProvider(providerUrl('ethereum'))

export const useConnectWallet = () => {
  const { web3Modal, setProviders } = useContext(WalletContext)
  const [isConnecting, setIsConnecting] = useState(false)
  const { ethersProvider } = useContext(WalletContext)

  const connect = async () => {
    setIsConnecting(true)
    return connectWallet(setProviders, web3Modal).then(result => {
      setIsConnecting(false)
      return result
    })
  }

  const disconnect = () => {
    disconnectWallet(setProviders, web3Modal)
    setIsConnecting(false)
  }

  return { isConnected: Boolean(ethersProvider), connect, disconnect, isConnecting }
}

const getNonConnected = (chain: ChainName) => ({
  ncWeb3: nonConnectedWeb3(chain),
  ncEthersProvider: nonConnectedEthersProvider(chain)
})

export const useProvider = () => {
  const [state, setState] = useState<{
    web3?: Web3
    ethersProvider?: providers.BaseProvider
    accountAddress?: string
    nonConnectedWeb3?: Web3
    nonConnectedEthersProvider?: providers.JsonRpcProvider
    nonConnectedWeb3L1: Web3
  }>()
  const { requestedChain } = useNetworkInRouter()
  const { web3, ethersProvider } = useContext(WalletContext)
  const { ncWeb3, ncEthersProvider } = useMemo(() => getNonConnected(requestedChain), [requestedChain])
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  useEffect(() => {
    if (!requestedChain) {
      // Should `requestedChain` be always defined
      return
    }
    if (!ncWeb3 || !ncEthersProvider) {
      // `ncWeb3` and `ncEthersProvider` are always defined
      return
    }
    if (web3 && !accountAddress) {
      // When `web3` is defined, `accountAddress` is always defined
      return
    }
    setState({
      web3,
      ethersProvider,
      accountAddress,
      nonConnectedEthersProvider: ncEthersProvider,
      nonConnectedWeb3: ncWeb3,
      nonConnectedWeb3L1
    })
  }, [requestedChain, web3, ethersProvider, ncWeb3, ncEthersProvider, accountAddress])
  return {
    ...state
  }
}

export const useDetectChain = (ethersProvider?: providers.BaseProvider) => {
  const [chain, setChain] = useState<undefined | { chainId?: number; name?: ChainName }>()
  useEffect(() => {
    detectChain(ethersProvider).then(setChain)
  }, [ethersProvider])
  return { chainId: chain?.chainId, name: chain?.name }
}

export const useIsL1 = () => {
  const { nonConnectedEthersProvider } = useProvider()
  const { name: chain } = useDetectChain(nonConnectedEthersProvider)
  const isL1 = useMemo(() => whenDefined(chain, c => c === 'ethereum'), [chain])
  return { isL1 }
}

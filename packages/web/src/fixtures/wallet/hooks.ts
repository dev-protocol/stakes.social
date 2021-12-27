import Web3 from 'web3'
import { ChainName, connectWallet, detectChain, disconnectWallet, getAccountAddress } from './utility'
import { useContext, useEffect, useMemo, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT_KEY, WEB3_PROVIDER_ENDPOINT_HOSTS } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'
import { whenDefined } from '@devprotocol/util-ts'
import { useRouter } from 'next/router'

const providerUrl = (chain: ChainName) =>
  chain
    ? `${
        chain === 'main'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN
          : chain === 'ropsten'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ROPSTEN
          : chain === 'arbitrum-one'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB_ONE
          : chain === 'arbitrum-rinkeby'
          ? WEB3_PROVIDER_ENDPOINT_HOSTS.ARB_RINKEBY
          : undefined
      }/${WEB3_PROVIDER_ENDPOINT_KEY}`
    : undefined
const nonConnectedWeb3 = (chain: ChainName) => whenDefined(providerUrl(chain), url => new Web3(url))
const nonConnectedEthersProvider = (chain: ChainName) =>
  whenDefined(providerUrl(chain), url => new providers.JsonRpcProvider(url))
const nonConnectedWeb3L1 = new Web3(providerUrl('main')!)
const nonConnectedEthersL1Provider = new providers.JsonRpcProvider(providerUrl('main'))

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
  const router = useRouter()
  const nameFromQuery = router?.query?.network as ChainName
  const { web3, ethersProvider } = useContext(WalletContext)
  const { name } = useDetectChain(ethersProvider)
  const ncWeb3 = useMemo(() => nonConnectedWeb3(name ?? nameFromQuery ?? 'main'), [name, nameFromQuery])
  const ncEthersProvider = useMemo(
    () => nonConnectedEthersProvider(name ?? nameFromQuery ?? 'main'),
    [name, nameFromQuery]
  )
  const [accountAddress, setAccountAddress] = useState<undefined | string>(undefined)
  useEffect(() => {
    getAccountAddress(web3).then(x => setAccountAddress(x))
  }, [web3])
  return {
    web3,
    ethersProvider,
    accountAddress,
    nonConnectedWeb3: ncWeb3,
    nonConnectedEthersProvider: ncEthersProvider,
    nonConnectedWeb3L1,
    nonConnectedEthersL1Provider
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
  const { ethersProvider } = useProvider()
  const { name: chain } = useDetectChain(ethersProvider)
  const isL1 = useMemo(() => chain === 'main', [chain])
  return { isL1 }
}

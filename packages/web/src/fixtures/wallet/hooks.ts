import Web3 from 'web3'
import { ChainName, connectWallet, detectChain, disconnectWallet, getAccountAddress } from './utility'
import { useContext, useEffect, useMemo, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT_KEY, WEB3_PROVIDER_ENDPOINT_HOSTS } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'
import { whenDefined } from '@devprotocol/util-ts'
import useSWR from 'swr'

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
    nonConnectedWeb3: web3 ? web3 : nonConnectedWeb3(name),
    nonConnectedEthersProvider: ethersProvider ? ethersProvider : nonConnectedEthersProvider(name)
  }
}

export const useDetectChain = (ethersProvider?: providers.BaseProvider) => {
  const { data } = useSWR(`useDetectChain/${ethersProvider?.network?.chainId}`, () =>
    whenDefined(ethersProvider, prov => detectChain(prov))
  )
  return { chainId: data?.chainId, name: data?.name }
}

export const useIsL1 = () => {
  const { ethersProvider } = useProvider()
  const { name: chain } = useDetectChain(ethersProvider)
  const isL1 = useMemo(() => chain === 'main', [chain])
  return { isL1 }
}

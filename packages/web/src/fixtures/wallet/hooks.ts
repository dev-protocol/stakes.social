import Web3 from 'web3'
import { ChainName, connectWallet, detectChain, disconnectWallet, getAccountAddress } from './utility'
import { UnwrapFunc, whenDefined } from 'src/fixtures/utility'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import WalletContext from 'src/context/walletContext'
import { WEB3_PROVIDER_ENDPOINT_KEY, WEB3_PROVIDER_ENDPOINT_HOSTS } from 'src/fixtures/wallet/constants'
import { providers } from 'ethers'

const providerUrl = (chain: ChainName = 'main') =>
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
const nonConnectedWeb3 = (chain: ChainName) => new Web3(providerUrl(chain))
const nonConnectedEthersProvider = (chain: ChainName) => new providers.JsonRpcProvider(providerUrl(chain))

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
  const { data } = useSWR<undefined | UnwrapFunc<typeof detectChain>, Error>('detectChain', () =>
    whenDefined(ethersProvider, prov => detectChain(prov))
  )
  return { chainId: data?.chainId, name: data?.name }
}

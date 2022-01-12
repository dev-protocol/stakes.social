import * as React from 'react'
import App, { AppInitialProps } from 'next/app'
import { WithApolloProps } from 'next-with-apollo'
import Head from 'next/head'
import SettingContext from 'src/context/settingContext'
import WalletContext from 'src/context/walletContext'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import detectEthereumProvider from '@metamask/detect-provider'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Fortmatic from 'fortmatic'
import WalletLink from 'walletlink'
import { message } from 'antd'
import { WEB3_PROVIDER_ENDPOINT_HOSTS, WEB3_PROVIDER_ENDPOINT_KEY } from 'src/fixtures/wallet/constants'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import * as gtag from 'src/lib/gtag'
import { Router } from 'next/router'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { providers } from 'ethers'

const cache = new InMemoryCache()
const client = new ApolloClient({
  uri: 'https://api.devprotocol.xyz/v1/graphql',
  cache
})

class NextApp extends App<AppInitialProps & WithApolloProps<{}>> {
  state = { isCurrencyDEV: true, web3: undefined, ethersProvider: undefined, web3Modal: undefined }

  getProviderOptions = () => {
    const walletLink = new WalletLink({
      appName: 'name',
      appLogoUrl:
        'https://github.com/dev-protocol/asset.stakes.social/blob/main/public/wallet/coinbase-wallet.jpg?raw=true',
      darkMode: false
    })
    const INFURA_ID = '75ebe953349644b6998136d868f5cd97'
    const { FORTMATIC_KEY } = process.env
    const walletLinkProvider = walletLink.makeWeb3Provider(
      `${WEB3_PROVIDER_ENDPOINT_HOSTS.MAIN}/${WEB3_PROVIDER_ENDPOINT_KEY}`,
      1
    )
    const web3ForInjected = detectEthereumProvider()

    return {
      injected: {
        package: web3ForInjected
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: INFURA_ID
        }
      },
      fortmatic: {
        package: Fortmatic,
        options: {
          key: FORTMATIC_KEY
        }
      },
      'custom-walletlink': {
        display: {
          logo: 'https://github.com/dev-protocol/asset.stakes.social/blob/main/public/wallet/walletlink.jpg?raw=true',
          name: 'WalletLink',
          description: 'Scan with WalletLink to connect'
        },
        package: walletLinkProvider,
        connector: async (provider: any) => {
          await provider.enable()

          return provider
        }
      }
    }
  }

  web3Modal: any

  onWalletConnect = async () => {
    const web3ForInjected: any = await detectEthereumProvider()
    if (!web3ForInjected) {
      // NOTE: If the localStorage cache and metamask extension do not exist,
      //       processing conflicts and will not be able to login, so clear the cache here.
      this.web3Modal.clearCachedProvider()
      return
    }
    const isAuthorized = await getAccountAddress(new Web3(web3ForInjected))
    if (!isAuthorized) {
      return
    }
    const provider = await this.web3Modal.connect().catch(() => {
      return undefined
    })
    if (provider === undefined) {
      return undefined
    }

    const updater = this.createProviderUpdater(provider)
    const provs = updater()
    provider.on('accountsChanged', updater)
    provider.on('chainChanged', updater)
    return [provs.web3, provs.ethersProvider]
  }

  componentDidMount = () => {
    message.config({
      maxCount: 5
    })

    this.web3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: this.getProviderOptions()
    })
    this.setState({ web3Modal: this.web3Modal })

    if (this.web3Modal.cachedProvider === 'injected') {
      this.onWalletConnect()
    }

    const settings = localStorage.getItem('settings')
    if (settings) {
      const { currency } = JSON.parse(settings)
      this.setState({ isCurrencyDEV: currency === 'DEV' })
    }

    // Google Analytics
    Router.events.on('routeChangeComplete', url => gtag.pageview(url))
  }

  createProviderUpdater(provider: any) {
    return () => {
      const web3: any = new Web3(provider)
      const ethersProvider = new providers.Web3Provider(provider)
      this.setProviders(web3, ethersProvider)
      return { web3, ethersProvider }
    }
  }

  setProviders = (web3: Web3, ethersProvider: providers.BaseProvider) => {
    this.setState({ web3, ethersProvider })
  }

  toggleCurrency = () => {
    localStorage.setItem('settings', JSON.stringify({ currency: !this.state.isCurrencyDEV ? 'DEV' : 'USD' }))
    this.setState({ isCurrencyDEV: !this.state.isCurrencyDEV })
  }

  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <ApolloProvider client={client}>
        <WalletContext.Provider
          value={{
            web3: this.state.web3,
            ethersProvider: this.state.ethersProvider,
            setProviders: this.setProviders,
            web3Modal: this.state.web3Modal
          }}
        >
          <SettingContext.Provider
            value={{ isCurrencyDEV: this.state.isCurrencyDEV, toggleCurrency: this.toggleCurrency }}
          >
            <Head>
              <title>Stakes.social</title>
              {/* Use minimum-scale=1 to enable GPU rasterization */}
              <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
            </Head>
            <Component {...pageProps} apollo={apollo} />
          </SettingContext.Provider>
        </WalletContext.Provider>
      </ApolloProvider>
    )
  }
}

export default NextApp

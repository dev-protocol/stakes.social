import * as React from 'react'
import { Modal } from 'antd'
import App, { AppInitialProps } from 'next/app'
import { WithApolloProps } from 'next-with-apollo'
import Head from 'next/head'
import withApollo from 'src/fixtures/withApollo'
import { List } from 'antd'
import styled from 'styled-components'
import { HelpUs } from 'src/components/atoms/HelpUs'
import SettingContext from 'src/context/settingContext'
import WalletContext from 'src/context/walletContext'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import detectEthereumProvider from '@metamask/detect-provider'
import WalletConnectProvider from '@walletconnect/web3-provider'
import Fortmatic from 'fortmatic'
import WalletLink from 'walletlink'

const Wallet = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-template-columns: 0.5fr 1fr;
    align-items: center;
  }
`
const wallet = (name: string, url: string, desc: string) => (
  <Wallet>
    <a href={url} target="_blank" rel="noreferrer">
      <strong>{name}</strong>
    </a>
    <span>{desc}</span>
  </Wallet>
)

class NextApp extends App<AppInitialProps & WithApolloProps<{}>> {
  state = { isCurrencyDEV: true, web3: undefined, web3Modal: undefined }

  getProviderOptions = () => {
    const walletLink = new WalletLink({
      appName: 'name',
      appLogoUrl: 'logo',
      darkMode: false
    })
    const { WEB3_PROVIDER_ENDPOINT } = process.env
    const { INFURA_ID } = process.env
    const { FORTMATIC_KEY } = process.env
    const walletLinkProvider = walletLink.makeWeb3Provider(WEB3_PROVIDER_ENDPOINT || '', 1)
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
          logo: `logo`,
          name: 'Wallet Link',
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

  onWalletConnet = async () => {
    const provider = await this.web3Modal.connect().catch(() => {
      return undefined
    })
    if (provider === undefined) {
      return undefined
    }

    const web3: any = new Web3(provider)
    this.setState({ web3 })
    return web3
  }

  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    super.componentDidCatch(error, errorInfo)
  }

  componentDidMount = () => {
    const { ethereum } = window
    this.web3Modal = new Web3Modal({
      network: 'mainnet',
      cacheProvider: true,
      providerOptions: this.getProviderOptions()
    })
    this.setState({ web3Modal: this.web3Modal })

    if (this.web3Modal.cachedProvider) {
      this.onWalletConnet()
    }

    if (!ethereum) {
      const { WEB3_PROVIDER_ENDPOINT } = process.env
      if (WEB3_PROVIDER_ENDPOINT) {
        return
      }

      Modal.error({
        title: 'Ethereum wallet not found',
        content: (
          <>
            <p>Using Stake.social requires an Ethereum wallet.</p>
            <p>Please use a wallet that looks like the following:</p>
            <List
              bordered
              style={{ marginBottom: '1rem' }}
              dataSource={[
                wallet('MetaMask', 'https://metamask.io', 'Browser extension and mobile wallet for iOS and Android'),
                wallet('Trust Wallet', 'https://trustwallet.com', 'Mobile wallet for iOS and Android'),
                wallet('Opera', 'https://www.opera.com', 'Web browser for desktop and mobile with a built-in wallet')
              ]}
              renderItem={item => <List.Item>{item}</List.Item>}
            ></List>
            <p>
              Or you can also get to know more choices at{' '}
              <a href="https://ethereum.org/wallets/" target="_blank" rel="noreferrer">
                Ethereum.org
              </a>
              .
            </p>
          </>
        )
      })
    }

    const settings = localStorage.getItem('settings')
    if (settings) {
      const { currency } = JSON.parse(settings)
      this.setState({ isCurrencyDEV: currency === 'DEV' })
    }
  }

  setWeb3 = (web3: Web3) => {
    this.setState({ web3 })
  }

  toggleCurrency = () => {
    localStorage.setItem('settings', JSON.stringify({ currency: !this.state.isCurrencyDEV ? 'DEV' : 'USD' }))
    this.setState({ isCurrencyDEV: !this.state.isCurrencyDEV })
  }

  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <WalletContext.Provider value={{ web3: this.state.web3, setWeb3: this.setWeb3, web3Modal: this.state.web3Modal }}>
        <SettingContext.Provider
          value={{ isCurrencyDEV: this.state.isCurrencyDEV, toggleCurrency: this.toggleCurrency }}
        >
          <Head>
            <title>Stakes.social</title>
            {/* Use minimum-scale=1 to enable GPU rasterization */}
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
          </Head>
          <Component {...pageProps} apollo={apollo} />
          <HelpUs></HelpUs>
        </SettingContext.Provider>
      </WalletContext.Provider>
    )
  }
}

export default withApollo(NextApp)

import * as React from 'react'
import { Modal } from 'antd'
import App, { AppInitialProps } from 'next/app'
import { WithApolloProps } from 'next-with-apollo'
import Head from 'next/head'
import withApollo from 'src/fixtures/withApollo'
import { List } from 'antd'
import styled from 'styled-components'
import { HelpUs } from 'src/components/atoms/HelpUs'
import { appWithTranslation } from '@dev/i18n'

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
  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    super.componentDidCatch(error, errorInfo)
  }

  componentDidMount = () => {
    const { ethereum } = window
    if (!ethereum) {
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
  }

  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <>
        <Head>
          <title>Stakes.social</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Component {...pageProps} apollo={apollo} />
        <HelpUs></HelpUs>
      </>
    )
  }
}

export default appWithTranslation(withApollo(NextApp))

import * as React from 'react'
import App, { AppInitialProps } from 'next/app'
import { WithApolloProps } from 'next-with-apollo'
import Head from 'next/head'
import withApollo from 'src/fixtures/withApollo'

class NextApp extends App<AppInitialProps & WithApolloProps<{}>> {
  componentDidCatch = (error: Error, errorInfo: React.ErrorInfo) => {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps, apollo } = this.props

    return (
      <>
        <Head>
          <title>boiler</title>
        </Head>
        <Component {...pageProps} apollo={apollo} />
      </>
    )
  }
}

export default withApollo(NextApp)

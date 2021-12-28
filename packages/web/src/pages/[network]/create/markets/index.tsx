import React from 'react'
import { MarketsOverview } from 'src/components/organisms/MarketOverview'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { ControlChain } from 'src/components/organisms/ControlChain'

type Props = {}

// TODO: Navigate a user to this component when invitation request is accepeted
const Markets = (_: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2>Create an Asset</H2>
        <span>Tokenize your open assets in minutes.</span>
      </Headline>
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto', flexGrow: 1 }}>
        <MarketsOverview />
      </div>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default Markets

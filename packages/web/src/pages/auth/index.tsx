import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { MarketsOverview } from 'src/components/organisms/MarketOverview'

type Props = {}

const CreateOrAssociateAProperty = (_: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2>Create an Asset</H2>
        <span style={{ fontSize: '0.9em' }}>Tokenize your open assets in minutes.</span>
      </Headline>
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto', flexGrow: 1 }}>
        <MarketsOverview />
      </div>
      <Footer />
    </div>
  )
}

export default CreateOrAssociateAProperty

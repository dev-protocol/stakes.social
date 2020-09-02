import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { PropertySelectForm } from 'src/components/organisms/PropertySelectForm'
import { MarketOverview } from 'src/components/organisms/MarketOverview'

type Props = {}

const CreateOrAssociateAProperty = (_: Props) => {
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Create or Associate a Property</H2>
      </Headline>
      <div style={{ padding: '1rem' }}>
        <h3>Select one asset market to authenticate.</h3>
        <MarketOverview routePrefix="/auth" />
      </div>
      <div style={{ padding: '1rem' }}>
        <h3>Or associate with an existing Property</h3>
        <PropertySelectForm />
      </div>
      <Footer />
    </>
  )
}

export default CreateOrAssociateAProperty

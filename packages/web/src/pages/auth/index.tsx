import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { PropertySelectForm } from 'src/components/organisms/PropertySelectForm'
import { MarketOverview } from 'src/components/organisms/MarketOverview'
import styled from 'styled-components'

type Props = {}

const SubTitle = styled.h3`
  text-align: center;
`

const CreateOrAssociateAProperty = (_: Props) => {
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Create or Associate a Property</H2>
      </Headline>
      <div style={{ padding: '1rem' }}>
        <SubTitle>Select one asset market to authenticate.</SubTitle>
        <MarketOverview />
      </div>
      <div style={{ padding: '1rem' }}>
        <SubTitle>Or associate with an existing Property</SubTitle>
        <PropertySelectForm />
      </div>
      <Footer />
    </>
  )
}

export default CreateOrAssociateAProperty

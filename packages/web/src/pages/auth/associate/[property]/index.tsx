import React from 'react'
import { MarketOverview } from 'src/components/organisms/MarketOverview'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { useRouter } from 'next/router'

type Props = {}

const Auth = (_: Props) => {
  const { property } = useRouter().query as { property: string }
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Choose Market</H2>
        <div>Select one asset market to authenticate.</div>
      </Headline>
      <MarketOverview associate={true} propertyAddress={property} />
      <Footer />
    </>
  )
}

export default Auth

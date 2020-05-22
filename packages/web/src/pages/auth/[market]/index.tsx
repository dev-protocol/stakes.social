import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { PropertySelectForm } from 'src/components/organisms/PropertySelectForm'
import { useRouter } from 'next/router'

type Props = {}

const AuthenticateNewAsset = (_: Props) => {
  const { market } = useRouter().query as { market: string }
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Authenticate a new asset</H2>
      </Headline>
      <div style={{ marginBottom: '78px' }}>
        <PropertySelectForm market={market} />
      </div>
      <Footer />
    </>
  )
}

export default AuthenticateNewAsset

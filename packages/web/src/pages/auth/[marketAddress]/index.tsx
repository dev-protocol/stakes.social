import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { AuthenticateForm } from 'src/components/organisms/AuthenticateForm'

type Props = {}

const AuthenticateNewAsset = (_: Props) => {
  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Authenticate a new asset</H2>
      </Headline>
      <div style={{ marginBottom: '78px' }}>
        <AuthenticateForm />
      </div>
      <Footer />
    </>
  )
}

export default AuthenticateNewAsset

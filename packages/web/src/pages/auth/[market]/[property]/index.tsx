import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from 'src/components/organisms/AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'

type Props = {}

const AuthenticateNewAsset = (_: Props) => {
  const { property } = useRouter().query as { property: string }

  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Authenticate a new asset</H2>
      </Headline>
      <AuthForm property={property} />
      <Footer />
    </>
  )
}

export default AuthenticateNewAsset

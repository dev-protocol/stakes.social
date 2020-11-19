import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from 'src/components/organisms/AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'

type Props = {}

const Container = styled.div`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  word-break: break-all;
  flex-grow: 1;
`

const AuthenticateNewAsset = (_: Props) => {
  const { market, property } = useRouter().query as { market: string; property: string }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline height={300}>
        <H2>Authenticate a new asset</H2>
        <span>Confidentially verify your ownership with our Khaos oracle</span>
      </Headline>
      <Container>
        <AuthForm market={market} property={property} />
      </Container>
      <Footer />
    </div>
  )
}

export default AuthenticateNewAsset

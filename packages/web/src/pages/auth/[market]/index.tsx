import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from './AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2em;
`

const AuthenticateNewAsset = (_: Props) => {
  const { market } = useRouter().query as { market: string }

  return (
    <>
      <Header />
      <EarlyAccess />
      <Headline height={300}>
        <H2>Create an Asset</H2>
        <span style={{ fontSize: '0.9em' }}>Create an asset or authenticate an existing pool.</span>
      </Headline>
      <Container>
        <AuthForm market={market} />
      </Container>
      <Footer />
    </>
  )
}

export default AuthenticateNewAsset

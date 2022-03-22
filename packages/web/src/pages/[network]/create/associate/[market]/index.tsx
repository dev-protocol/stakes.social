import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from 'src/components/organisms/AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { ControlChain } from 'src/components/organisms/ControlChain'

type Props = {}

const Container = styled.div`
  max-width: 760px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  word-break: break-all;
  flex-grow: 1;
`

const ResponsiveContainer = styled(Container)`
  display: flex;
  flex-grow: 1;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem;
  word-break: break-all;
  flex-grow: 1;
  @media (min-width: 1024px) {
    width: 760px;
  }
`

const AuthenticateNewAsset = (_: Props) => {
  const { market } = useRouter().query

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline height={300}>
        <H2>Authenticate a new asset</H2>
        <span>Confidentially verify your ownership with our Khaos oracle</span>
      </Headline>
      <ResponsiveContainer>
        <AuthForm market={String(market)} />
      </ResponsiveContainer>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default AuthenticateNewAsset

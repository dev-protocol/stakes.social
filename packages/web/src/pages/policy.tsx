import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import { PoliciesList } from 'src/components/organisms/PoliciyList'
import { Header } from 'src/components/organisms/Header'
import { Container } from 'src/components/atoms/Container'

type InitialProps = {}
type Props = {} & InitialProps

const Policy = (_: Props) => {
  return (
    <>
      <EarlyAccess />
      <Header />
      <Headline height={300}>
        <H2>Policy Proposals</H2>
        <div>Vote on policy proposals to improve the protocol.</div>
      </Headline>
      <Container>
        <PoliciesList />
      </Container>
      <Footer />
    </>
  )
}

export default Policy

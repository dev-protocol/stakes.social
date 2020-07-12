import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import { PoliciesList } from 'src/components/organisms/PoliciyList'
import { Header } from 'src/components/organisms/Header'

type InitialProps = {}
type Props = {} & InitialProps

const Policy = (_: Props) => {
  return (
    <>
      <EarlyAccess />
      <Header />
      <Headline height={300}>
        <H2>Policy Proposals</H2>
        <div>Select one asset market to authenticate.</div>
      </Headline>
      <div style={{ padding: '1rem', maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <PoliciesList />
      </div>
      <Footer />
    </>
  )
}

export default Policy

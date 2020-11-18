import React from 'react'
import { Footer } from 'src/components/organisms/Footer'

import { Header } from 'src/components/organisms/Header'
import { DevStats } from 'src/components/organisms/DevStats'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import { BuyDevButton } from 'src/components/molecules/BuyButton'

type Props = {}

const DevProtocolStats = (_: Props) => {
  return (
    <>
      <Header />
      <div style={{ padding: '1rem', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Headline height={200}>
          <H2>Dev Protocol Stats</H2>
          <p>Dev Protocol is being adopted, see for yourself.</p>
          <BuyDevButton />
        </Headline>
        <DevStats />
      </div>
      <Footer />
    </>
  )
}

export default DevProtocolStats

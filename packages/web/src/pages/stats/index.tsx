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
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2 color="#4f4f4f">Dev Protocol Stats</H2>
        <span style={{ marginBottom: '10px' }}>Dev Protocol is being adopted, see for yourself.</span>
        <BuyDevButton />
      </Headline>
      <div style={{ padding: '1rem', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto' }}>
        <DevStats />
      </div>
      <Footer />
    </div>
  )
}

export default DevProtocolStats

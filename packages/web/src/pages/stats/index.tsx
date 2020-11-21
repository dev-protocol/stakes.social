import React from 'react'
import { Divider } from 'antd'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { DevStats } from 'src/components/organisms/DevStats'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { DevChart } from 'src/components/organisms/DevChart'
import styled from 'styled-components'

type Props = {}

const Wrap = styled.div`
  display: grid;
  padding: 1rem;
  gap: 1rem;
  max-width: 1200px;
  margin: auto;
`

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
      </Wrap>
      <Divider type="horizontal" />
      <Wrap>
        <DevChart />
      </Wrap>
      <Footer />
    </div>
  )
}

export default DevProtocolStats

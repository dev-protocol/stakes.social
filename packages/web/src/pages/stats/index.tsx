import React from 'react'
import { Divider } from 'antd'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
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
    <>
      <Header />
      <EarlyAccess />
      <Wrap>
        <Headline height={200}>
          <H2>Dev Protocol Stats</H2>
          <p>Dev Protocol is being adopted, see for yourself.</p>
          <BuyDevButton />
        </Headline>
        <DevStats />
      </Wrap>
      <Divider type="horizontal" />
      <Wrap>
        <DevChart />
      </Wrap>
      <Footer />
    </>
  )
}

export default DevProtocolStats

import React from 'react'
import { Divider } from 'antd'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { DevStats } from 'src/components/organisms/DevStats'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { DevChart } from 'src/components/organisms/DevChart'
import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

type Props = {}

const StyledHeadline = styled(Headline)`
  margin-bottom: 1rem;
`

const DevProtocolStats = (_: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <StyledHeadline>
        <H2 color="#4f4f4f">Dev Protocol Stats</H2>
        <span style={{ marginBottom: '10px' }}>Dev Protocol is being adopted, see for yourself.</span>
        <BuyDevButton />
      </StyledHeadline>
      <Container>
        <DevStats />
        <Divider type="horizontal" />
      </Container>
      <Container>
        <DevChart />
      </Container>
      <Footer />
    </div>
  )
}

export default DevProtocolStats

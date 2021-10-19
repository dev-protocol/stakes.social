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
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import Text from 'antd/lib/typography/Text'

type Props = {}

const StyledHeadline = styled(Headline)`
  margin-bottom: 1rem;
`

const DevProtocolStats = (_: Props) => {
  const { ethersProvider } = useProvider()
  const { name: chain } = useDetectChain(ethersProvider)
  const isL1 = chain === 'main'

  return isL1 ? (
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
  ) : (
    <div style={{ display: 'flex', minHeight: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Text type="secondary">(Not provide this feature yet on L2)</Text>
    </div>
  )
}

export default DevProtocolStats

import React, { useState } from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'

import { Container } from 'src/components/atoms/Container'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { Nav } from '../../components/_pages/liquidity/Nav'
import styled from 'styled-components'
import { Deposit } from '../../components/_pages/liquidity/Deposit'
import { Withdraw } from '../../components/_pages/liquidity/Withdraw'
import { Stats } from 'src/components/_pages/liquidity/Stats'
import { Informations } from 'src/components/_pages/liquidity/Informations'
import { VersionSwitching } from '../../components/_pages/liquidity/VersionSwitching'
import {
  GEYSER_V1_ETHDEV_V2_ADDRESS,
  GEYSER_V2_ETHDEV_V2_ADDRESS
} from '../../fixtures/_pages/liquidity/constants/address'
import { useRouter } from 'next/router'
// import Error from 'next/error'
import { getPath } from 'src/fixtures/utility/route'

const NarrowContainer = styled(Container)`
  max-width: 640px;
`

const Margin = styled.div`
  margin: 2rem 0;
`

const getGeyserAddress = (version: string) => {
  switch (version) {
    case 'v1':
      return GEYSER_V1_ETHDEV_V2_ADDRESS
    case 'v2':
      return GEYSER_V2_ETHDEV_V2_ADDRESS
    default:
      return GEYSER_V2_ETHDEV_V2_ADDRESS
  }
}

const LiquidityMining = () => {
  const [, setTab] = useState('0')
  const [, version] = getPath(useRouter().asPath)

  const geyserAddress = getGeyserAddress(version)

  const contents = [
    { name: 'Deposit', node: <Deposit geyserAddress={geyserAddress} /> },
    { name: 'Withdraw', node: <Withdraw geyserAddress={geyserAddress} /> },
    { name: 'Stats', node: <Stats geyserAddress={geyserAddress} /> }
  ]

  return (
    <>
      <Header></Header>
      <Container>
        <Headline height={150}>
          <H2>Liquidity Program</H2>
        </Headline>
      </Container>
      <NarrowContainer>
        <VersionSwitching />
        <Margin>
          <Informations geyserAddress={geyserAddress} />
        </Margin>
        <Nav contents={contents} onChange={setTab}></Nav>
      </NarrowContainer>
      <Footer />
    </>
  )
}

export default LiquidityMining

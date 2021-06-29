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
      throw new Error('Detected an unexpected value')
  }
}

const LiquidityMining = ({ version }: { version: string }) => {
  const [, setTab] = useState('0')
  const geyserAddress = getGeyserAddress(version)
  const contents = [
    { name: 'Deposit', node: Deposit(geyserAddress) },
    { name: 'Withdraw', node: Withdraw(geyserAddress) },
    { name: 'Stats', node: Stats(geyserAddress) }
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

type Params = {
  version: string
}

const isCorrectPath = (version: string): boolean => {
  const regex = new RegExp('v[12]')
  return regex.test(version)
}

export async function getServerSideProps({ params }: { params: Params }) {
  const { version } = params

  if (!isCorrectPath(version)) {
    return { notFound: true }
  }

  return { props: { version } }
}

export default LiquidityMining

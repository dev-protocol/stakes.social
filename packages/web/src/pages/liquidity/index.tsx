import React, { useState } from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Container } from 'src/components/atoms/Container'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { Nav } from './components/Nav'
import styled from 'styled-components'
import { Deposit } from './components/Deposit'
import { Withdraw } from './components/Withdraw'

const NarrowContainer = styled(Container)`
  max-width: 640px;
`

const LiquidityMining = () => {
  const [, setTab] = useState('0')
  const contents = [
    { name: 'Deposit', node: Deposit() },
    { name: 'Withdraw', node: Withdraw() }
  ]

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <Header></Header>
      <NarrowContainer>
        <Headline height={300}>
          <H2>Liquidity Mining</H2>
        </Headline>
        <Nav contents={contents} onChange={setTab}></Nav>
      </NarrowContainer>
      <Footer />
    </>
  )
}

export default LiquidityMining

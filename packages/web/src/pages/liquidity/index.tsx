import React, { useState } from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Container } from 'src/components/atoms/Container'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import { Nav } from '../../components/_pages/liquidity/Nav'
import styled from 'styled-components'
import { Deposit } from '../../components/_pages/liquidity/Deposit'
import { Withdraw } from '../../components/_pages/liquidity/Withdraw'
import { Statistics } from '../../components/_pages/liquidity/Statistics'

const NarrowContainer = styled(Container)`
  margin-top: 3rem;
  max-width: 640px;
  @media (min-width: 768px) {
    margin-top: 6rem;
  }
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
      <Container>
        <Headline height={300}>
          <H2>Liquidity Mining</H2>
        </Headline>
        <Statistics></Statistics>
      </Container>
      <NarrowContainer>
        <Nav contents={contents} onChange={setTab}></Nav>
      </NarrowContainer>
      <Footer />
    </>
  )
}

export default LiquidityMining

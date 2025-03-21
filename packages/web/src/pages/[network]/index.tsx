import React from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { Container } from 'src/components/atoms/Container'
import { H2 } from 'src/components/atoms/Typography'
import { YourStakes } from 'src/components/_pages/portfolio/YourStakes'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { YourPools } from 'src/components/_pages/portfolio/YourPools'
import { WalletSettings } from 'src/components/organisms/WalletSettings'
import { YourPositions } from 'src/components/_pages/portfolio/YourPositions'
import { ControlChain } from 'src/components/organisms/ControlChain'
import { FeatureBanner } from 'src/components/_pages/home/FeatureBanner'

const PortfolioHeader = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'heading heading'
    'switcher creator'
    'buy edit';
  grid-template-rows: auto;
  justify-content: stretch;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-top: 10px;

  @media (min-width: 768px) {
    grid-template-areas: 'heading switcher buy creator edit';
    grid-template-columns: 1fr auto auto auto auto;
    grid-gap: 2rem;
  }
`

const Heading = styled(H2)`
  grid-area: heading;
`

const StyledContainer = styled(Container)`
  display: flex;
  width: 100%;
  gap: 3rem;
  padding: 2rem 1rem;
  flex-flow: column;
  flex-grow: 1;
`

const Portfolio = () => {
  const { ethersProvider, accountAddress } = useProvider()
  const { name: chain } = useDetectChain(ethersProvider)
  const isL1 = chain === 'ethereum'

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <StyledContainer>
        <FeatureBanner className="my-8" />
        <PortfolioHeader>
          <Heading>Your Portfolio</Heading>
        </PortfolioHeader>
        <Heading>Your sTokens positions</Heading>
        <YourPositions accountAddress={accountAddress} />
        {isL1 && (
          <>
            <Heading>Your Stakes</Heading>
            <YourStakes accountAddress={accountAddress} />
            <Divider type="horizontal" />
          </>
        )}
        <Heading>Your Pools</Heading>
        <YourPools accountAddress={accountAddress} />
        <Divider type="horizontal" />
        <Heading>Wallet Settings</Heading>
        <WalletSettings />
      </StyledContainer>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default Portfolio

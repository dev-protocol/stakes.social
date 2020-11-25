import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { Container } from 'src/components/atoms/Container'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { CurrencySwitcher } from 'src/components/organisms/PropertyCardList/CurrencySwitcher'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { Statistics } from 'src/components/_pages/portfolio/Statistics'
import { Divider } from 'antd'
import { YourStakes } from 'src/components/_pages/portfolio/YourStakes'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { YourPools } from 'src/components/_pages/portfolio/YourPools'
// import { UserProfile } from 'src/components/organisms/UserProfile'

const PortfolioHeader = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'heading heading'
    'switcher buy';
  grid-template-rows: auto;
  justify-content: stretch;
  grid-template-columns: 1fr auto;
  align-items: center;
  padding-top: 10px;

  @media (min-width: 768px) {
    grid-template-areas: 'heading switcher buy';
    grid-template-columns: 1fr auto auto;
    grid-gap: 2rem;
  }
`

const Heading = styled(H2)`
  grid-area: heading;
`
const Switcher = styled(CurrencySwitcher)`
  grid-area: switcher;
`
const Buy = styled(BuyDevButton)`
  grid-area: buy;
`

const StyledContainer = styled(Container)`
  display: flex;
  gap: 3rem;
  padding: 3rem 1rem;
  flex-flow: column;
  flex-grow: 1;
  padding-top: 6em;
`

const Portfolio = () => {
  const { accountAddress } = useProvider()
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <StyledContainer>
        {/* <UserProfile /> */}
        <PortfolioHeader>
          <Heading>Your Portfolio</Heading>
          <Switcher />
          <Buy />
        </PortfolioHeader>
        <Statistics />
        <Divider type="horizontal" />
        <Heading>Your Stakes</Heading>
        <YourStakes accountAddress={accountAddress} />
        <Divider type="horizontal" />
        <Heading>Your Pools</Heading>
        <YourPools accountAddress={accountAddress} />
      </StyledContainer>
      <Footer />
    </div>
  )
}

export default Portfolio

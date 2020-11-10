import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Container } from 'src/components/atoms/Container'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { CurrencySwitcher } from 'src/components/organisms/PropertyCardList/CurrencySwitcher'
import { BuyDevButton } from 'src/components/molecules/BuyButton'

const PortfolioHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 4fr;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    column-gap: 48px;
  }
`

const Portfolio = () => {
  return (
    <>
      <EarlyAccess></EarlyAccess>
      <Header></Header>
      <Container>
        <PortfolioHeader>
          <H2>Your Portfoilo</H2>
          <CurrencySwitcher></CurrencySwitcher>
          <BuyDevButton></BuyDevButton>
        </PortfolioHeader>
      </Container>
      <Footer />
    </>
  )
}

export default Portfolio

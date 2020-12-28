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
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import Link from 'next/link'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { isIE, browserName, engineName, getUA, fullBrowserVersion } from 'react-device-detect'
import NotSupported from 'src/fixtures/_pages/NotSupportedComponent'

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
const Switcher = styled(CurrencySwitcher)`
  grid-area: switcher;
`
const Buy = styled(BuyDevButton)`
  grid-area: buy;
`

const StyledContainer = styled(Container)`
  display: flex;
  width: 100%;
  gap: 3rem;
  padding: 2rem 1rem;
  flex-flow: column;
  flex-grow: 1;
`

const SwitcherContainer = styled.div`
  display: flex;
`

const Button = styled.a`
  display: flex;
  justify-content: center;
  grid-area: creator;
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  ${blueGradient()}
  ${boxShahowWithOnHover()}
  &,
  :hover {
    color: white;
  }
`
const CreatorButton = styled(Button)`
  grid-area: creator;
`

const EditButton = styled(Button)`
  grid-area: edit;
`

const Portfolio = () => {
  const { accountAddress } = useProvider()
  const { data } = useGetAccount(accountAddress)

  console.log(
    'is IE: ',
    isIE,
    'browserName: ',
    browserName,
    'engineName: ',
    engineName,
    'getUa',
    getUA,
    'full browser version: ',
    fullBrowserVersion
  )
  return (
    <>
      {isIE && <NotSupported />}
      {!isIE && (
        <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
          <Header />
          <StyledContainer>
            <PortfolioHeader>
              <Heading>Your Portfolio</Heading>
              <SwitcherContainer>
                <Switcher />
              </SwitcherContainer>
              <Buy />
              {data?.id && (
                <>
                  <Link href={`/author/${accountAddress}`}>
                    <CreatorButton>View profile</CreatorButton>
                  </Link>
                  <Link href={`/author/${accountAddress}/edit`}>
                    <EditButton>Edit profile</EditButton>
                  </Link>
                </>
              )}
            </PortfolioHeader>
            <Statistics accountAddress={accountAddress} />
            <Divider type="horizontal" />
            <Heading>Your Stakes</Heading>
            <YourStakes accountAddress={accountAddress} />
            <Divider type="horizontal" />
            <Heading>Your Pools</Heading>
            <YourPools accountAddress={accountAddress} />
          </StyledContainer>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Portfolio

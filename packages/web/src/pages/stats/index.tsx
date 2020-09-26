import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Header } from 'src/components/organisms/Header'
import { DevStats } from 'src/components/organisms/DevStats'
import { H2 } from 'src/components/atoms/Typography'
import { Headline } from 'src/components/atoms/Headline'
import styled from 'styled-components'

type Props = {}

const BuyButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`

const DevProtocolStats = (_: Props) => {
  return (
    <>
      <Header />
      <EarlyAccess />
      <div style={{ padding: '1rem', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Headline height={200}>
          <H2>Dev Protocol Stats</H2>
          <p>Dev Protocol is being adopted, see for yourself.</p>
          <BuyButton>Buy DEV</BuyButton>
        </Headline>
        <DevStats />
      </div>
      <Footer />
    </>
  )
}

export default DevProtocolStats

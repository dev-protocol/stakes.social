import * as React from 'react'
import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { useAPY, useAnnualSupplyGrowthRatio } from 'src/fixtures/dev-kit/hooks'
import { SupplySummaly } from 'src/components/molecules/SupplySummaly'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.div`
  display: grid;
  max-width: 1048px;
  width: 100%;
  margin: auto;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  grid-gap: 1rem;
  svg {
    width: 9rem;
  }
  @media (min-width: 768px) {
    margin-top: 3.4em;
    svg {
      width: 12rem;
    }
  }
`

const Logo = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const Header = ({ colorSchema = 'black' }: Props = {}) => {
  const { isConnected, connect } = useConnectWallet()
  const { apy, creators } = useAPY()
  const { annualSupplyGrowthRatio } = useAnnualSupplyGrowthRatio()
  const handleClick = () => {
    connect()
  }

  return (
    <HeaderContainer>
      <Logo>
        <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
        <SupplySummaly apy={apy} creators={creators} annualSupplyGrowthRatio={annualSupplyGrowthRatio}></SupplySummaly>
      </Logo>
      <Button disabled={isConnected} onClick={handleClick}>
        {isConnected && 'Wallet connected'}
        {!isConnected && 'Connect to a wallet'}
      </Button>
    </HeaderContainer>
  )
}

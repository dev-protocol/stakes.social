import * as React from 'react'
import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { A } from 'src/components/atoms/A'
import { Navigation } from 'src/components/molecules/Navigation'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.header`
  display: grid;
`
const Top = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
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
  const handleClick = () => {
    connect()
  }

  return (
    <HeaderContainer>
      <Top>
        <Logo>
          <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
        </Logo>
        <Button disabled={isConnected} onClick={handleClick}>
          {isConnected && 'Wallet connected'}
          {!isConnected && 'Connect to a wallet'}
        </Button>
        <div>{A({ href: '/policy' })(<Button style={{ width: '100%', marginTop: '16px' }}>Governance</Button>)}</div>
      </Top>
      <Navigation></Navigation>
    </HeaderContainer>
  )
}

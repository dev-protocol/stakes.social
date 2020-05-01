import * as React from 'react'
import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  grid-gap: 1em;
  svg {
    width: 11em;
  }
  @media (min-width: 768px) {
    padding: 3.8em;
    svg {
      width: 14em;
    }
  }
`

export const Header = ({ colorSchema = 'black' }: Props = {}) => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }

  return (
    <HeaderContainer>
      <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
      <Button size="middle" disabled={isConnected} onClick={handleClick}>
        {isConnected && 'Wallet connected'}
        {!isConnected && 'Connect to a wallet'}
      </Button>
    </HeaderContainer>
  )
}

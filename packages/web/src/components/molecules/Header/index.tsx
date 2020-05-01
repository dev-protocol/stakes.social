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
  padding: 3.8em;
`

export const Header = ({ colorSchema = 'black' }: Props = {}) => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }

  return (
    <HeaderContainer>
      <BrandLogo colorSchema={colorSchema} props={{ width: '14em', height: undefined }}></BrandLogo>
      <Button size="large" disabled={isConnected} onClick={handleClick}>
        {isConnected && 'Wallet connected'}
        {!isConnected && 'Connect to a wallet'}
      </Button>
    </HeaderContainer>
  )
}

import * as React from 'react'
import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { Navigation } from 'src/components/molecules/Navigation'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
`
const Top = styled.header`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  grid-gap: 1rem;
  svg {
    width: 9rem;
  }
  @media (min-width: 768px) {
    /* margin-top: 3.4em; */
    svg {
      width: 12rem;
    }
  }
`

const Logo = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const ResponsiveWrap = styled.div`
  max-width: '1048px';
  @media (min-width: 1024px) {
    margin-right: auto;
    margin-left: auto;
  }
`

export const Header = ({ colorSchema = 'white' }: Props = {}) => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }
  return (
    <HeaderContainer>
      <ResponsiveWrap>
        <Top>
          <Logo>
            <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
          </Logo>
          <Navigation />
          {/* <div>
            <Button disabled={isConnected} onClick={handleClick}>
              {isConnected && 'Wallet connected'}
              {!isConnected && 'Connect to a wallet'}
            </Button>
          </div> */}
        </Top>
      </ResponsiveWrap>
    </HeaderContainer>
  )
}

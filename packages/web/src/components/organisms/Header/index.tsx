import * as React from 'react'
// import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
// imp ort { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { Navigation } from 'src/components/molecules/Navigation'
import { useState } from 'react'
import Link from 'next/link'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
`
const Top = styled.header`
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid black;

  #headerlogo {
    margin-left: 1em;
    width: 9rem;
    height: auto;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
`
const Logo = styled.div`
  display: flex;
  margin-right: 64px;

  @media (max-width: 768px) {
    position: absolute;
    left: 0px;
    transform: translateY(2px);
    display: block;
    width: 100%;
    height: auto;
    text-align: center;
    pointer-events: none;
  }
`
const ResponsiveWrap = styled.div`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1024px) {
    margin-right: auto;
    margin-left: auto;
  }
`

const navs = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/auth'
  },
  {
    key: 'governance',
    label: 'Govern',
    pathname: '/policy'
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats'
  }
]

const NavigationItem = styled.div`
  padding: 5px 0;
  border-top: 1px solid;
  border-color: rgba(255, 255, 255, 0.6);

  a {
    color: white;
  }
`
const NavigationMenu = styled.div`
  padding: 0 1em;
`

export const Header = ({ colorSchema = 'white' }: Props = {}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <HeaderContainer>
      <ResponsiveWrap>
        <Top>
          <Logo>
            <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
          </Logo>
          <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={setMenuOpen} />
        </Top>
        {isMenuOpen && (
          <NavigationMenu>
            {navs.map(nav => (
              <>
                <NavigationItem key={nav.key}>
                  <Link href={nav.pathname}>{nav.label}</Link>
                </NavigationItem>
              </>
            ))}
          </NavigationMenu>
        )}
      </ResponsiveWrap>
    </HeaderContainer>
  )
}

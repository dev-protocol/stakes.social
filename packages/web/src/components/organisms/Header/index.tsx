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
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  grid-gap: 1rem;
  #headerlogo {
    margin-left: 1em;
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
  max-width: 1048px;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: 1024px) {
    margin-right: auto;
    margin-left: auto;
  }
`

const navs = [
  {
    key: 'properties',
    label: 'Properties',
    pathname: '/'
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/auth'
  },
  {
    key: 'governance',
    label: 'Governance',
    pathname: '/policy'
  },
  {
    key: 'account',
    label: 'Account',
    pathname: '/settings/profile'
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
  // const { isConnected, connect } = useConnectWallet()
  // const handleClick = () => {
  //   connect()
  // }
  return (
    <HeaderContainer>
      <ResponsiveWrap>
        <Top>
          <Logo>
            <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
          </Logo>
          <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={setMenuOpen} />
          {/* <div>
            <Button disabled={isConnected} onClick={handleClick}>
              {isConnected && 'Wallet connected'}
              {!isConnected && 'Connect to a wallet'}
            </Button>
          </div> */}
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

import * as React from 'react'
// import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
// imp ort { useConnectWallet } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { Navigation, Navigations } from 'src/components/molecules/Navigation'
import { useState } from 'react'
import Link from 'next/link'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { useConnectWallet, useProvider } from 'src/fixtures/wallet/hooks'
import { useRouter } from 'next/router'
import { AccountBtn, Connecting } from 'src/components/atoms/Navigation'

interface Props {
  colorSchema?: 'black' | 'white'
}

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
`
const Top = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 2fr;
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

  @media (max-width: 1400px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    padding-top: 2px;
    margin-right: 0;
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

const NavigationItem = styled.div`
  padding: 5px 0;
  border-top: 1px solid;
  border-color: rgba(255, 255, 255, 0.6);

  a {
    display: block;
    width: auto;
    color: white;
  }
`
const NavigationMenu = styled.div`
  padding: 0 1em;
`

const RepsonsiveNav = styled.div`
  display: flex;
  justify-content: start;
  @media (min-width: 1401px) {
    justify-content: flex-end;
  }
`

export const Header = ({ colorSchema = 'white' }: Props = {}) => {
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress } = useProvider()

  const accountBtnClick = async () => {
    if (isConnected || accountAddress) {
      router.push({ pathname: '/settings/profile' })
      return
    }

    connect()
  }

  return (
    <div style={{ position: 'fixed', top: 0, width: '100%', zIndex: 2 }}>
      <HeaderContainer>
        <ResponsiveWrap>
          <Top>
            <Logo>
              <BrandLogo colorSchema={colorSchema} props={{ height: undefined }}></BrandLogo>
            </Logo>
            <RepsonsiveNav>
              <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={setMenuOpen} />
            </RepsonsiveNav>
          </Top>
          {isMenuOpen && (
            <NavigationMenu>
              {Navigations.map(nav => (
                <>
                  <NavigationItem key={nav.key}>
                    <Link href={nav.pathname}>{nav.label}</Link>
                  </NavigationItem>
                </>
              ))}
            </NavigationMenu>
          )}
        </ResponsiveWrap>
        <AccountBtn onClick={accountBtnClick}>
          {isConnecting ? (
            <Connecting>{'Connecting...'}</Connecting>
          ) : !isConnected && !accountAddress ? (
            <span style={{ fontSize: '0.8em' }}>Sign in</span>
          ) : (
            <React.Fragment>
              <span style={{ fontSize: '0.8em' }} className="hideOnSmall">
                Profile
              </span>
            </React.Fragment>
          )}
        </AccountBtn>
      </HeaderContainer>
      <EarlyAccess />
    </div>
  )
}

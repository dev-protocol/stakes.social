import * as React from 'react'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import styled from 'styled-components'
import { Navigation, Navigations } from 'src/components/molecules/Navigation'
import { useState } from 'react'
import Link from 'next/link'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { useConnectWallet, useProvider } from 'src/fixtures/wallet/hooks'
import { AccountBtn, Connecting } from 'src/components/atoms/Navigation'
import { useRouter } from 'next/router'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'

interface Props {}

const HeaderContainer = styled.header`
  background-color: black;
  width: 100%;
`
const Top = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
`

const Logo = styled.div`
  display: flex;

  @media (max-width: 1070px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    margin-top: -0.3em;
    margin-right: 0;
  }
`

const HeaderRight = styled.div`
  display: flex;
  justify-content: right;
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

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  flex-grow: 1;
`

const toKey = (_pathname: string) => Navigations.find(({ pathname }) => pathname === _pathname)?.key

export const Header = (_: Props = {}) => {
  const router = useRouter()
  const [current] = useState(toKey(router?.asPath || Navigations[0].key)) // || Navigations[0].key
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress } = useProvider()

  const accountBtnClick = async () => {
    connect()
  }

  return (
    <div style={{ position: 'sticky', top: 0, width: '100%', zIndex: 5 }}>
      <HeaderContainer>
        <Container>
          <Top>
            <Logo>
              <BrandLogo />
            </Logo>

            <HeaderRight>
              <Navigation isMenuOpen={isMenuOpen} handleMenuOpen={setMenuOpen} />

              {isConnecting ? (
                <AccountBtn>
                  <Connecting>{'Connecting...'}</Connecting>
                </AccountBtn>
              ) : !isConnected && !accountAddress ? (
                <AccountBtn onClick={accountBtnClick}>
                  <span style={{ fontSize: '0.8em' }}>Sign in</span>
                </AccountBtn>
              ) : (
                <Link href="/profile" as={`/profile`} passHref>
                  <AccountBtn currentRouter={router?.pathname}>
                    <React.Fragment>
                      <span style={{ fontSize: '0.8em' }} className="hideOnSmall">
                        Portfolio
                      </span>
                    </React.Fragment>
                  </AccountBtn>
                </Link>
              )}
            </HeaderRight>
          </Top>
          {isMenuOpen && (
            <NavigationMenu>
              {Navigations.map(nav => (
                <>
                  <NavigationItem key={nav.key}>
                    <LinkWithNetwork href={nav.pathname} rewrite={nav.rewrite}>
                      <span style={current === nav.key ? { color: '#808080' } : { color: '#FFF' }}>{nav.label}</span>
                    </LinkWithNetwork>
                  </NavigationItem>
                </>
              ))}
            </NavigationMenu>
          )}
        </Container>
      </HeaderContainer>
      <EarlyAccess />
    </div>
  )
}

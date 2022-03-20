import React, { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import styled from 'styled-components'
import { useIsL1, useConnectWallet, useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { Button, Drawer, Popover } from 'antd'
import StakesSocial from 'src/components/atoms/Svgs/svg/Stakes-social.svg'
import { DisconnectOutlined, LinkOutlined, MoreOutlined } from '@ant-design/icons'
import { Container } from 'src/components/atoms/Container'
import { ChainName } from 'src/fixtures/wallet/utility'
import { switchChain } from 'src/fixtures/wallet/switch'
import { providers } from 'ethers'
import truncateEthAddress from 'truncate-eth-address'
import EthereumEthLogo from 'src/components/atoms/Svgs/svg/EthereumEthLogo.svg'
import ArbitrumLogo from 'src/components/atoms/Svgs/svg/ArbitrumLogo.svg'
import PolygonLogo from 'src/components/atoms/Svgs/svg/PolygonLogo.svg'

const Nav = styled.nav``

const NavContainer = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
`

const NavIcon = styled(MoreOutlined)`
  padding: 1rem;
  background: #2172f3;
  border-radius: 99px;
  color: white;
`

const Logo = styled(StakesSocial)`
  fill: black;
`

const LogoText = styled.span`
  color: black;
  margin-left: 0.5em;
  font-size: 1.2rem;
  font-weight: bold;
`

const Grid = styled.div`
  display: grid;
`

const NavOpenedWallet = styled(Grid)`
  gap: 1rem;
  border: 4px solid whitesmoke;
  border-radius: 20px;
  padding: 1rem;
`

const NavOpenedC = styled(Grid)`
  grid-auto-flow: column;
  justify-content: space-between;
`

const NavOpenedN = styled(Grid)`
  grid-auto-flow: row;
  justify-items: start;
  gap: 1rem;
`

const Testnet = styled.h4`
  margin: 0;
  opacity: 0.5;
`

const NetworkSwitch = styled(Button)`
  padding: 0;
  display: grid;
  gap: 0.2rem;
  grid-auto-flow: column;
  align-items: center;
`

const NetworkSwitchWithLogo = styled(NetworkSwitch)`
  padding: 0;
  display: grid;
  grid-template-columns: 2rem auto 1fr;
  justify-items: center;
`

const GrayCircle = styled.span`
  color: lightgray;
  &::before {
    content: '●';
  }
`

const GreenCircle = styled.span`
  color: #00b050;
  &::before {
    content: '●';
  }
`

const NavUl = styled.ul`
  display: grid;
  padding: 0;
  margin: 0;
  list-style: none;
  gap: 1rem;
  margin-top: 1rem;
`
const NavLi = styled.li`
  a {
    display: block;
    border: 4px solid whitesmoke;
    border-radius: 20px;
    padding: 1rem;
  }
`
const LogoWrapper = styled(Grid)`
  align-items: center;
  grid-auto-flow: column;
`

export const Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity/v2',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/create',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats',
    rewrite: false,
    isExternal: false
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808',
    rewrite: false,
    isExternal: false
  }
]

export const L2Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity/v2',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'create',
    label: 'Create on Niwa',
    pathname: 'https://niwa.xyz',
    rewrite: true,
    isExternal: true
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats',
    rewrite: false,
    isExternal: false
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile',
    rewrite: true,
    isExternal: false
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808',
    rewrite: false,
    isExternal: false
  }
]

const StakesSocialLogo = () => (
  <LogoWrapper>
    <Logo id="headerlogo" height="1.2rem" />
    <LogoText>Stakes.social</LogoText>
  </LogoWrapper>
)

const ConnectedOrDisconnected = ({ chainName }: { chainName: ChainName }) => {
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  return chainName === name ? <GreenCircle /> : <GrayCircle />
}

const createSwitchNetwork =
  (router: NextRouter, provider?: providers.BaseProvider) => (chainName: ChainName) => async () => {
    const res = await switchChain(chainName, provider)
    if (res === true) {
      router.push(`/${chainName}`)
    }
  }

export const Navigation = () => {
  const router = useRouter()
  const { isL1 } = useIsL1()
  const [open, setOpen] = useState(false)
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress, ethersProvider } = useProvider()
  const switchNetwork = createSwitchNetwork(router, ethersProvider)

  return (
    <Nav>
      <NavContainer>
        <LinkWithNetwork passHref href="/">
          <a>
            <StakesSocialLogo />
          </a>
        </LinkWithNetwork>
        <NavIcon onClick={() => setOpen(true)} />
      </NavContainer>

      <Drawer visible={open} zIndex={1} onClose={() => setOpen(false)}>
        <NavOpenedWallet>
          <span>Select a network</span>
          <NavOpenedN>
            <NetworkSwitchWithLogo type="link" onClick={switchNetwork('ethereum')}>
              <EthereumEthLogo height="2rem" />
              <ConnectedOrDisconnected chainName="ethereum" />
              Ethereum
            </NetworkSwitchWithLogo>
            <NetworkSwitchWithLogo type="link" onClick={switchNetwork('arbitrum-one')}>
              <ArbitrumLogo height="2rem" />
              <ConnectedOrDisconnected chainName="arbitrum-one" />
              Arbitrum
            </NetworkSwitchWithLogo>
            <NetworkSwitchWithLogo type="link" onClick={switchNetwork('polygon')}>
              <PolygonLogo height="1.5rem" />
              <ConnectedOrDisconnected chainName="polygon" />
              Polygon
            </NetworkSwitchWithLogo>
            <Popover
              content={
                <>
                  <NetworkSwitch type="link" onClick={switchNetwork('arbitrum-rinkeby')}>
                    <ConnectedOrDisconnected chainName="arbitrum-rinkeby" />
                    <span>Arbitrum Rinkeby</span>
                  </NetworkSwitch>
                  <NetworkSwitch type="link" onClick={switchNetwork('polygon-mumbai')}>
                    <ConnectedOrDisconnected chainName="polygon-mumbai" />
                    <span>Polygon Mumbai</span>
                  </NetworkSwitch>
                </>
              }
              title="Testnet"
              trigger="hover"
              placement="topLeft"
            >
              <Testnet>Testnet</Testnet>
            </Popover>
          </NavOpenedN>
          <NavOpenedC>
            <span>
              {isConnected && accountAddress ? (
                <>
                  <LinkOutlined /> Connected to {truncateEthAddress(accountAddress)}
                </>
              ) : (
                <>
                  <DisconnectOutlined /> Disconnected to a wallet
                </>
              )}
            </span>
          </NavOpenedC>
          <Button onClick={connect} loading={isConnecting} type={isConnected ? 'link' : 'primary'}>
            {isConnected ? 'Connected' : 'Connect'}
          </Button>
        </NavOpenedWallet>
        <NavUl>
          {isL1
            ? Navigations.map(nav => (
                <NavLi key={nav.key} style={{ margin: '0' }}>
                  {nav.isExternal && <a href={nav.pathname}>{nav.label}</a>}
                  {!nav.isExternal && (
                    <LinkWithNetwork href={nav.pathname} rewrite={nav.rewrite} passHref>
                      <a>{nav.label}</a>
                    </LinkWithNetwork>
                  )}
                </NavLi>
              ))
            : L2Navigations.map(nav => (
                <NavLi key={nav.key} style={{ margin: '0' }}>
                  {nav.isExternal && <a href={nav.pathname}>{nav.label}</a>}
                  {!nav.isExternal && (
                    <LinkWithNetwork href={nav.pathname} rewrite={nav.rewrite} passHref>
                      <a>{nav.label}</a>
                    </LinkWithNetwork>
                  )}
                </NavLi>
              ))}
        </NavUl>
      </Drawer>
    </Nav>
  )
}

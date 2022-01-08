import React, { useState } from 'react'
import { useRouter, NextRouter } from 'next/router'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import styled from 'styled-components'
import { useConnectWallet, useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'
import { Button, Drawer } from 'antd'
import { StakesSocial } from 'src/components/atoms/Svgs/tsx'
import { DisconnectOutlined, LinkOutlined, MoreOutlined } from '@ant-design/icons'
import { Container } from 'src/components/atoms/Container'
import { ChainName } from 'src/fixtures/wallet/utility'
import { switchChain } from 'src/fixtures/wallet/switch'
import { providers } from 'ethers'
import truncateEthAddress from 'truncate-eth-address'

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
`

const NetworkSwitch = styled(Button)`
  padding: 0;
  display: grid;
  gap: 1rem;
  grid-auto-flow: column;
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

export const Navigations = [
  {
    key: 'pools',
    label: 'Pools',
    pathname: '/',
    rewrite: true
  },
  {
    key: 'liquidity',
    label: 'Liquidity',
    pathname: '/liquidity/v2',
    rewrite: true
  },
  {
    key: 'create',
    label: 'Create',
    pathname: '/create',
    rewrite: true
  },
  {
    key: 'dashboard',
    label: 'Dashboard',
    pathname: '/stats',
    rewrite: false
  },
  {
    key: 'portfolio',
    label: 'Portfolio',
    pathname: '/profile',
    rewrite: true
  },
  {
    key: 'grants',
    label: 'Grants',
    pathname: 'https://devprotocol.notion.site/Welcome-to-DEV-DAPP-STARTER-GRANTS-5cb95252f18540258111581ea54d8808',
    rewrite: false
  }
]

const StakesSocialLogo = () => (
  <div>
    <Logo id="headerlogo" height={undefined} />
    <LogoText>Stakes.social</LogoText>
  </div>
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
  const [open, setOpen] = useState(false)
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress, ethersProvider } = useProvider()
  const switchNetwork = createSwitchNetwork(router, ethersProvider)

  return (
    <Nav>
      <NavContainer>
        <StakesSocialLogo />
        <NavIcon onClick={() => setOpen(true)} />
      </NavContainer>

      <Drawer visible={open} zIndex={1} onClose={() => setOpen(false)}>
        <NavOpenedWallet>
          <span>Select a network</span>
          <NavOpenedN>
            <NetworkSwitch type="link" onClick={switchNetwork('ethereum')}>
              <ConnectedOrDisconnected chainName="ethereum" />
              Ethereum
            </NetworkSwitch>
            <NetworkSwitch type="link" onClick={switchNetwork('arbitrum-one')}>
              <ConnectedOrDisconnected chainName="arbitrum-one" /> Arbitrum
            </NetworkSwitch>
            <NetworkSwitch type="link" onClick={switchNetwork('ropsten')}>
              <ConnectedOrDisconnected chainName="ropsten" /> Ropsten Testnet
            </NetworkSwitch>
            <NetworkSwitch type="link" onClick={switchNetwork('arbitrum-rinkeby')}>
              <ConnectedOrDisconnected chainName="arbitrum-rinkeby" />
              Arbitrum Rinkeby Testnet
            </NetworkSwitch>
          </NavOpenedN>
          <NavOpenedC>
            <span>
              {isConnected ? (
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
          {Navigations.map(nav => (
            <NavLi key={nav.key} style={{ margin: '0' }}>
              <LinkWithNetwork href={nav.pathname} rewrite={nav.rewrite} passHref>
                <a>{nav.label}</a>
              </LinkWithNetwork>
            </NavLi>
          ))}
        </NavUl>
      </Drawer>
    </Nav>
  )
}

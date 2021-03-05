import React from 'react'
import { IncubatorLogo } from 'src/components/organisms/Incubator/Icons'
import styled from 'styled-components'
import Link from 'next/link'
import { useConnectWallet, useProvider } from 'src/fixtures/wallet/hooks'
import { getPath } from 'src/fixtures/utility/route'
import { useRouter } from 'next/router'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 1em 0;
  max-width: 1128px;
`

const HeaderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const ConnectWalletContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const HeaderLink = styled.a<{ color?: string }>`
  font-family: WhyteInktrap;
  text-decoration: none;
  color: ${props => (props.color ? props.color : 'black')};
`

const ConnectWalletLink = styled(HeaderLink)`
  :hover {
    color: ${props => props.color};
  }
`

const IncubatorLogoContainer = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    padding-left: 1em;
  }
`

const IncubatorHeader = () => {
  const { isConnected, connect, isConnecting } = useConnectWallet()
  const { accountAddress } = useProvider()

  const [parent, sub] = getPath(useRouter().asPath)
  const isLandingPage = parent === 'incubator' && !sub
  return (
    <div style={{ background: isLandingPage ? '#fafafa' : 'white' }}>
      <HeaderContainer>
        <Link href="/incubator" passHref>
          <IncubatorLogoContainer>
            <IncubatorLogo />
          </IncubatorLogoContainer>
        </Link>

        <HeaderLinkContainer>
          <Link href="/incubator#projects">
            <HeaderLink>Projects</HeaderLink>
          </Link>

          <Link href="/incubator#committee">
            <HeaderLink>Committee</HeaderLink>
          </Link>

          <Link href="/incubator/QA">
            <HeaderLink>{'Q&As'}</HeaderLink>
          </Link>

          <HeaderLink href="https://stakes.social/" color="#FF3815">
            Stakes.social
          </HeaderLink>
        </HeaderLinkContainer>

        <ConnectWalletContainer>
          {isConnecting ? (
            <ConnectWalletLink color="#00D0FD">Connecting...</ConnectWalletLink>
          ) : !isConnected && !accountAddress ? (
            <ConnectWalletLink onClick={connect} color="#00D0FD">
              Connect Wallet
            </ConnectWalletLink>
          ) : (
            <ConnectWalletLink color="#00e84b">Connected</ConnectWalletLink>
          )}
        </ConnectWalletContainer>
      </HeaderContainer>
    </div>
  )
}

export default IncubatorHeader

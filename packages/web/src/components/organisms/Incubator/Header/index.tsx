import React from 'react'
import { IncubatorLogo } from 'src/components/organisms/Incubator/Icons'
import styled from 'styled-components'
import Link from 'next/link'

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  width: 100%;
  margin: 0 auto;
  padding: 1rem 0;
  max-width: 1200px;
`

const HeaderLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ConnectWalletContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const HeaderLink = styled.a<{ color?: string }>`
  text-decoration: none;
  color: ${props => (props.color ? props.color : 'black')};
`

const IncubatorHeader = () => {
  return (
    <div>
      <HeaderContainer>
        <Link href="/incubator" passHref>
          <div style={{ cursor: 'pointer' }}>
           <IncubatorLogo />
          </div>
         
        </Link>

        <HeaderLinkContainer>
          <HeaderLink>Projects</HeaderLink>
          <HeaderLink>Comittee</HeaderLink>
          <HeaderLink>{'Q&As'}</HeaderLink>
          <HeaderLink color="#FF3815">Stakes.social</HeaderLink>
        </HeaderLinkContainer>
        <ConnectWalletContainer>
          <HeaderLink color="#00D0FD">Connect Wallet</HeaderLink>
        </ConnectWalletContainer>
      </HeaderContainer>
    </div>
  )
}

export default IncubatorHeader

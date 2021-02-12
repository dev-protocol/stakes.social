import React from 'react'
import { IncubatorLogo } from 'src/components/organisms/Incubator/Logo'
import Jumbo from 'src/components/organisms/Incubator/Jumbo'
import styled from 'styled-components'

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
        <IncubatorLogo />
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
      <Jumbo />
    </div>
  )
}

export default IncubatorHeader

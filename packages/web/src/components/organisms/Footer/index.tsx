import * as React from 'react'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import styled, { CSSProperties } from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { Twitter, Discord, Telegram, Medium, Github } from '../../atoms/SocialButtons/index'
import { Divider } from 'antd'

const Wrap = styled.footer`
  display: grid;
  margin-top: 3em;
`

const SocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`
const LowerFooter = {
  margin: 'unset',
  textAlign: 'center',
  maxWidth: 'unset',
  background: 'black',
  padding: '30px 0px 30px 0px'
} as CSSProperties

const FooterContainer = styled.div`
  max-width: 350px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 760px) {
    max-width: 1160px;
  }
`

const LogoContainer = styled.div``

const DevProtocol = styled.a`
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;

  color: white;

  :hover {
    color: inherit;
  }
`

export const Footer = () => {
  return (
    <Wrap>
      <Container style={LowerFooter}>
        <FooterContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <LogoContainer>
              <BrandLogo />
            </LogoContainer>
            <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '0.9em' }}>
              <span>Powered by</span>
              <Divider style={{ marginLeft: '2px', marginRight: '2px' }} type="vertical" />
              <DevProtocol target="_blank" rel="noopener noreferrer" href="https://devprtcl.com/">
                Dev Protocol
              </DevProtocol>
            </div>
          </div>

          <hr style={{ color: 'white', marginTop: '2px' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.9em' }}>
            <span>2020 All rights reserverd.</span>
            <SocialContainer>
              <Twitter target="_blank" rel="noopener noreferrer" />
              <Discord target="_blank" rel="noopener noreferrer" />
              <Github target="_blank" rel="noopener noreferrer" />
              <Telegram target="_blank" rel="noopener noreferrer" />
              <Medium target="_blank" rel="noopener noreferrer" />
            </SocialContainer>
          </div>
        </FooterContainer>
      </Container>
    </Wrap>
  )
}

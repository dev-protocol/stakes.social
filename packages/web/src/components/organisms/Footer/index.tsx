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
  font-size: 0;

  @media (max-width: 767px) {
    align-items: center;
  }
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

const FooterLink = styled.a`
  padding-right: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  color: white;
  opacity: 1;
  transition: opacity 400ms ease-out;

  :hover {
    color: white;
    opacity: 0.8;
  }

  @media (max-width: 767px) {
    margin-right: 0;
    margin-bottom: 1.25rem;
    :last-child {
      margin-bottom: 0;
    }
  }
`

const Border = styled.div`
  margin: 1.25rem 0;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.8);
`

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0.3125rem;

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: unset;
    align-items: center;
    color: #fff;
  }
`

const FooterContentLeft = styled.div`
  @media (max-width: 767px) {
    margin-bottom: 1.25rem;
  }
`

export const Footer = () => {
  return (
    <Wrap>
      <Container style={LowerFooter}>
        <FooterContainer>
          <FooterWrapper style={{ justifyContent: 'start', fontSize: '0.9rem' }}>
            <FooterLink href={'https://docs.devprotocol.xyz/stakes-social/'} target={'_blank'} rel="noreferrer">
              What is Stakes.social
            </FooterLink>
            <FooterLink href={'https://devprotocol.xyz/faq'} target={'_blank'} rel="noreferrer">
              Dev Protocol FAQ
            </FooterLink>
            <FooterLink href={'https://bridge.devprotocol.xyz/'} target={'_blank'} rel="noreferrer">
              Dev Bridge for L2
            </FooterLink>
            <FooterLink
              href={'https://app.uniswap.org/#/swap?outputCurrency=0x91F5dC90979b058eBA3be6B7B7e523df7e84e137'}
              target={'_blank'}
              rel="noreferrer"
            >
              Buy DEV on Uniswap L2
            </FooterLink>
            <FooterLink href={'/terms-of-use'}>Terms of Use</FooterLink>
            <FooterLink
              href={'https://github.com/dev-protocol/community/blob/main/CODE_OF_CONDUCT.md'}
              target={'_blank'}
              rel="noreferrer"
            >
              Code of Conduct
            </FooterLink>
          </FooterWrapper>

          <Border />

          <FooterWrapper>
            <LogoContainer>
              <BrandLogo />
            </LogoContainer>
            <div style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '0.9em' }}>
              <span>Powered by</span>
              <Divider style={{ marginLeft: '2px', marginRight: '2px' }} type="vertical" />
              <DevProtocol target="_blank" rel="noopener noreferrer" href="https://devprotocol.xyz/">
                Dev Protocol
              </DevProtocol>
            </div>
          </FooterWrapper>

          <FooterWrapper>
            <FooterContentLeft>2021 All rights reserverd.</FooterContentLeft>
            <SocialContainer style={{ fontSize: 0 }}>
              <Twitter target="_blank" rel="noopener noreferrer" />
              <Discord />
              <Github target="_blank" rel="noopener noreferrer" />
              <Telegram />
              <Medium />
            </SocialContainer>
          </FooterWrapper>
        </FooterContainer>
      </Container>
    </Wrap>
  )
}

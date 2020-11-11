import * as React from 'react'
import { Logo } from 'src/components/atoms/Svgs/tsx'
import styled, { CSSProperties } from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { BrandLogo } from '../../atoms/BrandLogo/index'
import { Twitter, Discord, Telegram, Spectrum, Medium } from '../../atoms/SocialButtons/index'

const Wrap = styled.footer`
  display: grid;
  grid-gap: 5rem;
  padding-top: 5rem;
  background: #ebf2f8;
  margin-top: 50px;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
`

const SocialContainer = styled.div`
  text-align: center;
  margin-top: 5rem;
  margin-bottom: 15px;
`

const Licence = styled.small`
  color: #5e5e5e;
  display: block;
  text-align: center;
  margin-right: 5px;

  a {
    font-size: 8px;
  }
`

const LowerFooter = {
  margin: 'unset',
  textAlign: 'center',
  maxWidth: 'unset',
  background: 'black',
  padding: '50px 0px'
} as CSSProperties

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <div style={{ textAlign: 'left' }}>
          <BrandLogo colorSchema={'black'} props={{ width: '170px' }}></BrandLogo>
        </div>
        <p style={{ marginTop: '30px' }}>
          <span> Stakes.social is powered by the </span>
          <a href="//devprtcl.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
            Dev Protocol
          </a>
          <span>, see the </span>
          <a
            href="//github.com/dev-protocol/protocol/blob/main/docs/WHITEPAPER.md"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            whitepaper
          </a>
          <span> on </span>
          <a
            href="//github.com/dev-protocol/protocol"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            GitHub
          </a>
          .
        </p>
        <SocialContainer>
          <div style={{ textAlign: 'center', marginBottom: '15px' }}>Enjoy following the Dev Protocol community on</div>

          <Discord />
          <Telegram />
          <Medium />
          <Spectrum />
          <Twitter />
        </SocialContainer>
      </Container>
      <Container style={LowerFooter}>
        <Logo width={96} height={undefined}></Logo>
        <br />
        <div style={{ color: 'white', marginBottom: '10px' }}>Powered by Dev Protocol</div>
        <Licence>
          All emojis designed by <a href="//openmoji.org/library/">OpenMoji</a> – the open-source emoji and icon
          project. License: <a href="//creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
        </Licence>
      </Container>
    </Wrap>
  )
}

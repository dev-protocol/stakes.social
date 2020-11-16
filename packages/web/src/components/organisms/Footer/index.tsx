import * as React from 'react'
import { StakesSocialWhite } from 'src/components/atoms/Svgs/tsx'
import styled, { CSSProperties } from 'styled-components'
import { Container } from 'src/components/atoms/Container'
import { Twitter, Discord, Telegram, Medium, Github } from '../../atoms/SocialButtons/index'
import { Divider } from 'antd'

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
  padding: '50px 0px'
} as CSSProperties

const FooterContainer = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
`

const LogoContainer = styled.div`
  #headerlogo {
    width: 9rem;
    height: 24px;
    @media (max-width: 768px) {
      margin-left: 0px;
    }
  }
`

export const Footer = () => {
  return (
    <Container style={LowerFooter}>
      <FooterContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <LogoContainer>
            <StakesSocialWhite id="headerlogo"></StakesSocialWhite>
          </LogoContainer>
          <div style={{ color: 'white', fontSize: '0.9em' }}>
            <span>Powered by</span>
            <Divider style={{ marginLeft: '2px', marginRight: '2px' }} type="vertical" />
            <span style={{ fontWeight: 'bold' }}>Dev Protocol</span>
          </div>
        </div>

        <hr style={{ color: 'white', marginTop: '2px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'white', fontSize: '0.9em' }}>
          <span>2020 All rights reserverd.</span>
          <SocialContainer>
            <Twitter />
            <Discord />
            <Github />
            <Telegram />
            <Medium />
          </SocialContainer>
        </div>
      </FooterContainer>
    </Container>
  )
}

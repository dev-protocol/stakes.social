import * as React from 'react'
import styled, { CSSProperties } from 'styled-components'

import { Container } from 'src/components/atoms/Container'
import { StakesSocialLogo, MadeByDev } from 'src/components/organisms/Incubator/Icons'
import { Span } from 'src/components/organisms/Incubator/Typography'

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
  padding: '5em 0'
} as CSSProperties

const FooterContainer = styled.div`
  margin: 0 auto;
  max-width: 1128px;
`

const SocialMediaLink = styled.a`
  font-size: 16px;
  margin-left: 3em;
  text-decoration: none;
  color: white;
  padding-bottom: 2px;
  border-bottom: 1px solid white;

  :hover {
    color: white;
  }
`

export const Footer = () => {
  return (
    <Wrap>
      <Container style={LowerFooter}>
        <FooterContainer>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '30px' }}>
            <StakesSocialLogo />
            <MadeByDev />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Span color="white" fontSize="20px">
              2021. All Rights Reserverd
            </Span>
            <SocialContainer>
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://twitter.com/devprtcl">
                <Span fontSize="20px">Twitter</Span>
              </SocialMediaLink>
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://discord.gg/VwJp4KM">
                <Span fontSize="20px">Discord</Span>
              </SocialMediaLink>
              <SocialMediaLink
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/dev-protocol/stakes.social"
              >
                <Span fontSize="20px">GitHub</Span>
              </SocialMediaLink>
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://t.me/devprtcl">
                <Span fontSize="20px">Telegram</Span>
              </SocialMediaLink>
              <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://medium.com/devtoken">
                <Span fontSize="20px">Medium</Span>
              </SocialMediaLink>
            </SocialContainer>
          </div>
        </FooterContainer>
      </Container>
    </Wrap>
  )
}

export default Footer

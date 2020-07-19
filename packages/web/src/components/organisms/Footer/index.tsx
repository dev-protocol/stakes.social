import * as React from 'react'
import { Logo } from 'src/components/atoms/Svgs/tsx'
import styled from 'styled-components'
import { Container } from 'src/components/atoms/Container'

const Wrap = styled.footer`
  display: grid;
  justify-content: center;
  grid-gap: 5rem;
  padding: 5rem 0;
  margin-top: 5rem;
  border-top: 1px solid #e6e6e6;
`

export const Footer = () => {
  return (
    <Wrap>
      <Container>
        <p>
          <span>Stakes.social is powered by the </span>
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
        <p>
          <span>Enjoy following the Dev Protocol community on </span>
          <a
            href="//discord.gg/VwJp4KM"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            Discord
          </a>
          <span>, </span>
          <a href="//t.me/devprtcl" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
            Telegram
          </a>
          <span>, </span>
          <a
            href="//medium.com/devtoken"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            Medium
          </a>
          <span>, </span>
          <a
            href="//spectrum.chat/devtoken"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            Spectrum
          </a>
          <span>, and </span>
          <a
            href="//twitter.com/devprtcl"
            target="_blank"
            rel="noreferrer noopener"
            style={{ textDecoration: 'underline' }}
          >
            Twitter
          </a>
          !
        </p>
      </Container>
      <Container>
        <Logo width={84} height={undefined}></Logo>
      </Container>
      <Container>
        <small>
          All emojis designed by <a href="//openmoji.org/library/">OpenMoji</a> – the open-source emoji and icon
          project. License: <a href="//creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>
        </small>
      </Container>
    </Wrap>
  )
}

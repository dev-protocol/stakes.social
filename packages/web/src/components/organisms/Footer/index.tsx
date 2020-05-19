import * as React from 'react'
import { Logo } from 'src/components/atoms/Svgs/tsx'

export const Footer = () => {
  return (
    <div
      style={{
        padding: '1rem',
        margin: '5rem auto',
        width: 'auto',
        maxWidth: '1048px',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '24px'
      }}
    >
      <div>
        <span>Stakes.social is powered by the </span>
        <a href="//devprtcl.com" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Dev Protocol
        </a>
        <span>, see the </span>
        <a
          href="//github.com/dev-protocol/protocol/blob/master/docs/WHITEPAPER.md"
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
        <br />
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
      </div>
      <div style={{ margin: '66px 0' }}>
        <Logo width={120} height={undefined}></Logo>
      </div>
    </div>
  )
}

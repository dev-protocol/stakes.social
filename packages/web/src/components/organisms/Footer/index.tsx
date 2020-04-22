import * as React from 'react'
import { Logo } from 'src/components/atoms/Svgs/tsx'

export const Footer = () => {
  return (
    <div
      style={{
        width: 'auto',
        maxWidth: '1048px',
        marginRight: 'auto',
        marginLeft: 'auto',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        lineHeight: '24px',
        padding: '0 0 84px 0'
      }}
    >
      <div>
        <span>Stakes.social is powered by the </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Dev Protocol
        </a>
        <span>, see the </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          whitepaper
        </a>
        <span> on </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          GitHub
        </a>
        .
        <br />
        <span>Enjoy following the Dev Protocol community on </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Discord
        </a>
        <span>, </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Medium
        </a>
        <span>, </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Spectrum
        </a>
        <span>, and </span>
        <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
          Twitter
        </a>
        !
      </div>
      <Logo width={50} height={50} />
    </div>
  )
}

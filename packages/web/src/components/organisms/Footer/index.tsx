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
        lineHeight: '24px',
        padding: '118px 0 84px 0'
      }}
    >
      <div>
        <div>XXX is powered by the Dev Protocol, see the whitepaper on GitHub.</div>
        <div>Enjoy following the Dev Protocol community on Discord, Medium, Spectrum, and Twitter!</div>
      </div>
      <Logo width={50} height={50} />
    </div>
  )
}

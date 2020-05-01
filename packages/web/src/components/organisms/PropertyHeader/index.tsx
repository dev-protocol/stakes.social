import React from 'react'
import { Header } from 'src/components/molecules/Header'

interface Props {
  propertyAddress: string
}

export const PropertyHeader = ({ propertyAddress }: Props) => {
  return (
    <div
      style={{
        width: 'auto',
        position: 'relative',
        height: '562px',
        background: `
          url('//raw.githubusercontent.com/dev-protocol/assets/master/property/${propertyAddress}/header.jpg'),
          linear-gradient(111.32deg, #2F80ED 0%, #D5E6FB 100%)`,
        backgroundSize: 'cover'
      }}
    >
      <Header colorSchema={'white'} />
      <div
        style={{
          padding: '50px'
        }}
      >
        <div
          style={{
            position: 'absolute',
            bottom: '0',
            padding: '0 0 122px 333px',
            display: 'block'
          }}
        >
          <span style={{ background: 'white', padding: '0.5em' }}>Property Address</span>
          <div style={{ background: 'white' }}>{propertyAddress}</div>
        </div>
      </div>
    </div>
  )
}

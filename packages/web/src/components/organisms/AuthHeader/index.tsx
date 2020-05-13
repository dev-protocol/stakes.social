import React from 'react'
import { Header } from '../Header'

export const AuthHeader = () => {
  return (
    <>
      <Header />
      <div style={{ padding: '50px' }}>
        <div
          style={{
            height: '500px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexFlow: 'column',
            fontSize: '48px',
            lineHeight: '64px',
            color: 'rgba(0, 0, 0, 0.85)'
          }}
        >
          <div>Choose Market</div>
          <div style={{ fontSize: '18px', lineHeight: '24px' }}>Select one asset market to authenticate.</div>
        </div>
      </div>
    </>
  )
}

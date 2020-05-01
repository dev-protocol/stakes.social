import React from 'react'
import { Header } from '../Header'

export const MainHeader = () => {
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
            fontSize: '48px',
            lineHeight: '64px'
          }}
        >
          <p style={{ color: '#2F80ED' }}>Make a community sustainable together</p>
        </div>
      </div>
    </>
  )
}

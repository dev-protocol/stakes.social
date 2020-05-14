import React from 'react'
import { Header } from '../Header'
import { H2 } from 'src/components/atoms/Title'

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
            flexFlow: 'column'
          }}
        >
          <H2>Choose Market</H2>
          <div>Select one asset market to authenticate.</div>
        </div>
      </div>
    </>
  )
}

import React from 'react'
import { Header } from '../Header'
import { Button } from 'antd'
import { A } from 'src/components/atoms/A'

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
            flexFlow: 'column',
            fontSize: '48px',
            lineHeight: '64px'
          }}
        >
          <p style={{ color: '#2F80ED' }}>Make a community sustainable together</p>
          {A({ href: '/how-it-works' })(
            <Button type="primary" size="large">
              How it works
            </Button>
          )}
        </div>
      </div>
    </>
  )
}

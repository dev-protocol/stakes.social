import React from 'react'
import { Button } from 'antd'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { BrandLogo } from 'src/components/atoms/BrandLogo'

export const MainHeader = () => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }

  return (
    <div style={{ padding: '50px' }}>
      <div>
        <BrandLogo colorSchema={'black'} props={{ width: '14em', height: undefined }}></BrandLogo>
        <Button size="large" style={{ float: 'right' }} disabled={isConnected} onClick={handleClick}>
          {isConnected && 'Wallet connected'}
          {!isConnected && 'Connect to a wallet'}
        </Button>
      </div>
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
  )
}

import React from 'react'
import { Button } from 'antd'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { StakesSocialWhite } from 'src/components/atoms/Svgs/tsx'

interface Props {
  propertyAddress: string
}

export const PropertyHeader = ({ propertyAddress }: Props) => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }

  return (
    <div
      style={{
        width: 'auto',
        position: 'relative',
        height: '562px',
        padding: '50px',
        background: `
          url('//raw.githubusercontent.com/dev-protocol/assets/master/property/${propertyAddress}/header.jpg'),
          linear-gradient(111.32deg, #2F80ED 0%, #D5E6FB 100%)`,
        backgroundSize: 'cover'
      }}
    >
      <StakesSocialWhite width={'14em'} height={undefined}></StakesSocialWhite>
      <Button size="large" style={{ float: 'right' }} disabled={isConnected} onClick={handleClick}>
        {isConnected && 'Wallet connected'}
        {!isConnected && 'Connect to a wallet'}
      </Button>
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          padding: '0 0 122px 333px',
          display: 'block'
        }}
      >
        <span style={{ background: 'white', padding: '4px' }}>Property Address</span>
        <div style={{ background: 'white' }}>{propertyAddress}</div>
      </div>
    </div>
  )
}

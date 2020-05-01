import * as React from 'react'
import { Button } from 'antd'
import { BrandLogo } from 'src/components/atoms/BrandLogo'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'

interface Props {
  colorSchema?: 'black' | 'white'
}

export const Header = ({ colorSchema = 'black' }: Props = {}) => {
  const { isConnected, connect } = useConnectWallet()
  const handleClick = () => {
    connect()
  }

  return (
    <div style={{ padding: '50px' }}>
      <BrandLogo colorSchema={colorSchema} props={{ width: '14em', height: undefined }}></BrandLogo>
      <Button size="large" style={{ float: 'right' }} disabled={isConnected} onClick={handleClick}>
        {isConnected && 'Wallet connected'}
        {!isConnected && 'Connect to a wallet'}
      </Button>
    </div>
  )
}

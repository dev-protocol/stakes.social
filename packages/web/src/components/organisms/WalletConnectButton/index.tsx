import React from 'react'
import { Button } from 'antd'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'

export const WalletConnectButton = () => {
  const { isConnected, connect } = useConnectWallet()

  const handleClick = () => {
    connect()
  }

  return (
    <Button disabled={isConnected} onClick={handleClick}>
      {isConnected && 'wallet connected'}
      {!isConnected && 'connect to wallet'}
    </Button>
  )
}

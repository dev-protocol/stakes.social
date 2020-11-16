import { Empty } from 'antd'
import { EmptyProps } from 'antd/lib/empty'
import React from 'react'
import { useConnectWallet, useProvider } from 'src/fixtures/wallet/hooks'
import { ButtonWithGradient } from '../ButtonWithGradient'

const SignIn = () => {
  const { connect, isConnecting } = useConnectWallet()
  return (
    <ButtonWithGradient loading={isConnecting} onClick={connect}>
      Sign in
    </ButtonWithGradient>
  )
}

export const NotConnectedAndEmpty = (props: EmptyProps) => {
  const { accountAddress } = useProvider()
  const isConnected = Boolean(accountAddress)
  const description = isConnected ? 'No Data' : 'Please signing in'

  return (
    <Empty description={description} {...props}>
      {isConnected ? undefined : <SignIn />}
    </Empty>
  )
}

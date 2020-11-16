import { Empty } from 'antd'
import { EmptyProps } from 'antd/lib/empty'
import React from 'react'
import { useConnectWallet } from 'src/fixtures/wallet/hooks'
import { ButtonWithGradient } from '../ButtonWithGradient'

const SignIn = () => {
  const { connect, isConnecting } = useConnectWallet()
  return (
    <ButtonWithGradient loading={isConnecting} onClick={connect}>
      Sign in
    </ButtonWithGradient>
  )
}

export const EmptyToConnect = (props: EmptyProps) => {
  const { isConnected } = useConnectWallet()
  const description = isConnected ? 'No Data' : 'Please signing in'

  return (
    <Empty description={description} {...props}>
      {isConnected ? undefined : <SignIn />}
    </Empty>
  )
}

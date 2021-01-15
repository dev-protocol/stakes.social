import React, { useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { providers } from 'web3modal'
import { Button } from 'antd'
import WalletContext from 'src/context/walletContext'
import { useProvider, useConnectWallet } from 'src/fixtures/wallet/hooks'
import { ResponsiveModal } from 'src/components/atoms/ResponsiveModal'

interface Props {}

export const WalletSettings = (_: Props) => {
  const router = useRouter()
  const { web3Modal } = useContext(WalletContext)
  const [isDisconnectModalVisible, setIsDisconnectModalVisible] = useState(false)
  const { accountAddress } = useProvider()
  const { connect, disconnect } = useConnectWallet()

  const showDisconnectModal = () => {
    setIsDisconnectModalVisible(true)
  }
  const disconnectOk = () => {
    disconnect()
    setIsDisconnectModalVisible(false)
    router.push('/')
  }
  const disconnectCancel = () => {
    setIsDisconnectModalVisible(false)
  }

  const reconnectWallet = async () => {
    await disconnect()
    await connect()
  }

  const walletName = useMemo(() => {
    return web3Modal?.cachedProvider === providers.WALLETCONNECT.id
      ? providers.WALLETCONNECT.name
      : web3Modal?.cachedProvider === providers.FORTMATIC.id
      ? providers.FORTMATIC.name
      : web3Modal?.cachedProvider === 'custom-walletlink'
      ? 'WalletLink'
      : web3Modal?.cachedProvider === providers.METAMASK.id
      ? providers.METAMASK.name
      : undefined
  }, [web3Modal?.cachedProvider])

  return walletName ? (
    <>
      <span>
        {walletName}: {accountAddress}
      </span>
      <div>
        <Button type="primary" onClick={showDisconnectModal}>
          Disconnect
        </Button>
        <Button type="primary" style={{ marginLeft: '.5em' }} onClick={reconnectWallet}>
          Change
        </Button>
        <ResponsiveModal visible={isDisconnectModalVisible} onOk={disconnectOk} onCancel={disconnectCancel}>
          <p>Disconnecting the Wallet?</p>
        </ResponsiveModal>
      </div>
    </>
  ) : (
    <></>
  )
}

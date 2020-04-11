import { useState } from 'react'

export const useConnectWallet = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false)

  const connect = async () => {
    const { ethereum } = window
    if (ethereum) {
      await ethereum
        .enable()
        .then(() => setIsConnected(true))
        .catch(() => setIsConnected(false))
    } else {
      setIsConnected(false)
    }
  }

  return { isConnected, connect }
}

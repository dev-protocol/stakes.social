import { useState, useEffect } from 'react'

export const useConnectWallet = () => {
  const [isConnected, setIsConnected] = useState<boolean>(!!window.ethereum?.connected || false)

  useEffect(() => {
    setIsConnected(window?.ethereum?.connected || false)
  }, [])

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

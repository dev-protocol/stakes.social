import { useState } from 'react'
import { useEffectAsync } from '../utility'

export const useDetectWallet = () => {
  const [isConnected, setIsConnected] = useState<boolean>(false)

  useEffectAsync(async () => {
    const { ethereum } = window
    if (ethereum) {
      await ethereum
        .enable()
        .then(() => setIsConnected(true))
        .catch(() => setIsConnected(false))
    } else {
      setIsConnected(false)
    }
  }, [])

  return { isConnected }
}

import { HttpProvider } from 'web3-core'

export interface Ethereum extends HttpProvider {
  enable: () => Promise<void>
  selectedAddress: string | null
  isConnected: () => boolean
}

declare global {
  interface Window {
    ethereum?: Ethereum
  }
}

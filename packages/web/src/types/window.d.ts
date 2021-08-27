import { HttpProvider } from 'web3-core'

export interface Ethereum extends HttpProvider {
  enable: () => Promise<void>
  selectedAddress: string | null
  isConnected: () => boolean
}

declare global {
  interface Window {
    ethereum?: Ethereum
    gtag(type: 'config', googleAnalyticsId: string, { page_path: string })
    gtag(
      type: 'event',
      eventAction: string,
      fieldObject: {
        event_label: string
        event_category: string
        value?: string
      }
    )
  }
}

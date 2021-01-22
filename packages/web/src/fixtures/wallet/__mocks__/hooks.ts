import Web3 from 'web3'

export const useConnectWallet = jest.fn(() => {
  return { isConnected: true, connect: () => {}, isConnecting: false }
})

export const useProvider = jest.fn(() => {
  return { web3: new Web3(), nonConnectedWeb3: new Web3(), accountAddress: '0x' }
})

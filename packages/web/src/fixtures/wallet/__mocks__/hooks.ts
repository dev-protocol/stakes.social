import { ethers } from 'ethers'
import Web3 from 'web3'

export const useIsL1 = jest.fn(() => {
  return { isL1: true }
})

export const useConnectWallet = jest.fn(() => {
  return { isConnected: true, connect: () => {}, isConnecting: false }
})

export const useProvider = jest.fn(() => {
  return {
    web3: new Web3(),
    ethersProvider: ethers.getDefaultProvider(),
    nonConnectedWeb3: new Web3(),
    nonConnectedEthersProvider: ethers.getDefaultProvider(),
    accountAddress: '0x'
  }
})

export const useDetectChain = () => {
  return { chainId: 1, name: 'main' }
}

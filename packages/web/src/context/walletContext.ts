import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { createContext } from 'react'

interface IWallet {
  web3?: Web3
  web3Modal?: Web3Modal
  setWeb3: Function
}

export const wallet: IWallet = {
  web3: undefined,
  web3Modal: undefined,
  setWeb3: () => {}
}

const WalletContext = createContext(wallet)

export default WalletContext

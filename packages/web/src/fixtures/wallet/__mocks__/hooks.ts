import Web3 from 'web3'

export const useProvider = () => {
  return { web3: new Web3(), nonConnectedWeb3: new Web3(), accountAddress: '0x' }
}

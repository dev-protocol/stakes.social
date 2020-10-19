import Web3 from 'web3'
import { AbiItem } from 'web3-utils'
import { message } from 'antd'

const cache: WeakMap<NonNullable<Window['ethereum']>, string> = new WeakMap()

export const isAvailableWallet = () => (window?.ethereum ? true : false)

export const connectWallet = async () => {
  const { ethereum } = window
  if (ethereum) {
    return ethereum
      .enable()
      .then(() => true)
      .catch(() => false)
  }
  return false
}

export const getAccountAddress = async () => {
  const { ethereum } = window
  if (ethereum) {
    return (async fromCache => {
      if (typeof fromCache === 'string') {
        return fromCache
      }
      const [account] = await new Web3(ethereum).eth.getAccounts()
      cache.set(ethereum, account)
      return account
    })(cache.get(ethereum))
  }
  return undefined
}

export const getSubscription = () => {
  const key = '@utility/getSubscription'
  const { ethereum } = window
  if (ethereum) {
    return () => {
      return new Web3(ethereum).eth
        .subscribe('newBlockHeaders', (error, result) => {
          if (error) throw error
          return result
        })
        .on('connected', subscriptionId => console.log(subscriptionId))
        .on('data', blockHeader => message.loading({ content: `blockHeader: ${blockHeader.number}`, key }))
        .on('error', error => message.error({ content: error.message, key }))
    }
  }
  return undefined
}

export const getBlockNumber = async () => {
  const { ethereum } = window
  if (ethereum) {
    return await new Web3(ethereum).eth.getBlockNumber()
  }
  return undefined
}

export const sign = async (message: string) => {
  const { ethereum } = window
  if (ethereum) {
    const address = await getAccountAddress()
    if (address === undefined) {
      return undefined
    }
    const signature = await new Web3(ethereum).eth.personal.sign(message, address, '')
    return signature
  }
  return undefined
}

export const getDevAmount = async (walletAddress: string) => {
  const abi: AbiItem[] = [
    {
      constant: true,
      inputs: [{ name: '_owner', type: 'address' }],
      name: 'balanceOf',
      outputs: [{ name: 'balance', type: 'uint256' }],
      stateMutability: 'view',
      payable: false,
      type: 'function'
    },
    {
      constant: true,
      inputs: [],
      name: 'decimals',
      outputs: [{ name: '', type: 'uint8' }],
      stateMutability: 'view',
      payable: false,
      type: 'function'
    }
  ]
  const { ethereum } = window
  if (ethereum) {
    const web3 = new Web3(ethereum)
    // dev value of team wallet
    const contract: any = new web3.eth.Contract(abi, '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26')
    const balance = await contract.methods.balanceOf(walletAddress).call()
    return balance
  }
  return undefined
}

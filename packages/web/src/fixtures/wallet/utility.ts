import Web3 from 'web3'
import { message } from 'antd'

const cache: WeakMap<NonNullable<Window['ethereum']>, string> = new WeakMap()

export const isAvailableWallet = () => (window?.ethereum ? true : false)

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

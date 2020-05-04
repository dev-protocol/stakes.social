import Web3 from 'web3'

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

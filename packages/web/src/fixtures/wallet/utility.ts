import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { AbiItem } from 'web3-utils'
import { message } from 'antd'
import { WEB3_PROVIDER_ENDPOINT } from 'src/fixtures/wallet/constants'

const cache: WeakMap<NonNullable<Web3>, string> = new WeakMap()

type signCache = {
  message: string
  signature: string
}

const signCacheContainer: Map<string, signCache> = new Map()

export const connectWallet = async (setWeb3Handler: Function, web3Modal?: Web3Modal) => {
  const provider = await web3Modal?.connect().catch(() => {
    return undefined
  })
  if (provider === undefined) {
    return false
  }

  const web3: Web3 = new Web3(provider)
  if (web3) {
    setWeb3Handler(web3)
    const account = await web3.eth
      .getAccounts()
      .then((accounts: Array<String>) => {
        if (accounts.length === 0) {
          return false
        }
        return true
      })
      .catch((error: any) => {
        message.error({ content: error.message, key: 'connectWallet' })
        return false
      })
    return account
  }
  return false
}

export const getAccountAddress = async (web3?: Web3) => {
  if (web3) {
    return (async fromCache => {
      if (typeof fromCache === 'string') {
        return fromCache
      }
      const [account] = await web3.eth.getAccounts()
      cache.set(web3, account)
      return account
    })(cache.get(web3))
  }
  return undefined
}

export const getSubscription = () => {
  const key = '@utility/getSubscription'
  const web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
  if (web3) {
    return () => {
      return web3.eth
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
  const web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
  if (web3) {
    return await web3.eth.getBlockNumber()
  }
  return undefined
}

export const sign = async (web3: any, inputMessage: string) => {
  const key = '@utility/web3sign'
  if (web3) {
    const address = await getAccountAddress(web3)
    if (address === undefined) {
      return undefined
    }
    const signature = await new web3.eth.personal.sign(inputMessage, address, '')
      .then((result: string) => result)
      .catch((error: any) => {
        message.error({ content: error.message, key })
        return undefined
      })
    return signature
  }
  return undefined
}

export const signWithCache = async (web3: any, inputMessage: string) => {
  const key = '@utility/web3sign'
  if (web3) {
    const address = await getAccountAddress(web3)
    if (address === undefined) {
      return { signature: undefined, message: undefined }
    }

    const c = signCacheContainer.get(address)
    if (c) {
      return { signature: c.signature, message: c.message }
    }

    const signature = await new web3.eth.personal.sign(inputMessage, address, '')
      .then((result: string) => result)
      .catch((error: any) => {
        message.error({ content: error.message, key })
        return undefined
      })

    if (signature !== undefined) {
      signCacheContainer.set(address, { signature, message: inputMessage })
    }
    return { signature, message: inputMessage }
  }
  return { signature: undefined, message: undefined }
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

  const web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
  if (web3) {
    // dev value of team wallet
    const contract: any = new web3.eth.Contract(abi, '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26')
    const balance = await contract.methods.balanceOf(walletAddress).call()
    return balance
  }
  return undefined
}

export const getBlock = async (blockNumber: number) => {
  const web3 = new Web3(WEB3_PROVIDER_ENDPOINT)
  if (web3) {
    return (await web3.eth.getBlock(blockNumber)).timestamp
  }
  return undefined
}

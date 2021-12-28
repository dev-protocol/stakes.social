import { providers } from 'ethers'
import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { connectWallet, detectChain, disconnectWallet, getAccountAddress } from './utility'

jest.mock('web3')
jest.mock('ethers')
jest.mock('web3modal')

describe('wallet utility', () => {
  describe('getAccountAddress', () => {
    test('Returns undefined as a value when web3 not existed', async () => {
      const result = await getAccountAddress()
      expect(result).toBe(undefined)
    })

    test('Returns account address as a value when web3 existed', async () => {
      ;(Web3 as unknown as jest.Mock).mockImplementation(() => ({
        eth: {
          getAccounts: async () => ['0x...']
        }
      }))
      const web3 = new Web3()
      const result = await getAccountAddress(web3)
      expect(result).toBe('0x...')
    })

    test('Returns account address from the cache as a value when web3 providerexisted and 2nd subsequent call', async () => {
      const getAccounts = jest.fn(async () => ['0x...'])
      ;(Web3 as unknown as jest.Mock).mockImplementation(() => ({
        eth: {
          getAccounts
        }
      }))
      const web3 = new Web3()
      await getAccountAddress(web3) // First call
      await getAccountAddress(web3) // Second call
      const result = await getAccountAddress(web3) // Third call
      expect(result).toBe('0x...')
      expect(getAccounts.mock.calls.length).toBe(1)
    })
  })

  describe('connectWallet', () => {
    test('connect success', async () => {
      const web3Modal = new Web3Modal()
      web3Modal.connect = jest.fn(() => Promise.resolve({}))
      ;(Web3 as unknown as jest.Mock).mockImplementation(() => ({
        eth: {
          getAccounts: async () => ['0x...']
        }
      }))
      const result = await connectWallet(
        jest.fn(() => true),
        web3Modal
      )
      expect(result).toBe(true)
    })

    test('fail to web3Modal connect', async () => {
      const web3Modal = new Web3Modal()
      web3Modal.connect = jest.fn(() => Promise.reject({}))
      const result = await connectWallet(
        jest.fn(() => true),
        web3Modal
      )
      expect(result).toBe(false)
    })
  })

  describe('disconnectWallet', () => {
    test('smoke test', async () => {
      const setWeb3Handler = jest.fn(() => true)
      const web3Modal = new Web3Modal()
      web3Modal.clearCachedProvider = jest.fn(() => true)
      await disconnectWallet(setWeb3Handler, web3Modal)
      expect((web3Modal.clearCachedProvider as jest.Mock).mock.calls.length).toBe(1)
      expect(setWeb3Handler.mock.calls.length).toBe(1)
    })
  })

  describe('detectChain', () => {
    test('Returns undefined when the detected chainId is not supported', async () => {
      const mock = { getNetwork: () => Promise.resolve({ chainId: 99999 }) } as unknown as providers.BaseProvider
      const result = await detectChain(mock)
      expect(result.chainId).toBe(99999)
      expect(result.name).toBe(undefined)
    })
    test('Detect mainnet', async () => {
      const mock = { getNetwork: () => Promise.resolve({ chainId: 1 }) } as unknown as providers.BaseProvider
      const result = await detectChain(mock)
      expect(result.chainId).toBe(1)
      expect(result.name).toBe('ethereum')
    })
    test('Detect ropsten', async () => {
      const mock = { getNetwork: () => Promise.resolve({ chainId: 3 }) } as unknown as providers.BaseProvider
      const result = await detectChain(mock)
      expect(result.chainId).toBe(3)
      expect(result.name).toBe('ropsten')
    })
    test('Detect arbitrum one', async () => {
      const mock = { getNetwork: () => Promise.resolve({ chainId: 42161 }) } as unknown as providers.BaseProvider
      const result = await detectChain(mock)
      expect(result.chainId).toBe(42161)
      expect(result.name).toBe('arbitrum-one')
    })
    test('Detect arbitrum rinkeby', async () => {
      const mock = { getNetwork: () => Promise.resolve({ chainId: 421611 }) } as unknown as providers.BaseProvider
      const result = await detectChain(mock)
      expect(result.chainId).toBe(421611)
      expect(result.name).toBe('arbitrum-rinkeby')
    })
  })
})

import Web3 from 'web3'
import Web3Modal from 'web3modal'
import { connectWallet, disconnectWallet, getAccountAddress, getDevAmount } from './utility'

jest.mock('web3')
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

  describe('getDevAmount', () => {
    test('Return amount value', async () => {
      const data = 9876543210123456789
      const fakeContract = function () {}
      fakeContract.prototype = {
        methods: {
          balanceOf: () => {
            return {
              call: async () => {
                return data
              }
            }
          }
        }
      }
      ;(Web3 as unknown as jest.Mock).mockImplementation(() => ({
        eth: {
          Contract: fakeContract
        }
      }))
      const result = await getDevAmount('0x1234567890')
      expect(result).toBe(data)
    })

    test('Return amount value', async () => {
      const data = 9876543210123456789
      const fakeContract = function () {}
      fakeContract.prototype = {
        methods: {
          balanceOf: () => {
            return {
              call: async () => {
                return data
              }
            }
          }
        }
      }
      window.ethereum = {} as any
      ;(Web3 as unknown as jest.Mock).mockImplementation(() => ({
        eth: {
          Contract: fakeContract
        }
      }))
      const result = await getDevAmount('0x1234567890')
      expect(result).toBe(data)
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
})

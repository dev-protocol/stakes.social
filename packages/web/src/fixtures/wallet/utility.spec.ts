import Web3 from 'web3'
import { getAccountAddress, getDevAmount } from './utility'

jest.mock('web3')

describe('wallet utility', () => {
  describe('getAccountAddress', () => {
    test('Returns undefined as a value when web3 not existed', async () => {
      const result = await getAccountAddress()
      expect(result).toBe(undefined)
    })

    test('Returns account address as a value when web3 existed', async () => {
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
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
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
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
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
        eth: {
          Contract: fakeContract
        }
      }))
      const result = await getDevAmount('0x1234567890')
      expect(result).toBe(data)
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
      window.ethereum = {} as any
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
        eth: {
          Contract: fakeContract
        }
      }))
      const result = await getDevAmount('0x1234567890')
      expect(result).toBe(data)
    })
  })
})

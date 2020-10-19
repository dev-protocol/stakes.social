import Web3 from 'web3'
import { getAccountAddress, getDevAmount } from './utility'

jest.mock('web3')

describe('wallet utility', () => {
  describe('getAccountAddress', () => {
    test('Returns undefined as a value when window.ethereum not existed', async () => {
      const result = await getAccountAddress()
      expect(window.ethereum).toBe(undefined)
      expect(result).toBe(undefined)
    })

    test('Returns account address as a value when window.ethereum existed', async () => {
      window.ethereum = {} as any
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
        eth: {
          getAccounts: async () => ['0x...']
        }
      }))
      const result = await getAccountAddress()
      expect(window.ethereum).not.toBe(undefined)
      expect(result).toBe('0x...')
      delete window.ethereum
    })

    test('Returns account address from the cache as a value when window.ethereum existed and 2nd subsequent call', async () => {
      window.ethereum = {} as any
      const getAccounts = jest.fn(async () => ['0x...'])
      ;((Web3 as unknown) as jest.Mock).mockImplementation(() => ({
        eth: {
          getAccounts
        }
      }))
      await getAccountAddress() // First call
      await getAccountAddress() // Second call
      const result = await getAccountAddress() // Third call
      expect(window.ethereum).not.toBe(undefined)
      expect(result).toBe('0x...')
      expect(getAccounts.mock.calls.length).toBe(1)
      delete window.ethereum
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

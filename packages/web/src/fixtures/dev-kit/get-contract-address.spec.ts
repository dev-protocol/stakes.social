/* eslint-disable @typescript-eslint/no-unused-vars */
import { DevkitContract } from '@devprotocol/dev-kit'
import { getContractAddress } from './get-contract-address'
import { addresses } from '@devprotocol/dev-kit'

describe('get-contract-address.ts', () => {
  describe('getContractAddress', () => {
    test('Returns address as a value, and third-argument is "main" by default', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          lockup: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup')
      expect(result).toBe('LOCKUP_ADDRESS')
      expect(devkit.registry.mock.calls[0][0]).toBe(addresses.eth.main.registry)
    })
    test('Returns address as a value, and third-argument is "ropsten"', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          lockup: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'ropsten')
      expect(result).toBe('LOCKUP_ADDRESS')
      expect(devkit.registry.mock.calls[0][0]).toBe(addresses.eth.ropsten.registry)
    })
    test('Returns address as a value, and third-argument is "arbitrum-one-main"', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          lockup: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'arbitrum-one-main')
      expect(result).toBe('LOCKUP_ADDRESS')
      expect(devkit.registry.mock.calls[0][0]).toBe(addresses.arbitrumOne.main.registry)
    })
    test('Returns address as a value, and third-argument is "arbitrum-one-rinkeby"', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          lockup: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'arbitrum-one-rinkeby')
      expect(result).toBe('LOCKUP_ADDRESS')
      expect(devkit.registry.mock.calls[0][0]).toBe(addresses.arbitrumOne.rinkeby.registry)
    })
  })
  describe('Caching', () => {
    test('Returns address from the cache when 2nd subsequent call', async () => {
      const lockup = jest.fn().mockImplementation(async () => Promise.resolve('LOCKUP_ADDRESS'))
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          lockup
        }))
      }
      await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'CACHE_TEST' as any) // First
      await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'CACHE_TEST' as any) // Second
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'CACHE_TEST' as any) // Third
      expect(result).toBe('LOCKUP_ADDRESS')
      expect(lockup.mock.calls.length).toBe(1)
    })
  })
})

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
    test('Returns address as a value, and third-argument is "arbitrum-one"', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          registries: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'arbitrum-one')
      expect(result).toBe(addresses.arbitrum.one.lockup)
    })
    test('Returns address as a value, and third-argument is "arbitrum-rinkeby"', async () => {
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          registries: async () => Promise.resolve('LOCKUP_ADDRESS')
        }))
      }
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'lockup', 'arbitrum-rinkeby')
      expect(result).toBe(addresses.arbitrum.rinkeby.lockup)
    })
  })
  describe('Caching', () => {
    test('Returns address from the cache when 2nd subsequent call', async () => {
      const cacheTest = jest.fn().mockImplementation(async () => Promise.resolve('ADDRESS'))
      const devkit = {
        registry: jest.fn().mockImplementation((address: string) => ({
          cacheTest
        }))
      }
      await getContractAddress(devkit as unknown as DevkitContract, 'cacheTest' as any, 'ethereum') // First
      await getContractAddress(devkit as unknown as DevkitContract, 'cacheTest' as any, 'ethereum') // Second
      const result = await getContractAddress(devkit as unknown as DevkitContract, 'cacheTest' as any, 'ethereum') // Third
      expect(result).toBe('ADDRESS')
      expect(cacheTest.mock.calls.length).toBe(1)
    })
  })
})

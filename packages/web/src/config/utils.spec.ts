import { isDenyProperty } from './utils'

jest.mock('./denylist.json', () => {
  return {
    ethereum: ['0x1122', '0x1133'],
    ropsten: [],
    'arbitrum-one': ['0x1122']
  }
})

describe('config utils', () => {
  describe('isDenyProperty', () => {
    test('return true, network=ethereum', () => {
      const network = 'ethereum'
      const property = '0x1122'
      const result = isDenyProperty(network, property)
      expect(result).toBe(true)
    })

    test('return true, network=arbitrum-one', () => {
      const network = 'arbitrum-one'
      const property = '0x1122'
      const result = isDenyProperty(network, property)
      expect(result).toBe(true)
    })

    test('return false, network=ethereum', () => {
      const network = 'ethereum'
      const property = '0x1144'
      const result = isDenyProperty(network, property)
      expect(result).toBe(false)
    })

    test('return false with empty list', () => {
      const network = 'ropsten'
      const property = '0x1144'
      const result = isDenyProperty(network, property)
      expect(result).toBe(false)
    })

    test('return false, network=arbitrum-one', () => {
      const network = 'arbitrum-one'
      const property = '0x1133'
      const result = isDenyProperty(network, property)
      expect(result).toBe(false)
    })

    test('return false, network=polygon', () => {
      const network = 'polygon'
      const property = '0x1133'
      const result = isDenyProperty(network, property)
      expect(result).toBe(false)
    })
  })
})

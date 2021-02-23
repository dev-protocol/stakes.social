import Web3 from 'web3'
import { utils } from '@devprotocol/dev-kit'
import { createContract } from 'src/fixtures/utility/contract-client'
import { intermediateProcess } from './client'

const { execute } = utils

jest.mock('@devprotocol/dev-kit')
jest.mock('web3')
jest.mock('src/fixtures/utility/contract-client')

describe('incubator clients', () => {
  describe('intermediateProcess', () => {
    test('twitter status id with url', async () => {
      const web3 = new Web3()
      ;(createContract as jest.Mock).mockImplementation(() => ({ address: '0x0011' }))
      ;(execute as jest.Mock).mockReturnValue(true)
      intermediateProcess(web3, '', '', 'https://twitter.com/staus/123', '')
      expect((utils.execute as jest.Mock).mock.calls.length).toBe(1)
      expect((utils.execute as jest.Mock).mock.calls[0][0].args[2]).toBe('123')
    })

    test('twitter status id without url', async () => {
      const web3 = new Web3()
      ;(createContract as jest.Mock).mockImplementation(() => ({ address: '0x0011' }))
      ;(execute as jest.Mock).mockReturnValue(true)
      intermediateProcess(web3, '', '', '123', '')
      expect((utils.execute as jest.Mock).mock.calls.length).toBe(1)
      expect((utils.execute as jest.Mock).mock.calls[0][0].args[2]).toBe('123')
    })
  })
})

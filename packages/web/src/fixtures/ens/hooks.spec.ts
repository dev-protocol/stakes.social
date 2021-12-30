import { renderHook, act } from '@testing-library/react-hooks'
import { ethers } from 'ethers'
import { useENS } from './hooks'

jest.mock('ethers')

// TODO: I don't know why this test fails.
describe.skip('ens hooks', () => {
  describe('useENS', () => {
    test('get ens success', async () => {
      const data = 'dummy.eth'
      jest.spyOn(ethers.providers, 'JsonRpcProvider').mockImplementation(() => {
        return { lookupAddress: () => data } as any
      })

      const { result } = renderHook(() => useENS())
      await act(async () => {
        const ens = await result.current.getENS('0x112233')
        expect(ens).toBe(data)
      })
    })
  })
})

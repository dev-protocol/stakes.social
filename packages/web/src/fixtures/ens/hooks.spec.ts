import { renderHook, act } from '@testing-library/react-hooks'
import { providers } from 'ethers'
import useSWR from 'swr'
import { useENS } from './hooks'
import { getAccountAddress } from 'src/fixtures/wallet/utility'

jest.mock('ethers')
jest.mock('swr')
jest.mock('src/fixtures/wallet/utility.ts')

describe('ens hooks', () => {
  describe('useENS', () => {
    test('get ens success', async () => {
      const address = '0x112233'
      const data = 'dummy.eth'
      jest.spyOn(providers, 'JsonRpcProvider').mockImplementation(() => {
        return { lookupAddress: () => data } as any
      })
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data: { chianId: 3, name: 'ropsten' }, error: undefined }))
      ;(getAccountAddress as jest.Mock).mockResolvedValue(address)

      const { result } = renderHook(() => useENS())
      await act(async () => {
        const ens = await result.current.getENS(address)
        expect(ens).toBe(data)
      })
    })
  })
})

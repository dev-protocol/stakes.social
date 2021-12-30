import { renderHook, act } from '@testing-library/react-hooks'
import { useConnectWallet, useDetectChain } from './hooks'
import { connectWallet, detectChain } from 'src/fixtures/wallet/utility'

jest.mock('src/fixtures/wallet/utility.ts')

describe('useConnectWallet', () => {
  test('connect & disconnect', async () => {
    ;(connectWallet as jest.Mock).mockImplementation(() => Promise.resolve(true))
    const { result } = renderHook(() => useConnectWallet())
    await act(async () => {
      await result.current.connect()
    })
    expect(result.current.isConnected).toBe(true)
    expect(result.current.isConnecting).toBe(false)

    await act(async () => {
      await result.current.disconnect()
    })
    expect(result.current.isConnected).toBe(false)
    expect(result.current.isConnecting).toBe(false)
  })
})

// TODO: Test it!
describe.skip('useDetectChain', () => {
  test('Returns the response of detectChain', async () => {
    ;(detectChain as jest.Mock).mockImplementation(() => Promise.resolve({ chainId: 9999, name: 'test' }))
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain({} as any))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(9999)
    expect(result.current.name).toBe('test')
  })
})

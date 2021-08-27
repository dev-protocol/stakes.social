import { renderHook, act } from '@testing-library/react-hooks'
import { useConnectWallet } from './hooks'
import { connectWallet } from 'src/fixtures/wallet/utility'

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

import { renderHook, act } from '@testing-library/react-hooks'
import { useConnectWallet, useDetectChain } from './hooks'
import { connectWallet } from 'src/fixtures/wallet/utility'
import { providers } from 'ethers'

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

describe('useDetectChain', () => {
  test('Returns undefined when the detected chainId is not supported', async () => {
    const mock = { getNetwork: () => Promise.resolve({ chainId: 99999 }) } as unknown as providers.BaseProvider
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain(mock))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(99999)
    expect(result.current.name).toBe(undefined)
  })
  test('Detect mainnet', async () => {
    const mock = { getNetwork: () => Promise.resolve({ chainId: 1 }) } as unknown as providers.BaseProvider
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain(mock))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(1)
    expect(result.current.name).toBe('main')
  })
  test('Detect ropsten', async () => {
    const mock = { getNetwork: () => Promise.resolve({ chainId: 3 }) } as unknown as providers.BaseProvider
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain(mock))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(3)
    expect(result.current.name).toBe('ropsten')
  })
  test('Detect arbitrum one main', async () => {
    const mock = { getNetwork: () => Promise.resolve({ chainId: 42161 }) } as unknown as providers.BaseProvider
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain(mock))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(42161)
    expect(result.current.name).toBe('arbitrum-one-main')
  })
  test('Detect arbitrum one rinkeby', async () => {
    const mock = { getNetwork: () => Promise.resolve({ chainId: 421611 }) } as unknown as providers.BaseProvider
    const { result, waitForNextUpdate } = renderHook(() => useDetectChain(mock))
    await waitForNextUpdate()
    expect(result.current.chainId).toBe(421611)
    expect(result.current.name).toBe('arbitrum-one-rinkeby')
  })
})

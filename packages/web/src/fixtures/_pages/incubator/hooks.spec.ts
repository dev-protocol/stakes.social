import { renderHook, act } from '@testing-library/react-hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { waitForCreateMetrics } from 'src/fixtures/dev-kit/client'
import { useAuthenticate, useIntermediateProcess } from './hooks'
import { authenticate, getPropertyAddress, intermediateProcess, waitForFinishEvent } from './client'

jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/dev-kit/client.ts')
jest.mock('src/fixtures/_pages/incubator/client.ts')

describe('incubator hooks', () => {
  describe('useAuthenticate', () => {
    test('auth and wait create metrics', async () => {
      const githubRepository = 'dev-protocol/statkes.social'
      const publicSignature = 'dummysignature123456'
      const error = undefined
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {} }))
      ;(authenticate as jest.Mock).mockImplementation(() => Promise.resolve())
      ;(getPropertyAddress as jest.Mock).mockImplementation(() => Promise.resolve('0x1234'))
      ;(waitForCreateMetrics as jest.Mock).mockImplementation(() => Promise.resolve('0x1234'))
      const { result, waitForNextUpdate } = renderHook(() => useAuthenticate())
      act(() => {
        result.current.authenticate(githubRepository, publicSignature)
        result.current.waitForCreateMetrics(githubRepository)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isWaiting).toBe(false)
      expect((authenticate as jest.Mock).mock.calls.length).toBe(1)
      expect((getPropertyAddress as jest.Mock).mock.calls.length).toBe(1)
      expect((waitForCreateMetrics as jest.Mock).mock.calls.length).toBe(1)
    })

    test('authenticate error', async () => {
      const githubRepository = 'dev-protocol/statkes.social'
      const publicSignature = 'dummysignature123456'
      const error = new Error('auth error')
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {} }))
      ;(authenticate as jest.Mock).mockImplementation(() => Promise.reject(error))
      const { result, waitForNextUpdate } = renderHook(() => useAuthenticate())
      act(() => {
        result.current.authenticate(githubRepository, publicSignature)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isWaiting).toBe(false)
      expect((authenticate as jest.Mock).mock.calls.length).toBe(1)
    })

    test('waitForCreateMetrics error', async () => {
      const githubRepository = 'dev-protocol/statkes.social'
      const publicSignature = 'dummysignature123456'
      const error = new Error('wait error')
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {} }))
      ;(authenticate as jest.Mock).mockImplementation(() => Promise.resolve())
      ;(getPropertyAddress as jest.Mock).mockImplementation(() => Promise.resolve('0x1234'))
      ;(waitForCreateMetrics as jest.Mock).mockImplementation(() => Promise.reject(error))
      const { result, waitForNextUpdate } = renderHook(() => useAuthenticate())
      act(() => {
        result.current.authenticate(githubRepository, publicSignature)
        result.current.waitForCreateMetrics(githubRepository)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isWaiting).toBe(false)
      expect((authenticate as jest.Mock).mock.calls.length).toBe(1)
      expect((getPropertyAddress as jest.Mock).mock.calls.length).toBe(1)
      expect((waitForCreateMetrics as jest.Mock).mock.calls.length).toBe(1)
    })
  })

  describe('useIntermediateProcess', () => {
    test('intermediate process and wait for finish event', async () => {
      const githubRepository = 'dev-protocol/statkes.social'
      const address = '0x9988776655'
      const twitterStatusId = '98761'
      const publicSignature4twitter = 'dummysignature123456'
      const publicSignature4github = 'dummysignature654321'
      const error = undefined
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {} }))
      ;(intermediateProcess as jest.Mock).mockImplementation(() => Promise.resolve())
      ;(waitForFinishEvent as jest.Mock).mockImplementation(() => Promise.resolve('0x9988776655'))
      const { result, waitForNextUpdate } = renderHook(() => useIntermediateProcess())
      act(() => {
        result.current.intermediateProcess(githubRepository, address, twitterStatusId, publicSignature4twitter)
        result.current.waitForFinishEvent(publicSignature4github)
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(error)
      expect(result.current.isWaiting).toBe(false)
      expect((intermediateProcess as jest.Mock).mock.calls.length).toBe(1)
      expect((waitForFinishEvent as jest.Mock).mock.calls.length).toBe(1)
    })
  })
})

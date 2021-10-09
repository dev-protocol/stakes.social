import { renderHook, act } from '@testing-library/react-hooks'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { waitForCreateMetrics } from 'src/fixtures/dev-kit/client'
import { useAuthenticate, useGetEntireRewards, useGetReward, useIntermediateProcess, useIsFinished } from './hooks'
import { authenticate, getPropertyAddress, intermediateProcess, waitForFinishEvent } from './client'
import BigNumber from 'bignumber.js'
import { useCurrency } from 'src/fixtures/currency/hooks'
import useSWR from 'swr'
import { toNaturalNumber } from 'src/fixtures/utility'

jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/dev-kit/client.ts')
jest.mock('src/fixtures/_pages/incubator/client.ts')
jest.mock('src/fixtures/currency/functions/useCurrency')
jest.mock('swr')
jest.mock('src/fixtures/dev-for-apps/hooks')

describe('incubator hooks', () => {
  describe('useAuthenticate', () => {
    test('auth and wait create metrics', async () => {
      const githubRepository = 'dev-protocol/statkes.social'
      const publicSignature = 'dummysignature123456'
      const error = undefined
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {}, ethersProvider: {} }))
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
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {}, ethersProvider: {} }))
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
      ;(useProvider as jest.Mock).mockImplementation(() => ({ accountAddress: '', web3: {}, ethersProvider: {} }))
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

  describe('useGetReward', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetReward('repos'))
      expect(result.current.reward).toBe(data)
      expect(result.current.inDEV).toBe(data)
      expect(result.current.inUSD).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetReward('repos'))
      expect(result.current.reward).toBe(data)
      expect(result.current.inDEV).toBe(data)
      expect(result.current.inUSD).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetReward('repos'))
      expect(result.current.reward?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.inDEV?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.inUSD?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and USD', () => {
      const data = '10000'
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetReward('repos'))
      expect(result.current.reward?.toFixed()).toBe(toNaturalNumber(data).times(3).toFixed())
      expect(result.current.inDEV?.toFixed()).toBe(toNaturalNumber(data).toFixed())
      expect(result.current.inUSD?.toFixed()).toBe(toNaturalNumber(data).times(3).toFixed())
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetReward('repos'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetEntireRewards', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEntireRewards())
      expect(result.current.reward).toBe(data)
      expect(result.current.inDEV).toBe(data)
      expect(result.current.inUSD).toBe(data)
      expect(result.current.currency).toBe('DEV')
    })

    test('data is undefined and USD', () => {
      const data = undefined
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEntireRewards())
      expect(result.current.reward).toBe(data)
      expect(result.current.inDEV).toBe(data)
      expect(result.current.inUSD).toBe(data)
      expect(result.current.currency).toBe('USD')
    })

    test('success fetching data', () => {
      const data = ['10000']
      const error = undefined
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEntireRewards())
      expect(result.current.reward?.toFixed()).toBe(toNaturalNumber(data[0]).toFixed())
      expect(result.current.inDEV?.toFixed()).toBe(toNaturalNumber(data[0]).toFixed())
      expect(result.current.inUSD?.toFixed()).toBe(toNaturalNumber(data[0]).toFixed())
      expect(result.current.currency).toBe('DEV')
    })

    test('success fetching data and USD', () => {
      const data = ['10000']
      const error = undefined
      const toCurrency = (x: BigNumber) => x.times(3)
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'USD', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEntireRewards())
      expect(result.current.reward?.toFixed()).toBe(toNaturalNumber(data[0]).times(3).toFixed())
      expect(result.current.inDEV?.toFixed()).toBe(toNaturalNumber(data[0]).toFixed())
      expect(result.current.inUSD?.toFixed()).toBe(toNaturalNumber(data[0]).times(3).toFixed())
      expect(result.current.currency).toBe('USD')
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      const toCurrency = (x?: BigNumber) => x
      ;(useCurrency as jest.Mock).mockImplementationOnce(() => ({ currency: 'DEV', toCurrency, devToUSD: toCurrency }))
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetEntireRewards())
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useIsFinished', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useIsFinished('test'))
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(error)
    })

    test('success fetching data', () => {
      const data = true
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useIsFinished('test'))
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(error)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useIsFinished('test'))
      expect(result.current.data).toBe(data)
      expect(result.current.error).toBe(error)
    })
  })
})

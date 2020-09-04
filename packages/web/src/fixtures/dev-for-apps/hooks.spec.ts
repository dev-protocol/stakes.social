import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { useGetUser, usePostUser, useGetPropertyTags, usePostPropertyTags } from './hooks'
import { postUser, postPropertyTags } from './utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')

describe('dev-for-apps hooks for user profile', () => {
  describe('useGetUser', () => {
    test('success get profile', async () => {
      const data = { displayName: 'Get Your Dispaly Name' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetUser('0x01234567890'))
      expect(result.current.data).toBe(data)
    })

    test('failure get profile', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetUser('0x01234567890'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('usePostUser', () => {
    test('success post profile', async () => {
      const data = { displayName: 'Posted Your Dispaly Name' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postUser as jest.Mock).mockResolvedValue({ displayName: 'name' })
      const { result } = renderHook(() => usePostUser('0x01234567890'))
      expect(result.current.data).toBe(data)
    })

    test('failure post profile', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postUser as jest.Mock).mockResolvedValue({ displayName: 'name' })
      const { result, waitForNextUpdate } = renderHook(() => usePostUser('0x01234567890'))
      act(() => {
        result.current.postUserHandler('dummy')
      })
      await waitForNextUpdate()
      expect(result.current.isLoading).toBe(false)
    })
  })
})

describe('dev-for-apps hooks for property tags', () => {
  describe('useGetPropertyTags', () => {
    test('success get property tags', async () => {
      const data = { tags: ['dummy', 'tag'] }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPropertyTags('0x01234567890'))
      expect(result.current.data).toBe(data)
    })

    test('failure get profile', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPropertyTags('0x01234567890'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('usePostPropertyTags', () => {
    test('success post property tags', async () => {
      const propertyAddress = '0x01234567890'
      const accountAddress = '0x09876543210'
      const data = { tags: ['dummy', 'post', 'tag'] }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postPropertyTags as jest.Mock).mockResolvedValue(data)
      const { result } = renderHook(() => usePostPropertyTags(propertyAddress, accountAddress))
      expect(result.current.data).toBe(data)
    })

    test('failure post property tags', async () => {
      const propertyAddress = '0x01234567890'
      const accountAddress = '0x09876543210'
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postPropertyTags as jest.Mock).mockResolvedValue({ tags: ['dummy', 'post', 'tag'] })
      const { result, waitForNextUpdate } = renderHook(() => usePostPropertyTags(propertyAddress, accountAddress))
      act(() => {
        result.current.postPropertyTagsHandler('dummy tags')
      })
      await waitForNextUpdate()
      expect(result.current.isLoading).toBe(false)
    })
  })
})

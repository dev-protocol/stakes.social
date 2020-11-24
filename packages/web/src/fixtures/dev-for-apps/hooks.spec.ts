import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import {
  useGetPropertyTags,
  usePostPropertyTags,
  useGetProperty,
  useUploadAccountAvatar,
  useUploadAccountCoverImages
} from './hooks'
import { postPropertyTags } from './utility'
import { signWithCache } from 'src/fixtures/wallet/utility'
import { useUploadFile } from './functions/useUploadFile'
import { useGetAccount } from './functions/useGetAccount'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')
jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/dev-for-apps/functions/useUploadFile')
jest.mock('src/fixtures/dev-for-apps/functions/useGetAccount')

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

describe('dev-for-apps hooks with strapi for account', () => {
  describe('useUploadAccountAvatar', () => {
    test('success post file', async () => {
      const mockHandler = jest.fn().mockImplementation(jest.fn().mockImplementation(() => Promise.resolve()))
      const mockMutate = jest.fn().mockImplementation(() => {})
      ;(useGetAccount as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: mockMutate }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: mockHandler,
        isLoading: false
      }))
      const { result } = renderHook(() => useUploadAccountAvatar('0x01234567890'))
      await act(() => {
        result.current.upload('image data')
      })
      expect(mockHandler.mock.calls[0][0]).toBe(123)
      expect(mockHandler.mock.calls[0][1]).toBe('Account')
      expect(mockHandler.mock.calls[0][2]).toBe('portrait')
      expect(mockHandler.mock.calls[0][3]).toBe('image data')
      expect(mockHandler.mock.calls[0][4]).toBe('assets/0x01234567890')
      expect(mockMutate.mock.calls.length).toBe(1)
    })

    test('failure post file', async () => {
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useGetAccount as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: () => {} }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: () => Promise.resolve(),
        isLoading: false,
        error
      }))
      const { result } = renderHook(() => useUploadAccountAvatar('0x01234567890'))
      act(() => {
        result.current.upload({})
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useUploadAccountCoverImages', () => {
    test('success post file', async () => {
      const mockHandler = jest.fn().mockImplementation(jest.fn().mockImplementation(() => Promise.resolve()))
      const mockMutate = jest.fn().mockImplementation(() => {})
      ;(useGetAccount as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: mockMutate }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: mockHandler,
        isLoading: false
      }))
      const { result } = renderHook(() => useUploadAccountCoverImages('0x01234567890'))
      await act(() => {
        result.current.upload('image data')
      })
      expect(mockHandler.mock.calls[0][0]).toBe(123)
      expect(mockHandler.mock.calls[0][1]).toBe('Account')
      expect(mockHandler.mock.calls[0][2]).toBe('cover_images')
      expect(mockHandler.mock.calls[0][3]).toBe('image data')
      expect(mockHandler.mock.calls[0][4]).toBe('assets/0x01234567890/cover_images')
      expect(mockMutate.mock.calls.length).toBe(1)
    })

    test('failure post file', async () => {
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useGetAccount as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: () => {} }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: () => Promise.resolve(),
        isLoading: false,
        error
      }))
      const { result } = renderHook(() => useUploadAccountCoverImages('0x01234567890'))
      act(() => {
        result.current.upload({})
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

describe('dev-for-apps hooks with strapi for property', () => {
  describe('useGetProperty', () => {
    test('give undefined', async () => {
      const { result } = renderHook(() => useGetProperty())
      expect(result.current.data).toBe(undefined)
    })

    test('success get property', async () => {
      const data = [{ a: 'a' }]
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetProperty('0x01234567890'))
      expect(result.current.data).toEqual({ a: 'a' })
    })

    test('failure get profile', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetProperty('0x01234567890'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

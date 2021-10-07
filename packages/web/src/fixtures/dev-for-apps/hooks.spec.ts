import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import {
  useGetPropertyTags,
  usePostPropertyTags,
  useCreateAccount,
  useUpdateAccount,
  useCreateProperty,
  useUpdateProperty,
  useUploadAccountAvatar,
  useUploadAccountCoverImages,
  useUploadPropertyCoverImages
} from './hooks'
import { postPropertyTags, postAccount, putAccount, postProperty, putProperty } from './utility'
import { signWithCache } from 'src/fixtures/wallet/utility'
import { useUploadFile } from './functions/useUploadFile'
import { useGetAccount } from './functions/useGetAccount'
import { useGetProperty } from './functions/useGetProperty'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')
jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')
jest.mock('src/fixtures/dev-for-apps/functions/useUploadFile')
jest.mock('src/fixtures/dev-for-apps/functions/useGetAccount')
jest.mock('src/fixtures/dev-for-apps/functions/useGetProperty')

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

    test('failure post property tags with web3.sign error', async () => {
      const propertyAddress = '0x01234567890'
      const accountAddress = '0x09876543210'
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(signWithCache as jest.Mock).mockImplementation(() => ({ signature: undefined, message: undefined }))
      ;(postPropertyTags as jest.Mock).mockImplementation(() => {})
      const { result } = renderHook(() => usePostPropertyTags(propertyAddress, accountAddress))
      await act(async () => {
        await result.current.postPropertyTagsHandler('dummy tags')
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.data).toBe(undefined)
      expect((postPropertyTags as jest.Mock).mock.calls.length).toBe(0)
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
      await act(async () => {
        await result.current.upload('image data')
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
      await act(async () => {
        await result.current.upload('image data')
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

  describe('useCreateAccount', () => {
    test('create account success', async () => {
      const walletAddress = '0x12345'
      const data = {}
      ;(postAccount as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: 'test signature',
        message: 'test sign message'
      }))
      const { result } = renderHook(() => useCreateAccount(walletAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.postAccountHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((postAccount as jest.Mock).mock.calls.length).toBe(1)
    })

    test('fail to create account with web3.sign error', async () => {
      const walletAddress = '0x12345'
      const data = {}
      ;(postAccount as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: undefined,
        message: undefined
      }))
      const { result } = renderHook(() => useCreateAccount(walletAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.postAccountHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((postAccount as jest.Mock).mock.calls.length).toBe(0)
    })
  })

  describe('useUpdateAccount', () => {
    test('update account success', async () => {
      const id = 99
      const walletAddress = '0x12345'
      const data = {}
      ;(putAccount as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: 'test signature',
        message: 'test sign message'
      }))
      const { result } = renderHook(() => useUpdateAccount(id, walletAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.putAccountHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((putAccount as jest.Mock).mock.calls.length).toBe(1)
    })

    test('fail to update account with web3.sign error', async () => {
      const id = 99
      const walletAddress = '0x12345'
      const data = {}
      ;(postAccount as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: undefined,
        message: undefined
      }))
      const { result } = renderHook(() => useUpdateAccount(id, walletAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.putAccountHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((postAccount as jest.Mock).mock.calls.length).toBe(0)
    })
  })
})

describe('dev-for-apps hooks with strapi for property', () => {
  describe('useUploadPropertyCoverImages', () => {
    test('success post file', async () => {
      const propertyAddress = '0x01234567890'
      const accountAddress = '0x12345'
      const mockHandler = jest.fn().mockImplementation(jest.fn().mockImplementation(() => Promise.resolve()))
      const mockMutate = jest.fn().mockImplementation(() => {})
      ;(useGetProperty as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: mockMutate }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: mockHandler,
        isLoading: false
      }))
      const { result } = renderHook(() => useUploadPropertyCoverImages(propertyAddress, accountAddress))
      await act(async () => {
        await result.current.upload('image data')
      })
      expect(mockHandler.mock.calls[0][0]).toBe(123)
      expect(mockHandler.mock.calls[0][1]).toBe('Property')
      expect(mockHandler.mock.calls[0][2]).toBe('cover_image')
      expect(mockHandler.mock.calls[0][3]).toBe('image data')
      expect(mockHandler.mock.calls[0][4]).toBe('assets/0x01234567890/cover_image')
      expect(mockMutate.mock.calls.length).toBe(1)
    })

    test('failure post file', async () => {
      const propertyAddress = '0x01234567890'
      const accountAddress = '0x12345'
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useGetProperty as jest.Mock).mockImplementation(() => ({ data: { id: 123 }, mutate: () => {} }))
      ;(useUploadFile as jest.Mock).mockImplementation(() => ({
        postUploadFileHandler: () => Promise.resolve(),
        isLoading: false,
        error
      }))
      const { result } = renderHook(() => useUploadPropertyCoverImages(propertyAddress, accountAddress))
      act(() => {
        result.current.upload({})
      })
      expect(result.current.isLoading).toBe(false)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useCreateProperty', () => {
    test('success create property', async () => {
      const propertyAddress = '0x01234567890'
      const walletAddress = '0x12345'
      const data = {}
      ;(postProperty as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: 'test signature',
        message: 'test sign message'
      }))
      const { result } = renderHook(() => useCreateProperty(walletAddress, propertyAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.postPropertyHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((postProperty as jest.Mock).mock.calls.length).toBe(1)
    })

    test('fail to create property with web3.sign error', async () => {
      const propertyAddress = '0x01234567890'
      const walletAddress = '0x12345'
      const data = {}
      ;(postProperty as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: undefined,
        message: undefined
      }))
      const { result } = renderHook(() => useCreateProperty(walletAddress, propertyAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.postPropertyHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((postProperty as jest.Mock).mock.calls.length).toBe(0)
    })
  })

  describe('useUpdateProperty', () => {
    test('success update property', async () => {
      const id = 98
      const propertyAddress = '0x01234567890'
      const walletAddress = '0x12345'
      const data = {}
      ;(putProperty as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: 'test signature',
        message: 'test sign message'
      }))
      const { result } = renderHook(() => useUpdateProperty(id, walletAddress, propertyAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.putPropertyHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((putProperty as jest.Mock).mock.calls.length).toBe(1)
    })

    test('fail to update property with web3.sign error', async () => {
      const id = 98
      const propertyAddress = '0x01234567890'
      const walletAddress = '0x12345'
      const data = {}
      ;(putProperty as jest.Mock).mockResolvedValue(data)
      ;(signWithCache as jest.Mock).mockImplementation(() => ({
        signature: undefined,
        message: undefined
      }))
      const { result } = renderHook(() => useUpdateProperty(id, walletAddress, propertyAddress))
      await act(async () => {
        const name = 'dummy name'
        await result.current.putPropertyHandler(name)
      })
      expect(result.current.isLoading).toBe(false)
      expect((putProperty as jest.Mock).mock.calls.length).toBe(0)
    })
  })
})

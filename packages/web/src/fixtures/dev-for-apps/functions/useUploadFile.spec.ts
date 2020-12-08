import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUploadFile, useDeleteFile } from './useUploadFile'
import { postUploadFile, deleteUploadFile } from '../utility'
import { signWithCache } from 'src/fixtures/wallet/utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')
jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')

describe('useUploadFile', () => {
  test('success post file', async () => {
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(postUploadFile as jest.Mock).mockResolvedValue({ id: 'id' })
    ;(signWithCache as jest.Mock).mockImplementation(() => ({
      signature: 'test signature',
      message: 'test sign message'
    }))
    const { result, waitForNextUpdate } = renderHook(() => useUploadFile('0x01234567890'))
    act(() => {
      result.current.postUploadFileHandler(1, 'ref', 'field', {}, '/path')
    })
    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(false)
  })

  test('failure post file', async () => {
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(postUploadFile as jest.Mock).mockRejectedValue(error)
    ;(signWithCache as jest.Mock).mockImplementation(() => ({
      signature: 'test signature',
      message: 'test sign message'
    }))
    const { result, waitForNextUpdate } = renderHook(() => useUploadFile('0x01234567890'))
    act(() => {
      result.current.postUploadFileHandler(1, 'ref', 'field', {}, '/path')
    })
    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error?.message).toBe(errorMessage)
    expect((postUploadFile as jest.Mock).mock.calls.length).toBe(1)
  })

  test('failure post file with web3.sign error', async () => {
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(postUploadFile as jest.Mock).mockRejectedValue(error)
    ;(signWithCache as jest.Mock).mockImplementation(() => ({ signature: undefined, message: undefined }))
    const { result } = renderHook(() => useUploadFile('0x01234567890'))
    const v = await result.current.postUploadFileHandler(1, 'ref', 'field', {}, '/path')
    expect(result.current.isLoading).toBe(false)
    expect(v).toBe(undefined)
    expect((postUploadFile as jest.Mock).mock.calls.length).toBe(0)
  })
})

describe('useDeleteFile', () => {
  test('success delete file', async () => {
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(deleteUploadFile as jest.Mock).mockResolvedValue({ id: 'id' })
    ;(signWithCache as jest.Mock).mockImplementation(() => ({
      signature: 'test signature',
      message: 'test sign message'
    }))
    const { result, waitForNextUpdate } = renderHook(() => useDeleteFile('0x01234567890'))
    act(() => {
      result.current.deleteFileHandler(1, 'dummy-filename.jpg')
    })
    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(false)
  })

  test('failure delete file', async () => {
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(deleteUploadFile as jest.Mock).mockRejectedValue(error)
    ;(signWithCache as jest.Mock).mockImplementation(() => ({
      signature: 'test signature',
      message: 'test sign message'
    }))
    const { result, waitForNextUpdate } = renderHook(() => useDeleteFile('0x01234567890'))
    act(() => {
      result.current.deleteFileHandler(1, 'dummy-filename.jpg')
    })
    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error?.message).toBe(errorMessage)
    expect((deleteUploadFile as jest.Mock).mock.calls.length).toBe(1)
  })

  test('failure delete file with web3.sign error', async () => {
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(deleteUploadFile as jest.Mock).mockRejectedValue(error)
    ;(signWithCache as jest.Mock).mockImplementation(() => ({ signature: undefined, message: undefined }))
    const { result } = renderHook(() => useDeleteFile('0x01234567890'))
    const v = await result.current.deleteFileHandler(1, 'dummy-filename.jpg')
    expect(result.current.isLoading).toBe(false)
    expect(v).toBe(undefined)
    expect((deleteUploadFile as jest.Mock).mock.calls.length).toBe(0)
  })
})

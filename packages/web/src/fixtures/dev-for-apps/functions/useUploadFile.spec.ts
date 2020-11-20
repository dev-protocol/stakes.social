import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { useUploadFile } from './useUploadFile'
import { postUploadFile } from '../utility'
import { sign } from 'src/fixtures/wallet/utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')
jest.mock('src/fixtures/wallet/utility.ts')
jest.mock('src/fixtures/wallet/hooks.ts')

describe('useUploadFile', () => {
  test('success post file', async () => {
    ;(useSWR as jest.Mock).mockImplementation(() => ({ mutate: () => {} }))
    ;(postUploadFile as jest.Mock).mockResolvedValue({ id: 'id' })
    ;(sign as jest.Mock).mockImplementation(() => 'test sign message')
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
    ;(sign as jest.Mock).mockImplementation(() => 'test sign message')
    const { result, waitForNextUpdate } = renderHook(() => useUploadFile('0x01234567890'))
    act(() => {
      result.current.postUploadFileHandler(1, 'ref', 'field', {}, '/path')
    })
    await waitForNextUpdate()
    expect(result.current.isLoading).toBe(false)
    expect(result.current.error?.message).toBe(errorMessage)
  })
})

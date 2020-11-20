import useSWR from 'swr'
import { renderHook } from '@testing-library/react-hooks'
import { useGetAccount } from './useGetAccount'

jest.mock('swr')
jest.mock('src/fixtures/dev-for-apps/utility.ts')

describe('useGetAccount', () => {
  test('give undefined', async () => {
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data: undefined }))
    const { result } = renderHook(() => useGetAccount())
    expect(result.current.data).toBe(undefined)
  })

  test('success get property', async () => {
    const data = [{ a: 'a' }]
    const error = undefined
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetAccount('0x01234567890'))
    expect(result.current.data).toEqual({ a: 'a' })
  })

  test('failure get profile', async () => {
    const data = undefined
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetAccount('0x01234567890'))
    expect(result.current.error).toBe(error)
    expect(result.current.error?.message).toBe(errorMessage)
  })
})

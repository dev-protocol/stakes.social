import useSWR from 'swr'
import { renderHook } from '@testing-library/react-hooks'
import { useGetPropertySetting } from './useGetPropertySetting'

jest.mock('swr')
jest.mock('src/fixtures/dev-for-apps/utility.ts')

describe('useGetPropertySetting', () => {
  test('give undefined', async () => {
    const propertyAddress = '0x12345'
    const accountAddress = '0x98765'
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data: undefined }))
    const { result } = renderHook(() => useGetPropertySetting(propertyAddress, accountAddress))
    expect(result.current.data).toBe(undefined)
    expect(result.current.found).toBe(false)
  })

  test('get property setting', async () => {
    const propertyAddress = '0x12345'
    const accountAddress = '0x98765'
    const data = [{ a: 'a' }]
    const error = undefined
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetPropertySetting(propertyAddress, accountAddress))
    expect(result.current.data).toEqual({ a: 'a' })
    expect(result.current.found).toBe(true)
  })

  test('get not registered property setting', async () => {
    const propertyAddress = '0x12345'
    const accountAddress = '0x98765'
    const error = undefined
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data: [], error }))
    const { result } = renderHook(() => useGetPropertySetting(propertyAddress, accountAddress))
    expect(result.current.data).toEqual(undefined)
    expect(result.current.found).toBe(true)
  })

  test('failure get property setting', async () => {
    const propertyAddress = '0x12345'
    const accountAddress = '0x98765'
    const data = undefined
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetPropertySetting(propertyAddress, accountAddress))
    expect(result.current.error).toBe(error)
    expect(result.current.error?.message).toBe(errorMessage)
    expect(result.current.found).toBe(false)
  })
})

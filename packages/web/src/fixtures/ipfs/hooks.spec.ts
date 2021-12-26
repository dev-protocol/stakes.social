/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks'
import { useGetIPFS } from './hooks'
import useSWR from 'swr'

jest.mock('swr')
jest.mock('src/fixtures/utility')

describe('useGetIPFS', () => {
  test('data is undefined', () => {
    const data = undefined
    const error = undefined

    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetIPFS('cid'))
    expect(result.current.base64).toBe(data)
    console.log(result.current.base64)
  })

  test('success fetching data', () => {
    const data = 'https://test.com'
    const error = undefined
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetIPFS('cid'))
    expect(result.current.base64).toBe(data)
  })

  test('failure fetching data', () => {
    const data = undefined
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
    const { result } = renderHook(() => useGetIPFS('cid'))
    expect(result.current.error).toBe(error)
    expect(result.current.error?.message).toBe(errorMessage)
  })
})

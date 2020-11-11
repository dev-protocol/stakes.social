import { renderHook } from '@testing-library/react-hooks'
import { useGetPropertytInformation, useGetAuthorInformation } from './hooks'
import useSWR from 'swr'

jest.mock('swr')
jest.mock('src/fixtures/utility')

describe('devprtcl hooks', () => {
  describe('useGetPropertytInformation', () => {
    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPropertytInformation('property-address'))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const data = {
        name: 'property_name',
        author: {
          address: 'hex_address',
          karma: 40124
        }
      }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPropertytInformation('property-address'))
      expect(result.current.data).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetPropertytInformation('property-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })

  describe('useGetAuthorInformation', () => {
    test('when given undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthorInformation())
      expect(result.current.data).toBe(data)
    })

    test('data is undefined', () => {
      const data = undefined
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthorInformation('author-address'))
      expect(result.current.data).toBe(data)
    })

    test('success fetching data', () => {
      const data = {
        address: 'hex_address',
        karma: 40124
      }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthorInformation('author-address'))
      expect(result.current.data).toBe(data)
    })

    test('failure fetching data', () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetAuthorInformation('author-address'))
      expect(result.current.error).toBe(error)
      expect(result.current.error?.message).toBe(errorMessage)
    })
  })
})

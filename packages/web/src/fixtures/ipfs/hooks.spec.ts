/**
 * @jest-environment node
 */

import { renderHook } from '@testing-library/react-hooks'
import { useGetIPFS } from './hooks'
import { getIpfs } from 'src/fixtures/ipfs/functions/getIpfs'

jest.mock('src/fixtures/ipfs/functions/getIpfs.ts')

describe.skip('useGetIPFS', () => {
  test('data is undefined', async () => {
    const data = undefined
    ;(getIpfs as jest.Mock).mockImplementation(() => Promise.resolve(data))
    const { result } = renderHook(() => useGetIPFS('cid'))
    expect(result.current.base64).toBe(data)
  })

  test('success fetching data', async () => {
    const data = 'https://test.com'
    ;(getIpfs as jest.Mock).mockImplementation(() => Promise.resolve(data))
    const { result, waitForNextUpdate } = renderHook(() => useGetIPFS('cid'))
    await waitForNextUpdate()
    expect(result.current.base64).toBe(data)
  })

  test('failure fetching data', async () => {
    const errorMessage = 'error'
    const error = new Error(errorMessage)
    ;(getIpfs as jest.Mock).mockImplementation(() => Promise.reject(error))
    const { result, waitForNextUpdate } = renderHook(() => useGetIPFS('cid'))
    await waitForNextUpdate()
    expect(result.current.error).toBe(error)
    expect(result.current.error?.message).toBe(errorMessage)
  })
})

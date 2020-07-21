import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { useGetUser, usePostUser } from './hooks'
import { postUser } from './utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-for-apps/utility.ts')

describe('dev-for-apps hooks', () => {
  describe('useGetUser', () => {
    test('success get profile', async () => {
      const data = { displayName: 'Get Your Dispaly Name' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      const { result } = renderHook(() => useGetUser('0x01234567890'))
      expect(result.current.data).toBe(data)
    })
  })

  describe('usePostUser', () => {
    test('success post profile', async () => {
      const name = 'name'
      const signature = 'signature'
      const signMessage = 'message'
      const { result, waitForNextUpdate } = renderHook(() => usePostUser())
      ;(postUser as jest.Mock).mockResolvedValue({ displayName: 'name' })
      act(() => {
        result.current.postUserHandler(name, signature, signMessage, '0x01234567890')
      })
      await waitForNextUpdate()
      expect(result.current.error).toBe(undefined)
      expect(result.current.isLoading).toBe(false)
    })
  })
})

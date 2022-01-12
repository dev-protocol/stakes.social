import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { usePostInvitation } from './hooks'
import { postInvitation } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/dev-invitation/utility.ts')
jest.mock('src/fixtures/wallet/utility.ts')

describe('dev-invitation hooks', () => {
  describe('usePostInvitation', () => {
    test('success invitation request', async () => {
      const data = { success: true }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(sign as jest.Mock).mockResolvedValue('dummy signature')
      ;(postInvitation as jest.Mock).mockResolvedValue(data)
      const { result } = renderHook(() => usePostInvitation())
      await act(async () => {
        const asset = 'dummy asset'
        const email = 'dummy@dummy.com'
        const discord = 'dummy-discord'
        const name = 'Name'
        const role = 'Role'
        const url = 'Url'
        const useCase = 'UseCase'
        const ask = 'Ask'
        const market = 'Market'
        const newsletter = false
        const ret = await result.current.postInvitationHandler({
          asset,
          email,
          discord,
          name,
          role,
          url,
          useCase,
          ask,
          market,
          newsletter
        })
        expect(ret).toBe(data)
      })
    })

    test('failure invitation request', async () => {
      const data = undefined
      const error = new Error('error')
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(sign as jest.Mock).mockResolvedValue('dummy signature')
      ;(postInvitation as jest.Mock).mockResolvedValue({ success: false })
      const { result } = renderHook(() => usePostInvitation())
      await act(async () => {
        const asset = 'dummy asset'
        const email = 'dummy@dummy.com'
        const discord = 'dummy-discord'
        const name = 'Name'
        const role = 'Role'
        const url = 'Url'
        const useCase = 'UseCase'
        const ask = 'Ask'
        const market = 'Market'
        const newsletter = true
        const ret = await result.current.postInvitationHandler({
          asset,
          email,
          discord,
          name,
          role,
          url,
          useCase,
          ask,
          market,
          newsletter
        })
        expect(ret.success).toBe(false)
      })
      expect(result.current.isLoading).toBe(false)
      expect(postInvitation).toHaveBeenCalledTimes(1)
    })

    test('failure invitation request with fail web3 sign', async () => {
      const data = undefined
      const error = new Error('error')
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(sign as jest.Mock).mockResolvedValue(undefined)
      ;(postInvitation as jest.Mock).mockResolvedValue({ success: true })
      const { result } = renderHook(() => usePostInvitation())
      await act(async () => {
        const asset = 'dummy asset'
        const email = 'dummy@dummy.com'
        const discord = 'dummy-discord'
        const name = 'Name'
        const role = 'Role'
        const url = 'Url'
        const useCase = 'UseCase'
        const ask = 'Ask'
        const market = 'Market'
        const newsletter = false
        const ret = await result.current.postInvitationHandler({
          asset,
          email,
          discord,
          name,
          role,
          url,
          useCase,
          ask,
          market,
          newsletter
        })
        expect(ret.success).toBe(false)
      })
      expect(result.current.isLoading).toBe(false)

      // early return, not call postInvitation request.
      expect(postInvitation).toHaveBeenCalledTimes(0)
    })
  })
})

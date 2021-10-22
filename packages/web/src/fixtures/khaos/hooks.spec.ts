import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { usePostSignGitHubMarketAsset } from './hooks'
import { emulateOraclizeGitHubMarketAsset, postSignGitHubMarketAsset } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/khaos/utility.ts')
jest.mock('src/fixtures/wallet/hooks')
jest.mock('src/fixtures/wallet/utility')

describe('khaos hooks', () => {
  describe('usePostSignGitHubMarketAsset', () => {
    test('success post auth github asset', async () => {
      const data = { publicSignature: 'dummy signature' }
      const error = undefined
      ;(sign as jest.Mock).mockResolvedValue(`test`)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(postSignGitHubMarketAsset as jest.Mock).mockImplementation(
        () => () => Promise.resolve({ publicSignature: 'dummy signature' })
      )
      ;(emulateOraclizeGitHubMarketAsset as jest.Mock).mockImplementation(
        () => () =>
          Promise.resolve({
            data: { args: ['', 0], expectedTransaction: { success: true } }
          })
      )
      const { result } = renderHook(() => usePostSignGitHubMarketAsset())
      await act(async () => {
        const postResult = await result.current.postSignGitHubMarketAssetHandler('repo', 'token')
        expect(postResult).toEqual(data)
      })
      expect(result.current.isLoading).toBe(false)
    })

    test('failure post auth github asset', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(sign as jest.Mock).mockResolvedValue(`test`)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postSignGitHubMarketAsset as jest.Mock).mockImplementation(
        () => () => Promise.resolve({ publicSignature: 'dummy signature' })
      )
      ;(emulateOraclizeGitHubMarketAsset as jest.Mock).mockImplementation(
        () => () =>
          Promise.resolve({
            data: { args: ['', 0], expectedTransaction: { success: true } }
          })
      )
      const { result, waitForNextUpdate } = renderHook(() => usePostSignGitHubMarketAsset())
      act(() => {
        const repository = 'test/repo'
        const personalAccessToken = 'dummy pat'
        result.current.postSignGitHubMarketAssetHandler(repository, personalAccessToken)
      })
      await waitForNextUpdate()
      expect(result.current.isLoading).toBe(false)
    })
  })
})

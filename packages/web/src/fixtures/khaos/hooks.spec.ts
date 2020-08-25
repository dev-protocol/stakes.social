import useSWR from 'swr'
import { renderHook, act } from '@testing-library/react-hooks'
import { usePostSignGitHubMarketAsset } from './hooks'
import { postSignGitHubMarketAsset } from './utility'

jest.mock('swr')
jest.mock('src/fixtures/utility')
jest.mock('src/fixtures/khaos/utility.ts')

describe('khaos hooks', () => {
  describe('usePostSignGitHubMarketAsset', () => {
    test('success post auth github asset', async () => {
      const data = { publicSignature: 'dummy signature' }
      const error = undefined
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error }))
      ;(postSignGitHubMarketAsset as jest.Mock).mockResolvedValue({ publicSignature: 'dummy signature' })
      const { result } = renderHook(() => usePostSignGitHubMarketAsset())
      expect(result.current.data).toBe(data)
    })

    test('failure post auth github asset', async () => {
      const data = undefined
      const errorMessage = 'error'
      const error = new Error(errorMessage)
      ;(useSWR as jest.Mock).mockImplementation(() => ({ data, error, mutate: () => {} }))
      ;(postSignGitHubMarketAsset as jest.Mock).mockResolvedValue({ publicSignature: 'dummy signature' })
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

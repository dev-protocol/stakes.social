import { useState } from 'react'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { SWRCachePath } from './cache-path'
import { postSignGitHubMarketAsset, GitHubAssetInformation } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

export const usePostSignGitHubMarketAsset = () => {
  const key = 'usePostSignGitHubMarketAsset'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data } = useSWR<UnwrapFunc<typeof postSignGitHubMarketAsset>, Error>(SWRCachePath.postSignGitHubMarketAsset())

  const postSignGitHubMarketAssetHandler = async (repository: string, personalAccessToken: string) => {
    const signMessage = repository
    const signature = await sign(signMessage)
    if (signature === undefined) {
      message.error({ content: 'Please connect to a wallet', key: key + 'WithWallet' })
    }

    setIsLoading(true)
    message.loading({ content: 'authenticate asset', duration: 0, key })

    return postSignGitHubMarketAsset(signMessage, signature || '', personalAccessToken)
      .then(result => {
        setIsLoading(false)
        if (result instanceof Error) {
          message.error({ content: result.message, key })
          return {} as GitHubAssetInformation
        } else {
          message.success({ content: 'success to authenticate asset', key })
          return result
        }
      })
      .catch(err => {
        message.error({ content: err.message, key })
        setIsLoading(false)
        return Promise.reject(err)
      })
  }

  return { data, postSignGitHubMarketAssetHandler, isLoading }
}

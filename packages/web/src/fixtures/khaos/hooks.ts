import { useState } from 'react'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { SWRCachePath } from './cache-path'
import { postSignGitHubMarketAsset } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

export const usePostSignGitHubMarketAsset = () => {
  const key = 'usePostSignGitHubMarketAsset'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { data, mutate } = useSWR<UnwrapFunc<typeof postSignGitHubMarketAsset>, Error>(
    SWRCachePath.postSignGitHubMarketAsset()
  )

  const postSignGitHubMarketAssetHandler = async (repository: string, personalAccessToken: string) => {
    const signMessage = repository
    const signature = (await sign(signMessage)) || ''

    setIsLoading(true)
    message.loading({ content: 'authenticate asset', duration: 0, key })

    await mutate(
      postSignGitHubMarketAsset(signMessage, signature, personalAccessToken)
        .then(result => {
          message.success({ content: 'success to authenticate asset', key })
          setIsLoading(false)
          return result
        })
        .catch(err => {
          message.error({ content: err.message, key })
          setIsLoading(false)
          return Promise.reject(err)
        }),
      false
    )
  }

  return { data, postSignGitHubMarketAssetHandler, isLoading }
}

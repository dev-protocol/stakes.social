import { useContext, useState } from 'react'
import { message } from 'antd'
import { postSignGitHubMarketAsset, GitHubAssetInformation } from './utility'
import { sign } from 'src/fixtures/wallet/utility'
import WalletContext from 'src/context/walletContext'

export const usePostSignGitHubMarketAsset = () => {
  const key = 'usePostSignGitHubMarketAsset'
  const { web3 } = useContext(WalletContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postSignGitHubMarketAssetHandler = async (repository: string, personalAccessToken: string) => {
    const signMessage = repository
    const signature = await sign(web3, signMessage)
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

  return { postSignGitHubMarketAssetHandler, isLoading }
}

import { useState } from 'react'
import { message } from 'antd'
import { emulateOraclizeGitHubMarketAsset, postSignGitHubMarketAsset } from './utility'
import { sign } from 'src/fixtures/wallet/utility'
import { useProvider } from '../wallet/hooks'

export const usePostSignGitHubMarketAsset = () => {
  const key = 'usePostSignGitHubMarketAsset'
  const { web3, accountAddress } = useProvider()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postSignGitHubMarketAssetHandler = async (repository: string, personalAccessToken: string) => {
    const signMessage = repository
    const signature = await sign(web3, signMessage)
    if (signature === undefined) {
      message.error({ content: 'Please connect to a wallet', key: key + 'WithWallet' })
    }

    setIsLoading(true)

    const signed = await postSignGitHubMarketAsset(signMessage, signature || '', personalAccessToken).catch(
      (err: Error) => err
    )
    if (signed instanceof Error) {
      message.error({ content: signed.message, key })
      setIsLoading(false)
      throw signed
    }

    const emulated = await emulateOraclizeGitHubMarketAsset(repository, signed.publicSignature, accountAddress).catch(
      (err: Error) => err
    )
    if (emulated instanceof Error) {
      message.error({ content: emulated.message, key })
      setIsLoading(false)
      throw emulated
    }

    const expectedSuccess = emulated?.data?.args[1] === 0 && emulated.data?.expectedTransaction.success
    if (!expectedSuccess) {
      const err = new Error('authentication dry run failed')
      message.error({ content: err.message, key })
      setIsLoading(false)
      throw err
    }

    setIsLoading(false)

    return signed
  }

  return { postSignGitHubMarketAssetHandler, isLoading }
}

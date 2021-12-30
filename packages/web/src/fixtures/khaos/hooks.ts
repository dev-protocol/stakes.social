import { useState } from 'react'
import { message } from 'antd'
import { postSignGitHubMarketAsset } from './utility'
import { sign } from 'src/fixtures/wallet/utility'
import { useDetectChain, useProvider } from '../wallet/hooks'

export const usePostSignGitHubMarketAsset = () => {
  const key = 'usePostSignGitHubMarketAsset'
  const { web3, ethersProvider } = useProvider()
  const { name: networkName } = useDetectChain(ethersProvider)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postSignGitHubMarketAssetHandler = async (repository: string, personalAccessToken: string) => {
    const signMessage = repository
    const signature = await sign(web3, signMessage)
    if (signature === undefined) {
      message.error({ content: 'Please connect to a wallet', key: key + 'WithWallet' })
    }

    setIsLoading(true)

    const signed = await postSignGitHubMarketAsset(networkName)(
      signMessage,
      signature || '',
      personalAccessToken
    ).catch((err: Error) => err)
    if (signed instanceof Error) {
      message.error({ content: signed.message, key })
      setIsLoading(false)
      throw signed
    }

    // TODO: FIX timeout
    // const emulated = await emulateOraclizeGitHubMarketAsset(networkName)(
    //   repository,
    //   signed.publicSignature,
    //   accountAddress
    // ).catch((err: Error) => err)
    // if (emulated instanceof Error) {
    //   message.error({ content: emulated.message, key })
    //   setIsLoading(false)
    //   throw emulated
    // }

    // const expectedSuccess = emulated?.data?.args[1] === 0
    // if (!expectedSuccess) {
    //   const err = new Error('authentication dry run failed')
    //   message.error({ content: err.message, key })
    //   setIsLoading(false)
    //   throw err
    // }

    setIsLoading(false)

    return signed
  }

  return { postSignGitHubMarketAssetHandler, isLoading }
}

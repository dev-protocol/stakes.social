import { useContext, useState } from 'react'
import { message } from 'antd'
import { postInvitation } from './utility'
import { sign } from 'src/fixtures/wallet/utility'
import WalletContext from 'src/context/walletContext'

export const usePostInvitation = () => {
  const key = 'usePostInvitation'
  const { web3 } = useContext(WalletContext)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postInvitationHandler = async ({
    asset,
    email,
    discord,
    market,
    name,
    role,
    url,
    useCase,
    ask,
    newsletter
  }: {
    asset: string
    email: string
    discord: string
    market: string
    name: string
    role: string
    url: string
    useCase: string
    ask: string
    newsletter: boolean
  }) => {
    const signMessage = `invitation: ${asset}`
    const signature = await sign(web3, signMessage)
    if (signature === undefined) {
      message.error({ content: 'Please connect to a wallet', key: key + 'WithWallet' })
      return { success: false }
    }

    setIsLoading(true)
    message.loading({ content: 'invitation request...', duration: 0, key })

    return postInvitation({
      asset,
      email,
      discord,
      signMessage,
      market,
      signature,
      name,
      role,
      url,
      useCase,
      ask,
      newsletter
    })
      .then(result => {
        if (result.success) {
          message.success({ content: 'success', key })
        } else {
          message.error({ content: 'error', key })
        }
        setIsLoading(false)
        return result
      })
      .catch(err => {
        message.error({ content: err.message, key })
        setIsLoading(false)
        return Promise.reject(err)
      })
  }

  return { postInvitationHandler, isLoading }
}

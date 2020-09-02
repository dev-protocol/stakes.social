import { useState } from 'react'
import { SWRCachePath } from './cache-path'
import useSWR from 'swr'
import { message } from 'antd'
import { UnwrapFunc } from '../utility'
import { postInvitation } from './utility'
import { sign } from 'src/fixtures/wallet/utility'

export const usePostInvitation = (marketAddress: string) => {
  const key = 'usePostInvitation'
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const shouldFetch = marketAddress !== ''
  const { data } = useSWR<UnwrapFunc<typeof postInvitation>, Error>(shouldFetch ? SWRCachePath.postInvitation() : null)

  const postInvitationHandler = async ({
    asset,
    email,
    discord,
    market,
    name,
    role,
    url,
    useCase,
    ask
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
  }) => {
    const signMessage = `invitation: ${asset}`
    const signature = await sign(signMessage)
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
      ask
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

  return { data, postInvitationHandler, isLoading }
}

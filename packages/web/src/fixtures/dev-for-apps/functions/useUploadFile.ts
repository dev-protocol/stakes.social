import { useState } from 'react'
import { message } from 'antd'
import { postUploadFile } from '../utility'
import { sign } from 'src/fixtures/wallet/utility'
import { useProvider } from '../../wallet/hooks'

export const useUploadFile = (accountAddress: string) => {
  const key = 'useUploadFile'
  const { web3 } = useProvider()
  const [error, setError] = useState<Error>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postUploadFileHandler = async (refId: number, ref: string, field: string, file: any, path?: string) => {
    const signMessage = `upload file: ${refId}, ${ref}, ${field}`
    const signature = (await sign(web3, signMessage)) || ''
    if (!signature) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'upload data...', duration: 0, key })

    const res = postUploadFile(signMessage, signature, accountAddress, refId, ref, field, file, path)
      .then(result => {
        if (result.error) {
          message.error({ content: result.error, key })
          setError(new Error(result.error))
        } else {
          message.success({ content: 'success upload', key })
        }
        return result
      })
      .catch((err: Error) => {
        message.error({ content: err.message, key })
        setError(err)
        return err
      })

    setIsLoading(false)

    return res
  }

  return { postUploadFileHandler, isLoading, error }
}

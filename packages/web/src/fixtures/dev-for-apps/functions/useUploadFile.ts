import { useState } from 'react'
import { message } from 'antd'
import { postUploadFile, deleteUploadFile } from '../utility'
import { signWithCache } from 'src/fixtures/wallet/utility'
import { useProvider } from '../../wallet/hooks'

export const useUploadFile = (accountAddress: string) => {
  const key = 'useUploadFile'
  const { web3 } = useProvider()
  const [error, setError] = useState<Error>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const postUploadFileHandler = async (refId: number, ref: string, field: string, file: any, path?: string) => {
    const signMessage = `upload file: ${refId}, ${ref}, ${field}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'upload data...', duration: 0, key })

    const res = postUploadFile(signedMessage, signature, accountAddress, refId, ref, field, file, path)
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

export const useDeleteFile = (accountAddress: string) => {
  const key = 'useUploadFile'
  const { web3 } = useProvider()
  const [error, setError] = useState<Error>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const deleteFileHandler = async (id: number, filename: string) => {
    const signMessage = `delete file: ${id}, ${filename}`
    const { signature, message: signedMessage } = await signWithCache(web3, signMessage)
    if (!signature || !signedMessage) {
      return
    }

    setIsLoading(true)
    message.loading({ content: 'delete file...', duration: 0, key })

    const res = deleteUploadFile(signedMessage, signature, accountAddress, id)
      .then(result => {
        if (result.error) {
          message.error({ content: result.error, key })
          setError(new Error(result.error))
        } else {
          message.success({ content: 'success delete', key })
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

  return { deleteFileHandler, isLoading, error }
}

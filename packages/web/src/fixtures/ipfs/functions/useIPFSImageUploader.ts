import { useState, useCallback } from 'react'
import { NFTStorage } from 'nft.storage'
import { message } from 'antd'

export const useIPFSImageUploader = () => {
  const key = 'useIPFSImageUploader'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const upload = useCallback(async (image: File) => {
    setIsLoading(true)

    try {
      message.loading({ content: 'uploading the image to IPFS...', key })
      const client = new NFTStorage({ token: `${process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN}` })
      const cid = await client.storeBlob(image)
      message.success({ content: 'upload successful!', key })
      return cid
    } catch (e) {
      const err = e as Error
      setError(err)
      const msg = err.message
      message.error({ content: msg, key })
      return msg
    }
  }, [])

  return { upload, isLoading, error }
}

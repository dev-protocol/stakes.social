import BigNumber from 'bignumber.js'
import { approve } from './client'
import { useCallback } from 'react'
import { message } from 'antd'

export const useApprove = () => {
  const key = 'useApprove'
  return useCallback(async (spender: string, value: BigNumber) => {
    message.loading({ content: 'now approving...', duration: 0, key })
    return approve(spender, value)
      .then(() => {
        message.success({ content: 'approved!', key })
      })
      .catch(err => {
        message.error({ content: err.message, key })
      })
  }, [])
}

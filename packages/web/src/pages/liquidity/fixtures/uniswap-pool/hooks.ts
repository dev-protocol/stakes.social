import BigNumber from 'bignumber.js'
import { approve, fromTheGraph } from './client'
import { useCallback } from 'react'
import { message } from 'antd'
import useSWR from 'swr'
import { UnwrapFunc } from 'src/fixtures/utility'
import { SWRCachePath } from './cache-path'

export const useApprove = () => {
  const key = 'useApprove'
  return useCallback(async (spender: string, value: BigNumber) => {
    message.loading({ content: 'Approving...', duration: 0, key })
    return approve(spender, value)
      .then(() => {
        message.success({ content: 'Approval completed', key })
      })
      .catch(err => {
        message.error({ content: err.message, key })
      })
  }, [])
}

export const useTheGraph = (key: string = '') => {
  const { data, error } = useSWR<UnwrapFunc<typeof fromTheGraph>, Error>(SWRCachePath.fromTheGraph(key), () =>
    fromTheGraph()
  )
  return {
    data,
    error
  }
}

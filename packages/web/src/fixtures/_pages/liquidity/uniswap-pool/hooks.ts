import BigNumber from 'bignumber.js'
import { approve, fromTheGraph } from './client'
import { useCallback, useState } from 'react'
import { message } from 'antd'
import useSWR from 'swr'
import { UnwrapFunc } from 'src/fixtures/utility'
import { SWRCachePath } from './cache-path'

export const useApprove = () => {
  const key = 'useApprove'
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const _approve = useCallback(async (spender: string, value: BigNumber) => {
    setIsLoading(true)
    message.loading({ content: 'Approving...', duration: 0, key })
    setError(undefined)
    return approve(spender, value)
      .then(() => {
        message.success({ content: 'Approval completed', key })
        setIsLoading(false)
        return true
      })
      .catch(err => {
        setError(err)
        message.error({ content: err.message, key })
        setIsLoading(false)
        return false
      })
  }, [])
  return { approve: _approve, isLoading, error }
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

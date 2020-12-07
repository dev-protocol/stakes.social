import BigNumber from 'bignumber.js'
import useSWR from 'swr'
import { message } from 'antd'
import { getEthPrice, getDevEthPrice, getTokenDayDatas } from './client'
import { UnwrapFunc } from 'src/fixtures/utility'

export const useGetEthPrice = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getEthPrice>, Error>('getBundle', () => getEthPrice(), {
    onError: err => message.error(err.message)
  })
  return { data: new BigNumber(data?.ethPrice || '0'), error, mutate }
}

export const useGetDevEthPrice = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getDevEthPrice>, Error>('getToken', () => getDevEthPrice(), {
    onError: err => message.error(err.message)
  })
  return { data: new BigNumber(data?.derivedETH || '0'), error, mutate }
}

export const useGetDevPrice = () => {
  const { data: ethPrice, error: ethPriceError } = useSWR<UnwrapFunc<typeof getEthPrice>, Error>(
    'getBundle',
    () => getEthPrice(),
    { onError: err => message.error(err.message) }
  )

  const { data: devEthPrice, error: devEthPriceError } = useSWR<UnwrapFunc<typeof getDevEthPrice>, Error>(
    'getToken',
    () => getDevEthPrice(),
    { onError: err => message.error(err.message) }
  )

  const devPrice = ethPrice && Number(ethPrice?.ethPrice) * Number(devEthPrice?.derivedETH)
  return { data: new BigNumber(devPrice || '0'), error: ethPriceError || devEthPriceError }
}

export const useGetTokenDayDatas = () => {
  const { data, error, mutate } = useSWR<UnwrapFunc<typeof getTokenDayDatas>, Error>(
    'getTokenDayDatas',
    () => getTokenDayDatas(),
    {
      onError: err => message.error(err.message)
    }
  )
  return { data: data, error, mutate }
}

import { ethGasStationFetcher } from '@devprotocol/util-ts'
import useSWR from 'swr'

const EGS_TOKEN = '573deb033585bb0b2de8f0950ae599d8a5ea2f754c12c5ecae4e1bd74b7a'

export const useGetGasPrice = () => {
  const gasPriceFetcher = ethGasStationFetcher(EGS_TOKEN, 'fastest')
  const { data, error } = useSWR('getGasPrice', gasPriceFetcher)
  return { gasPrice: data, error }
}

import { ethGasStationFetcher, whenDefined } from '@devprotocol/util-ts'
import { useMemo } from 'react'
import useSWR from 'swr'
import { useDetectChain, useProvider } from '../wallet/hooks'

const EGS_TOKEN = '573deb033585bb0b2de8f0950ae599d8a5ea2f754c12c5ecae4e1bd74b7a'

export const useGetGasPrice = () => {
  const { ethersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider)
  const l1 = name === 'ethereum'
  const gasPriceFetcher = ethGasStationFetcher(EGS_TOKEN, 'fastest')
  const { data, error } = useSWR('getGasPrice', gasPriceFetcher)
  const { data: wei, error: err } = useSWR(`GasPriceFromOnChain/${name}`, () =>
    whenDefined(ethersProvider, prov => prov.getGasPrice().then(async res => res.toString()))
  )
  const gasPrice = useMemo(() => (l1 ? data : wei), [l1, data, wei])
  return { gasPrice, error: error || err }
}

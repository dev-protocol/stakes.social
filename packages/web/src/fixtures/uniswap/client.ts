import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { getBundleQuery, getTokenQuery, getTokenDayDatasQuery } from './gql'

const newClient = () => {
  return new ApolloClient({
    link: new HttpLink({ uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', fetch }),
    cache: new InMemoryCache()
  })
}

export interface Bundle {
  id: number
  ethPrice: string
}

export interface Token {
  id: string
  derivedETH: string
}

export interface TokenDayData {
  id: string
  date: number
  priceUSD: string
  totalLiquidityToken: string
  totalLiquidityETH: string
  totalLiquidityUSD: string
  dailyVolumeToken: string
  dailyVolumeETH: string
  dailyVolumeUSD: string
}

export const getEthPrice = (): Promise<Bundle> => {
  const client = newClient()
  return client.query({ query: getBundleQuery }).then(res => res.data.bundle)
}

export const getDevEthPrice = (): Promise<Token> => {
  const client = newClient()
  return client
    .query({ query: getTokenQuery, variables: { Id: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26' } })
    .then(res => res.data.token)
}

export const getTokenDayDatas = (): Promise<Array<TokenDayData>> => {
  const client = newClient()
  return client
    .query({ query: getTokenDayDatasQuery, variables: { token: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26' } })
    .then(res => res.data.tokenDayDatas || [])
}

import fetch from 'cross-fetch'
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import { getBundleQuery, getTokenQuery } from './gql'
import { tryCatch } from 'ramda'

const newClient = () => {
  return tryCatch(
    () =>
      new ApolloClient({
        link: new HttpLink({ uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2', fetch }),
        cache: new InMemoryCache()
      }),
    () => undefined
  )()
}

export interface Bundle {
  id: number
  ethPrice: string
}

export interface Token {
  id: string
  derivedETH: string
}

const defaultBundle: Bundle = { id: 0, ethPrice: '0' }
const defaultToken: Token = { id: '0', derivedETH: '0' }

export const getEthPrice = async (): Promise<Bundle> => {
  const client = newClient()
  return (
    client
      ?.query({ query: getBundleQuery })
      .then(res => res.data.bundle as Bundle)
      .catch(() => defaultBundle) ?? defaultBundle
  )
}

export const getDevEthPrice = async (): Promise<Token> => {
  const client = newClient()
  return (
    client
      ?.query({ query: getTokenQuery, variables: { Id: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26' } })
      .then(res => res.data.token as Token)
      .catch(() => defaultToken) ?? defaultToken
  )
}

import { gql } from '@apollo/client'

// see https://thegraph.com/explorer/subgraph/uniswap/uniswap-v2

export const getBundleQuery = gql`
  query getBundle {
    bundle(id: 1) {
      id
      ethPrice
    }
  }
`

export const getTokenQuery = gql`
  query getToken($Id: String) {
    token(id: $Id) {
      id
      derivedETH
    }
  }
`

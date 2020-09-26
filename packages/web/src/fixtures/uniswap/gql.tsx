import gql from 'graphql-tag'

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

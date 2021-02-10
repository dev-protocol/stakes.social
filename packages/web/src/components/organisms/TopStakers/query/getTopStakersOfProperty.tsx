import { gql } from '@apollo/client'

export const getTopStakersOfPropertyQuery = gql`
  query getTopStakersOfProperty($property_address: String!, $limit: Int!) {
    property_lockup(where: { property_address: { _eq: $property_address } }, order_by: { value: desc }, limit: $limit) {
      account_address
      value
    }
  }
`

export default getTopStakersOfPropertyQuery

import gql from 'graphql-tag'

export const getTopStakersOfPropertyQuery = gql`
  query getTopStakersOfProperty($property_address: String!, $notin_account_addresses: [String!], $limit: Int!) {
    property_lockup(
      where: { property_address: { _eq: $property_address }, account_address: { _nin: $notin_account_addresses } }
      order_by: { value: desc }
      limit: $limit
    ) {
      account_address
      value
    }
  }
`

export default getTopStakersOfPropertyQuery

import React from 'react'
import { useQuery } from 'react-apollo'
import getTopStakersOfPropertyQuery from './query/getTopStakersOfProperty'
import styled from 'styled-components'

interface TopStakersProps {
  propertyAdress: string
}

const ListItem = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 4fr 1fr;
`

const StakersList = styled.ol`
  list-style: none;
  padding: 12px 0 0 0 !important;

  li {
    color: black;
    border-bottom: 1px solid lightgrey;
    padding: 12px 18px;

    &:last-child {
      border-bottom: 0;
    }
  }
`

const PlaceHolderList = styled.div`
  display: flex;
  min-height: 400px;
  justify-content: center;
  align-items: center;
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const TopStakers = ({ propertyAdress }: TopStakersProps) => {
  const { data: topStakersData, loading } = useQuery(getTopStakersOfPropertyQuery, {
    variables: {
      limit: 5,
      property_address: propertyAdress
    }
  })

  const stakerItems: Array<{ account_address: string; value: number }> = topStakersData?.property_lockup

  return (
    <Flex>
      <h2>Top stakers</h2>
      {loading && (
        <PlaceHolderList>
          <div>loading...</div>
        </PlaceHolderList>
      )}

      {!loading && !topStakersData && (
        <PlaceHolderList>
          <div>No data available...</div>
        </PlaceHolderList>
      )}

      <StakersList>
        {stakerItems?.map(({ account_address, value }, index) => (
          <li key={`${account_address}-${value}`}>
            <ListItem>
              <div>{index + 1}</div>
              <Flex>
                <h3>Account address</h3>
                <span> {`${account_address}`}</span>
              </Flex>
              <Flex>
                <h3>Value</h3>
                <span>{`${(value / Math.pow(10, 18)).toFixed(2)}`}</span>
              </Flex>
            </ListItem>
          </li>
        ))}
      </StakersList>
    </Flex>
  )
}

export default TopStakers

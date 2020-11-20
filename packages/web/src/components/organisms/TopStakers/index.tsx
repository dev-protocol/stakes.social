import React from 'react'
import { useQuery } from '@apollo/client'
import getTopStakersOfPropertyQuery from './query/getTopStakersOfProperty'
import { Avatar } from 'src/components/molecules/Avatar'
import styled, { css } from 'styled-components'

interface TopStakersProps {
  propertyAdress: string
}

const PlaceHolderList = styled.div<{ noData?: boolean }>`
  ${({ noData }) => css`
    display: flex;
    min-height: ${noData ? '150px' : '400px'};
    justify-content: center;
    align-items: center;
  `}
`

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

const AccountAddress = styled.span`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 100px;
`

const TopStakerRanking = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const StakerSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 90px;
  }
`

const formatter = new Intl.NumberFormat('en-US')

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
      {loading && (
        <PlaceHolderList>
          <div>loading...</div>
        </PlaceHolderList>
      )}

      {!loading && stakerItems?.length === 0 && (
        <PlaceHolderList noData>
          <div>No data available...</div>
        </PlaceHolderList>
      )}

      <TopStakerRanking>
        {stakerItems?.map(({ account_address, value }, index) => (
          <StakerSection key={index}>
            <Avatar accountAddress={account_address} size={'100'} />
            <AccountAddress>{account_address}</AccountAddress>
            <span>{`${formatter.format(parseInt((value / Math.pow(10, 18)).toFixed(0)))}`}</span>
          </StakerSection>
        ))}
      </TopStakerRanking>
    </Flex>
  )
}

export default TopStakers

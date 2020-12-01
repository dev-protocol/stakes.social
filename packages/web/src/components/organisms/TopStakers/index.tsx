import React from 'react'
import { useQuery } from '@apollo/client'
import getTopStakersOfPropertyQuery from './query/getTopStakersOfProperty'
import { Avatar } from 'src/components/molecules/Avatar'
import styled, { css } from 'styled-components'
import { useEffect } from 'react'
import { useListTopStakersAccountLazyQuery } from '@dev/graphql'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'

interface TopStakersProps {
  propertyAdress?: string
  authorAddress?: string
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

const Staker = ({ accountAddress, value }: { accountAddress: string; value: number }) => {
  const { data } = useGetAccount(accountAddress)
  return (
    <StakerSection>
      <Avatar accountAddress={accountAddress} size={'100'} />
      <AccountAddress>{data?.name || accountAddress}</AccountAddress>
      <span>{`${formatter.format(parseInt((value / Math.pow(10, 18)).toFixed(0)))}`}</span>
    </StakerSection>
  )
}

const TopStakers = ({ authorAddress, propertyAdress }: TopStakersProps) => {
  const { data: topPropertyStakersData, loading: isPropertyStakingLoading } = useQuery(getTopStakersOfPropertyQuery, {
    variables: {
      limit: 5,
      property_address: propertyAdress
    },
    skip: !!authorAddress || !propertyAdress
  })

  const [
    fetchTopCreatorStakers,
    { data: topCreatorStakersData, loading: isCreatorStakingLoading }
  ] = useListTopStakersAccountLazyQuery()

  useEffect(() => {
    if (authorAddress) {
      fetchTopCreatorStakers({
        variables: {
          limit: 5,
          author_address: authorAddress
        }
      })
    }
  }, [authorAddress, fetchTopCreatorStakers])

  const stakerItems: Array<{ account_address: string; value: number }> =
    topPropertyStakersData?.property_lockup || topCreatorStakersData?.account_lockup

  return (
    <Flex>
      {(isPropertyStakingLoading || isCreatorStakingLoading) && (
        <PlaceHolderList>
          <div>loading...</div>
        </PlaceHolderList>
      )}

      {!isCreatorStakingLoading && !isPropertyStakingLoading && stakerItems?.length === 0 && (
        <PlaceHolderList noData>
          <div>No data available...</div>
        </PlaceHolderList>
      )}

      <TopStakerRanking>
        {stakerItems?.map(({ account_address, value }) => (
          <Staker key={account_address} accountAddress={account_address} value={value} />
        ))}
      </TopStakerRanking>
    </Flex>
  )
}

export default TopStakers

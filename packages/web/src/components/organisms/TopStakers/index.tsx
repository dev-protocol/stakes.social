// @L2 optimized
import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import getTopStakersOfPropertyQuery from './query/getTopStakersOfProperty'
import { Avatar } from 'src/components/molecules/Avatar'
import styled, { css } from 'styled-components'
import { useListTopStakersAccountLazyQuery } from '@dev/graphql'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { useENS } from 'src/fixtures/ens/hooks'
import { Spin } from 'antd'
import Link from 'next/link'
import { useIsL1, useProvider } from 'src/fixtures/wallet/hooks'
import { useDetectSTokens, useGetSTokenOwnerOf } from 'src/fixtures/dev-kit/hooks'
import { getStokenPositions } from 'src/fixtures/dev-kit/client'
import { whenDefinedAll } from 'src/fixtures/utility'

interface TopStakersProps {
  propertyAddress?: string
  authorAddress?: string
}

const PlaceHolderList = styled.div<{ noData?: boolean }>`
  ${({ noData }) => css`
    display: flex;
    min-height: ${noData ? '150px' : '300px'};
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
  max-width: 150px;
`

const TopStakerRanking = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const StakerSection = styled.div<{ isCreator?: Boolean }>`
  display: flex;
  justify-content: space-evenly;
  cursor: ${props => (props?.isCreator ? 'pointer' : 'auto')};
  flex-direction: column;
  align-items: center;
  /* padding: 1em 2em; */
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  border-radius: 6px;
  width: 180px;
  height: 180px;
  margin-bottom: 1em;
  img {
    border-radius: 90px;
  }

  @media (max-width: 768px) {
    margin-right: 0.5em;
    margin-bottom: 1em;
    width: 160px;
  }
`

const formatter = new Intl.NumberFormat('en-US')

const Staker4L2 = ({ amount, sTokenId }: { amount: number; sTokenId: number }) => {
  const { owner } = useGetSTokenOwnerOf(sTokenId)
  return (
    <>
      <StakerSection>
        <Avatar accountAddress={owner || 'unknown'} size={'100'} />
        <AccountAddress>{owner || 'unknown'}</AccountAddress>
        <span>{`${formatter.format(parseInt((amount / Math.pow(10, 18)).toFixed(0)))}`}</span>
      </StakerSection>
    </>
  )
}

const Staker = ({ accountAddress, value }: { accountAddress: string; value: number }) => {
  const [ens, setENS] = useState('')
  const { data } = useGetAccount(accountAddress)
  const isCreator = !!data
  const { getENS } = useENS()
  useEffect(() => {
    const fetchENS = async () => {
      await getENS(accountAddress || '').then((o?: string | null) => setENS(o || ''))
    }
    fetchENS()
  }, [accountAddress, getENS])
  return (
    <>
      {isCreator ? (
        <Link href={`/author/${accountAddress}`} passHref>
          <StakerSection isCreator={isCreator}>
            <Avatar accountAddress={accountAddress} size={'100'} />
            <AccountAddress>{data?.name || ens || accountAddress}</AccountAddress>
            <span>{`${formatter.format(parseInt((value / Math.pow(10, 18)).toFixed(0)))}`}</span>
          </StakerSection>
        </Link>
      ) : (
        <StakerSection>
          <Avatar accountAddress={accountAddress} size={'100'} />
          <AccountAddress>{accountAddress}</AccountAddress>
          <span>{`${formatter.format(parseInt((value / Math.pow(10, 18)).toFixed(0)))}`}</span>
        </StakerSection>
      )}
    </>
  )
}

const fetchPosition = (nonConnectedEthersProvider: any, sTokenId: number) => {
  return whenDefinedAll([nonConnectedEthersProvider, sTokenId], ([client, sTokenId]) =>
    getStokenPositions(client, sTokenId)
  )
}

interface Position {
  amount: number
  sTokenId: number
}

const TopStakers4L2 = ({ propertyAddress }: TopStakersProps) => {
  const { nonConnectedEthersProvider } = useProvider()
  const [amounts, setAmounts] = useState<Array<Position>>([])
  const { sTokensByPropertyAddress: data } = useDetectSTokens(propertyAddress)

  useEffect(() => {
    const fetcher = async () => {
      const promises = data.map(async (sTokenId: number) => {
        return fetchPosition(nonConnectedEthersProvider, sTokenId)
          ?.then((positions: any) => {
            return { amount: parseInt(positions.amount || '0'), sTokenId: sTokenId }
          })
          .catch(() => {})
      })
      const results: Position[] = await Promise.all(promises)
      const compFunc = (a: Position, b: Position): number => {
        if (a.amount < b.amount) {
          return 1
        } else if (a.amount > b.amount) {
          return -1
        }
        return 0
      }
      setAmounts(results.sort(compFunc))
    }
    data && fetcher()
  }, [data, nonConnectedEthersProvider])

  return (
    <TopStakerRanking>
      {amounts.map(({ sTokenId, amount }) => (
        <Staker4L2 key={sTokenId} amount={amount} sTokenId={sTokenId} />
      ))}
    </TopStakerRanking>
  )
}

const TopStakers = ({ authorAddress, propertyAddress }: TopStakersProps) => {
  const { isL1 } = useIsL1()
  const { data: topPropertyStakersData, loading: isPropertyStakingLoading } = useQuery(getTopStakersOfPropertyQuery, {
    variables: {
      limit: 5,
      property_address: propertyAddress
    },
    skip: !isL1 || !!authorAddress || !propertyAddress
  })

  const [fetchTopCreatorStakers, { data: topCreatorStakersData, loading: isCreatorStakingLoading }] =
    useListTopStakersAccountLazyQuery()

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

  return isL1 ? (
    <Flex>
      {(isPropertyStakingLoading || isCreatorStakingLoading) && (
        <PlaceHolderList>
          <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />
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
  ) : (
    <>
      <TopStakers4L2 propertyAddress={propertyAddress} />
    </>
  )
}

export default TopStakers

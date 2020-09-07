import React from 'react'
import moment from 'moment'
import { useMemo } from 'react'
import { toNaturalNumber } from 'src/fixtures/utility'
import { Button, Table } from 'antd'
import { Container } from 'src/components/atoms/Container'
import { H3 } from 'src/components/atoms/Typography'
import { useGetMyStakingRewardAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyAuthenticationQuery, useGetAccountLockupQuery, useGetLockupLockedupQuery } from '@dev/graphql'
import { useGetAccountAddress, useGetBlock } from 'src/fixtures/wallet/hooks'

interface Props {}

const ElapsedDayFromBlockNumber = ({ rawData }: { rawData: string }) => {
  const blockNumber = JSON.parse(rawData).blockNumber
  const { block } = useGetBlock(blockNumber)
  const elapsed = useMemo(() => {
    const stakedDay = moment(new Date((block?.timestamp as number) * 1000))
    const diff = moment().diff(stakedDay)
    const duration = moment.duration(diff)
    const days = Math.floor(duration.asDays())
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()

    let formatedElapseTime = days ? days + ' days' : ''
    formatedElapseTime = hours ? `${formatedElapseTime} ${hours}h` : formatedElapseTime
    formatedElapseTime = minutes ? `${formatedElapseTime} ${minutes}min` : formatedElapseTime
    formatedElapseTime = seconds ? `${formatedElapseTime} ${seconds}sec` : formatedElapseTime
    return block ? formatedElapseTime : undefined
  }, [block])
  return elapsed ? <span>{elapsed}</span> : <></>
}

const ElapsedDay = ({ eventId }: { eventId: string }) => {
  const { data } = useGetLockupLockedupQuery({
    variables: {
      event_id: eventId
    }
  })
  return data?.lockup_lockedup ? (
    <>
      <span>
        {data?.lockup_lockedup.map((e: any) => (
          <ElapsedDayFromBlockNumber key={eventId} rawData={e.raw_data} />
        ))}
      </span>
    </>
  ) : (
    <></>
  )
}

const StakedDayFromBlockNumber = ({ rawData }: { rawData: string }) => {
  const blockNumber = JSON.parse(rawData).blockNumber
  const { block } = useGetBlock(blockNumber)
  const stakedDay = useMemo(() => {
    const stakedDay = moment(new Date((block?.timestamp as number) * 1000))
    return block ? stakedDay.format('l') : ''
  }, [block])
  return block ? <span>{stakedDay}</span> : <></>
}

const StakedDay = ({ eventId }: { eventId: string }) => {
  const { data } = useGetLockupLockedupQuery({
    variables: {
      event_id: eventId
    }
  })
  return data?.lockup_lockedup ? (
    <>
      <span>
        {data?.lockup_lockedup.map((e: any) => (
          <StakedDayFromBlockNumber key={eventId} rawData={e.raw_data} />
        ))}
      </span>
    </>
  ) : (
    <></>
  )
}

const WithdrawableRewards = ({ propertyAddress }: { propertyAddress: string }) => {
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  return myStakingRewardAmount ? <span>{myStakingRewardAmount.dp(5).toNumber()} DEV</span> : <></>
}

const TotalEarned = ({ propertyAddress }: { propertyAddress: string }) => {
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  return totalRewardsAmount ? <span>{totalRewardsAmount.dp(5).toNumber()} DEV</span> : <></>
}

const Assets = ({ propertyAddress }: { propertyAddress: string }) => {
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && data.property_authentication.map((e: any) => e.authentication_id).join(',\n'),
    [data]
  )
  return data ? <a href={`/${propertyAddress}`}>{includeAssets}</a> : <></>
}

export const MyStakingProperties = (_: Props) => {
  const { accountAddress: account } = useGetAccountAddress()
  const { data, loading } = useGetAccountLockupQuery({
    variables: {
      account
    }
  })
  const columns = [
    {
      title: 'Property',
      dataIndex: 'property_address',
      key: 'property_address',
      render: function assetsRender(propertyAddress: string) {
        return <Assets key={propertyAddress} propertyAddress={propertyAddress} />
      }
    },
    {
      title: 'Staking amount',
      dataIndex: 'value',
      key: 'amount',
      render: function stakingAmountRender(amount: string) {
        return <span>{toNaturalNumber(amount).dp(5).toNumber() || 0} DEV</span>
      }
    },
    {
      title: 'Staked day',
      dataIndex: 'locked_up_event_id',
      key: 'day',
      render: function stakedDayRender(eventId: string) {
        return <StakedDay key={eventId} eventId={eventId} />
      }
    },
    {
      title: 'Elapsed days',
      dataIndex: 'locked_up_event_id',
      key: 'elapsed',
      render: function elapsedDaysRender(eventId: string) {
        return <ElapsedDay key={eventId} eventId={eventId} />
      }
    },
    {
      title: 'Withdrawable rewards',
      dataIndex: 'property_address',
      key: 'rewards',
      render: function withdrawableRewardsRender(propertyAddress: string) {
        return <WithdrawableRewards key={propertyAddress} propertyAddress={propertyAddress} />
      }
    },
    {
      title: 'Total earned',
      dataIndex: 'property_address',
      key: 'earned',
      render: function totalEarnedRender(propertyAddress: string) {
        return <TotalEarned key={propertyAddress} propertyAddress={propertyAddress} />
      }
    },
    {
      title: 'Action',
      key: 'action',
      render: function actionRender() {
        return (
          <>
            <Button type="primary" size="small">
              Withdraw
            </Button>
            <br />
            <Button type="primary" size="small">
              Cancel
            </Button>
          </>
        )
      }
    }
  ]

  return (
    <Container>
      <H3>My Staking Properties</H3>
      <Table dataSource={(data?.account_lockup || []) as Object[]} columns={columns} loading={loading} />
    </Container>
  )
}

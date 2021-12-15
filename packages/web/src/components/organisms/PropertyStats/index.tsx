import React from 'react'
import {
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount,
  usePropertyAuthor
} from 'src/fixtures/dev-kit/hooks'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Card, Statistic, Row } from 'antd'
import { Avatar } from 'src/components/molecules/Avatar'
import styled from 'styled-components'
import truncateEthAddress from 'truncate-eth-address'

interface Props {
  className?: string
  propertyAddress: string
}

const Title = styled.div`
  font-weight: 400;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin-bottom: 10px;
`

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const FlexRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    border-radius: 90px;
    margin-right: 10px;
  }
`

export const PropertyStats = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  useGetMyStakingRewardAmount(propertyAddress)
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)

  return (
    <div className={className}>
      <Container>
        <Row gutter={[24, 24]} justify={'start'}>
          <Card>
            <Statistic
              title="Total Staking Amount"
              value={totalStakingAmount ? totalStakingAmount.toNumber() : 'N/A'}
              precision={2}
              suffix={totalStakingAmountCurrency}
              valueStyle={{ textAlign: 'right' }}
            />
          </Card>
        </Row>
        <Row gutter={[24, 24]} justify={'start'}>
          <Card>
            <Statistic title="Total Stakers" value={12} precision={0} valueStyle={{ textAlign: 'left' }} />
          </Card>
        </Row>
        <Row gutter={[24, 24]} justify={'start'}>
          <Card>
            <Statistic
              title="Total Rewards"
              value={totalRewardsAmount && totalRewardsAmount.toNumber()}
              precision={2}
              suffix={totalRewardsAmountCurrency}
              valueStyle={{ textAlign: 'right' }}
            />
          </Card>
        </Row>
        <Row gutter={[24, 24]} justify={'start'}>
          <Card>
            <Title>Author</Title>
            <FlexRow>
              <Avatar accountAddress={authorAddress} size={'60'} />
              <span>{dataAuthor ? dataAuthor.name : 'N/A'}</span>
            </FlexRow>
            {authorAddress ? truncateEthAddress(authorAddress) : 'N/A'}
          </Card>
        </Row>
        <Row gutter={[24, 24]} justify={'start'}>
          <Card>
            <Statistic title="Created" value={'8 months ago'} precision={0} valueStyle={{ textAlign: 'left' }} />
          </Card>
        </Row>
      </Container>
    </div>
  )
}

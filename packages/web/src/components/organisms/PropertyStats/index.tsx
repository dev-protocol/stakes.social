import React from 'react'
import {
  useGetTotalStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount,
  usePropertyAuthor
} from 'src/fixtures/dev-kit/hooks'
import { useGetAccount } from 'src/fixtures/dev-for-apps/hooks'
import { Card, Statistic, Row } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

export const PropertyStats = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  useGetMyStakingRewardAmount(propertyAddress)
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const { data: dataAuthor } = useGetAccount(authorAddress)

  return (
    <div className={className}>
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
          <Statistic
            title="Author Name"
            value={dataAuthor ? dataAuthor.name : 'N/A'}
            precision={2}
            valueStyle={{ textAlign: 'right' }}
          />
        </Card>
      </Row>
      <Row gutter={[24, 24]} justify={'start'}>
        <Card>
          <Statistic
            title="Author Address"
            value={authorAddress ? authorAddress : 'N/A'}
            precision={2}
            valueStyle={{ textAlign: 'right' }}
          />
        </Card>
      </Row>
    </div>
  )
}

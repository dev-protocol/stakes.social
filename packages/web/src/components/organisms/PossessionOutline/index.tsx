import React, { useMemo } from 'react'
import {
  useGetTotalStakingAmount,
  useGetMyStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount,
  useCalculateRewardAmount,
  useGetMyHolderAmount
} from 'src/fixtures/dev-kit/hooks'
import { Card, Statistic, Row, Col } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

export const PossessionOutline = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const { myStakingRewardAmount, currency: myStakingRewardAmountCurrency } = useGetMyStakingRewardAmount(
    propertyAddress
  )
  const stakingShare = useMemo(
    () =>
      myStakingAmount && totalStakingAmount ? (myStakingAmount.toNumber() / totalStakingAmount.toNumber()) * 100 : 0,
    [myStakingAmount, totalStakingAmount]
  )
  // Todo DIP55アップ後に正しい受け取りに差し替える
  const { totalRewardsAmount: lifetimeReward } = useCalculateRewardAmount(propertyAddress)
  const { myHolderAmount: withdrawableAmount } = useGetMyHolderAmount(propertyAddress)

  return (
    <div className={className}>
      <Row gutter={[24, 24]} justify={'space-between'}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Staking Amount"
              value={totalStakingAmount ? totalStakingAmount.toNumber() : 'N/A'}
              precision={2}
              suffix={totalStakingAmountCurrency}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Rewards"
              value={totalRewardsAmount && totalRewardsAmount.toNumber()}
              precision={2}
              suffix={totalRewardsAmountCurrency}
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Lifetime Reward"
              value={lifetimeReward ? lifetimeReward.toNumber() || 0 : 'N/A'}
              precision={2}
              suffix="DEV"
            />
          </Card>
        </Col>

        <Col span={6}>
          <Card>
            <Statistic
              title="Receivable Amount"
              value={withdrawableAmount ? withdrawableAmount.toNumber() || 0 : 'N/A'}
              precision={2}
              suffix="DEV"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Your Staking Share"
              value={myStakingAmount && totalStakingAmount ? stakingShare || 0 : 'N/A'}
              precision={2}
              suffix="%"
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Your Staking Amount"
              value={myStakingAmount ? myStakingAmount.toNumber() : 'N/A'}
              precision={2}
              suffix={myStakingAmountCurrency}
            />
          </Card>
        </Col>

        <Col span={8}>
          <Card>
            <Statistic
              title="Your Rewards"
              value={myStakingRewardAmount && myStakingRewardAmount.toNumber()}
              precision={2}
              suffix={myStakingRewardAmountCurrency}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

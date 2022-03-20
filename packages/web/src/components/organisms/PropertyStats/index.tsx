import React, { useMemo } from 'react'
import {
  useGetTotalStakingAmount,
  useGetMyStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount,
  useGetMyHolderAmount
} from 'src/fixtures/dev-kit/hooks'
import { Card, Statistic } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

export const PropertyStats = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)
  const { myStakingRewardAmount, currency: myStakingRewardAmountCurrency } =
    useGetMyStakingRewardAmount(propertyAddress)
  const stakingShare = useMemo(
    () =>
      myStakingAmount && totalStakingAmount ? (myStakingAmount.toNumber() / totalStakingAmount.toNumber()) * 100 : 0,
    [myStakingAmount, totalStakingAmount]
  )
  const { myHolderAmount: withdrawableAmount, total: lifetimeReward } = useGetMyHolderAmount(propertyAddress)

  return (
    <div className={className}>
      <Card>
        <Statistic
          title="Total Staking Amount"
          value={totalStakingAmount ? totalStakingAmount.toNumber() : 'N/A'}
          precision={2}
          suffix={totalStakingAmountCurrency}
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Total Rewards"
          value={totalRewardsAmount && totalRewardsAmount.toNumber()}
          precision={2}
          suffix={totalRewardsAmountCurrency}
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Lifetime Reward"
          value={lifetimeReward ? lifetimeReward.toNumber() || 0 : 'N/A'}
          precision={2}
          suffix="DEV"
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Receivable Amount"
          value={withdrawableAmount ? withdrawableAmount.toNumber() || 0 : 'N/A'}
          precision={2}
          suffix="DEV"
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Your Staking Share"
          value={myStakingAmount && totalStakingAmount ? stakingShare || 0 : 'N/A'}
          precision={2}
          suffix="%"
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Your Staking Amount"
          value={myStakingAmount ? myStakingAmount.toNumber() : 'N/A'}
          precision={2}
          suffix={myStakingAmountCurrency}
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
      <Card>
        <Statistic
          title="Your Rewards"
          value={myStakingRewardAmount && myStakingRewardAmount.toNumber()}
          precision={2}
          suffix={myStakingRewardAmountCurrency}
          valueStyle={{ textAlign: 'right' }}
        />
      </Card>
    </div>
  )
}

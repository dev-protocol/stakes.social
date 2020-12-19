import React, { useMemo } from 'react'
import {
  useGetTotalStakingAmount,
  useGetMyStakingAmount,
  useGetTotalRewardsAmount,
  useGetMyStakingRewardAmount
} from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { Card, Statistic } from 'antd'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: stretch;
  & > *:last-child {
    grid-column: 1 / 3;
  }
  @media (min-width: 1120px) {
    grid-auto-flow: column;
    grid-template-columns: auto;
    & > *:last-child {
      grid-column: auto;
    }
  }
`

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

  return (
    <Wrap className={className}>
      <Card>
        <Statistic
          title="Total Staking Amount"
          value={totalStakingAmount ? totalStakingAmount.toNumber() : 'N/A'}
          precision={2}
          suffix={totalStakingAmountCurrency}
        />
      </Card>
      <Card>
        <Statistic
          title="Total Rewards"
          value={totalRewardsAmount && totalRewardsAmount.toNumber()}
          precision={2}
          suffix={totalRewardsAmountCurrency}
        />
      </Card>
      <Card>
        <Statistic
          title="Your Staking Share"
          value={myStakingAmount && totalStakingAmount ? stakingShare || '0' : 'N/A'}
          precision={2}
          suffix="%"
        />
      </Card>
      <Card>
        <Statistic
          title="Your Staking Amount"
          value={myStakingAmount ? myStakingAmount.toNumber() : 'N/A'}
          precision={2}
          suffix={myStakingAmountCurrency}
        />
      </Card>
      <Card>
        <Statistic
          title="Your Rewards"
          value={myStakingRewardAmount && myStakingRewardAmount.toNumber()}
          precision={2}
          suffix={myStakingRewardAmountCurrency}
        />
      </Card>
    </Wrap>
  )
}

import { Statistic } from 'antd'
import React from 'react'
import { useGetTotalStakingAmount, useGetMyStakingAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  @media (min-width: 1120px) {
    grid-auto-flow: column;
    grid-template-columns: auto;
  }
`

export const PossessionOutline = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount, currency: totalStakingAmountCurrency } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount, currency: totalRewardsAmountCurrency } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount, currency: myStakingAmountCurrency } = useGetMyStakingAmount(propertyAddress)

  return (
    <Wrap className={className}>
      <Statistic
        title="Total Staking Amount"
        value={totalStakingAmount ? totalStakingAmount.toNumber() : 'N/A'}
        precision={2}
        suffix={totalStakingAmountCurrency}
      />
      <Statistic
        title="Your Staking Amount"
        value={myStakingAmount ? myStakingAmount.toNumber() : 'N/A'}
        precision={2}
        suffix={myStakingAmountCurrency}
      />
      <Statistic
        title="Your Staking Share"
        value={
          myStakingAmount && totalStakingAmount && (myStakingAmount.toNumber() / totalStakingAmount.toNumber()) * 100
        }
        precision={2}
        suffix="%"
      />
      <Statistic
        title="Total Rewards"
        value={totalRewardsAmount && totalRewardsAmount.toNumber()}
        precision={2}
        suffix={totalRewardsAmountCurrency}
      />
    </Wrap>
  )
}

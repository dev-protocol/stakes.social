import React from 'react'
import { Statistic } from 'antd'
import { useGetTotalStakingAmount, useGetMyStakingAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, 200px);
  justify-content: space-between;
  .ant-statistic-title {
    color: #000;
  }
  @media (min-width: 1120px) {
    grid-auto-flow: column;
    grid-template-columns: auto;
  }
`

export const PossessionOutline = ({ className, propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Wrap className={className}>
      <Statistic
        title="Total Staking Amount"
        value={totalStakingAmount && totalStakingAmount.dp(5).toNumber()}
        suffix="DEV"
      />
      <Statistic title="Your Staking Amount" value={myStakingAmount && myStakingAmount.dp(5).toNumber()} suffix="DEV" />
      <Statistic
        title="Your Staking Share"
        value={
          myStakingAmount &&
          totalStakingAmount &&
          (myStakingAmount.dp(5).toNumber() / totalStakingAmount.dp(5).toNumber()) * 100
        }
        suffix="%"
      />
      <Statistic title="Total Rewards" value={totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()} suffix="DEV" />
    </Wrap>
  )
}

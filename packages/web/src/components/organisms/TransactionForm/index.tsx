import React, { useCallback } from 'react'
import { useWithdrawStakingReward, useGetMyStakingRewardAmount } from 'src/fixtures/dev-kit/hooks'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { WithdrawForm } from 'src/components/molecules/WithdrawForm'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-gap: 3rem;
    grid-auto-flow: column;
  }
`

export const TransactionForm = ({ className, propertyAddress }: Props) => {
  const { withdrawStakingReward } = useWithdrawStakingReward()
  const { withdrawHolder } = useWithdrawHolderReward()
  const { dev: rewardedDev } = useGetMyStakingRewardAmount(propertyAddress)
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)

  const handleWithdrawStakingReward = useCallback(
    () => withdrawStakingReward(propertyAddress),
    [propertyAddress, withdrawStakingReward]
  )
  const handleWithdrawHolder = useCallback(() => withdrawHolder(propertyAddress), [propertyAddress, withdrawHolder])

  return (
    <Wrap className={className}>
      <WithdrawForm label="Stakers" onSubmitWithdraw={handleWithdrawStakingReward} amount={rewardedDev} />
      <WithdrawForm label="Creators" onSubmitWithdraw={handleWithdrawHolder} amount={myHolderAmount} />
    </Wrap>
  )
}

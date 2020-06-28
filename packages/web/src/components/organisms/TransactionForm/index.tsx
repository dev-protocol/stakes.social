import React, { useState, useCallback } from 'react'
import {
  useWithdrawStaking,
  useWithdrawStakingReward,
  useCancelStaking,
  useGetMyStakingRewardAmount
} from 'src/fixtures/dev-kit/hooks'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { InputFormCard } from 'src/components/molecules/InputFormCard'
import { CancelStakingCard } from 'src/components/molecules/CancelStakingCard'
import { getBlockNumber } from 'src/fixtures/wallet/utility'
import styled from 'styled-components'
import { useEffectAsync } from 'src/fixtures/utility'
import { getWithdrawalStatus } from 'src/fixtures/dev-kit/client'

interface Props {
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const TransactionForm = ({ propertyAddress }: Props) => {
  const [isCancelCompleted, setIsCancelCompleted] = useState(false)
  const { stake } = useStake()
  const { cancel } = useCancelStaking()
  const { withdrawStaking } = useWithdrawStaking()
  const { withdrawStakingReward } = useWithdrawStakingReward()
  const { withdrawHolder } = useWithdrawHolderReward()
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const checkWithdrawable = useCallback(
    () =>
      Promise.all([getWithdrawalStatus(propertyAddress), getBlockNumber()]).then(([withdrawStatus, blockNumber]) =>
        Boolean(withdrawStatus && blockNumber && withdrawStatus <= blockNumber)
      ),
    [propertyAddress]
  )
  const handleSubmit = React.useCallback(
    (amount: string) => {
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress]
  )
  const handleWithdrawStakingReward = useCallback(() => withdrawStakingReward(propertyAddress), [
    propertyAddress,
    withdrawStakingReward
  ])
  const handleWithdrawHolder = useCallback(() => withdrawHolder(propertyAddress), [propertyAddress, withdrawHolder])
  const handleCancelStaking = useCallback(() => {
    cancel(propertyAddress)
      .then(checkWithdrawable)
      .then(withdrawable => setIsCancelCompleted(withdrawable))
      .catch(() => setIsCancelCompleted(false))
  }, [propertyAddress, cancel, checkWithdrawable])
  const handleWithdrawStaking = useCallback(() => {
    withdrawStaking(propertyAddress)
  }, [propertyAddress, withdrawStaking])

  useEffectAsync(async () => {
    checkWithdrawable().then(withdrawable => {
      setIsCancelCompleted(withdrawable)
    })
  })

  return (
    <Wrap>
      <InputFormCard label="Stake Now" suffix="DEV" onSubmitStake={handleSubmit} />
      <WithdrawCard label="Staking" onSubmitWithdraw={handleWithdrawStakingReward} amount={myStakingRewardAmount} />
      <WithdrawCard label="Holder" onSubmitWithdraw={handleWithdrawHolder} amount={myHolderAmount} />
      <CancelStakingCard
        onClickCancel={handleCancelStaking}
        onClickWithdraw={handleWithdrawStaking}
        disabledWithdraw={!isCancelCompleted}
      />
    </Wrap>
  )
}

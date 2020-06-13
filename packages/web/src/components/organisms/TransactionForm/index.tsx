import React, { useCallback, useMemo } from 'react'
import {
  useWithdrawStakingReward,
  useCancelStaking,
  useAllocate,
  useGetMyStakingRewardAmount
} from 'src/fixtures/dev-kit/hooks'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { InputFormCard } from 'src/components/molecules/InputFormCard'
import { useGetLastAllocatorAllocationResultQuery, useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { ButtonCard } from 'src/components/molecules/ButtonCard'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
`

export const TransactionForm = ({ propertyAddress }: Props) => {
  const { stake } = useStake()
  const { cancel } = useCancelStaking()
  const { allocate } = useAllocate()
  const { withdrawStakingReward } = useWithdrawStakingReward()
  const { withdrawHolder } = useWithdrawHolderReward()
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { data } = useGetLastAllocatorAllocationResultQuery({ variables: { propertyAddress } })
  const { data: propertyAuthData } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const metricsAddress = useMemo(() => propertyAuthData?.property_authentication[0]?.metrics, [propertyAuthData])
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
  const handleCancelStaking = useCallback(() => cancel(propertyAddress), [propertyAddress, cancel])
  const handleMining = useCallback(
    (e?: React.MouseEvent<HTMLElement, MouseEvent>) => {
      e?.preventDefault()
      metricsAddress && allocate(metricsAddress)
    },
    [metricsAddress, allocate]
  )

  return (
    <Wrap>
      <InputFormCard label="Stake Now" suffix="DEV" onSubmitStake={handleSubmit} />
      <WithdrawCard
        label="Staking"
        onSubmitWithdraw={handleWithdrawStakingReward}
        amount={myStakingRewardAmount}
        lastUpdate={data?.allocator_allocation_result[0]?.block_number}
        onClickMining={handleMining}
      />
      <WithdrawCard
        label="Holder"
        onSubmitWithdraw={handleWithdrawHolder}
        amount={myHolderAmount}
        lastUpdate={data?.allocator_allocation_result[0]?.block_number}
        onClickMining={handleMining}
      />
      <ButtonCard label="Cancel Staking" buttonLabel="Cancel" onClick={handleCancelStaking} />
      <p>
        Are you already canceled? To withdraw it, please use Etherscan because developing the UI.{' '}
        <a
          href="https://spectrum.chat/devtoken/general/how-to-withdraw-your-stake~751c00bc-3dde-4d41-a28d-e0b81972f8a4"
          target="_blank"
          rel="noreferrer"
        >
          And here{`'`}s how to use Etherscan
        </a>
        .
      </p>
    </Wrap>
  )
}

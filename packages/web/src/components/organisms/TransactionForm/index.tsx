import React, { useCallback } from 'react'
import { Space } from 'antd'
import { useGetMyStakingAmount, useWithdrawStakingReward } from 'src/fixtures/dev-kit/hooks'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { InputFormCard } from 'src/components/molecules/InputFormCard'
import { useGetLastAllocatorAllocationResultQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const TransactionForm = ({ propertyAddress }: Props) => {
  const { withdrawStaking } = useWithdrawStakingReward()
  const { withdrawHolder } = useWithdrawHolderReward()
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { data } = useGetLastAllocatorAllocationResultQuery({ variables: { propertyAddress } })
  const handleWithdrawStaking = useCallback(() => withdrawStaking(propertyAddress), [propertyAddress, withdrawStaking])
  const handleWithdrawHolder = useCallback(() => withdrawHolder(propertyAddress), [propertyAddress, withdrawHolder])

  return (
    <Space size={46} direction="vertical">
      <WithdrawCard
        label="Staking"
        onSubmitWithdraw={handleWithdrawStaking}
        amount={myStakingAmount}
        lastUpdate={data?.allocator_allocation_result[0].block_number}
      />
      <WithdrawCard
        label="Holder"
        onSubmitWithdraw={handleWithdrawHolder}
        amount={myHolderAmount}
        lastUpdate={data?.allocator_allocation_result[0].block_number}
      />
      <InputFormCard label="Stake Now" suffix="DEV" onSubmitStake={() => console.log('submit')} />
    </Space>
  )
}

import React from 'react'
import { useGetMyStakingAmount, useWithdrawStakingAmount } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { useCallback } from 'react'
import { useGetLastAllocatorAllocationResultQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const WithdrawStakingCard = ({ propertyAddress }: Props) => {
  const { withdraw } = useWithdrawStakingAmount()
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetLastAllocatorAllocationResultQuery({ variables: { propertyAddress } })

  const handleWithdraw = useCallback(() => withdraw(propertyAddress), [propertyAddress, withdraw])

  return (
    <WithdrawCard
      label="Staking"
      onSubmitWithdraw={handleWithdraw}
      amount={myStakingAmount}
      lastUpdate={data?.allocator_allocation_result[0].block_number}
    />
  )
}

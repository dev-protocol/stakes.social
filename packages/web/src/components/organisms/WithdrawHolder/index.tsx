import React from 'react'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { useCallback } from 'react'
import { useGetLastAllocatorAllocationResultQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const WithdrawHolderCard = ({ propertyAddress }: Props) => {
  const { withdraw } = useWithdrawHolderReward()
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { data } = useGetLastAllocatorAllocationResultQuery({ variables: { propertyAddress } })

  const handleWithdraw = useCallback(() => withdraw(propertyAddress), [propertyAddress, withdraw])

  return (
    <WithdrawCard
      label="Holder"
      onSubmitWithdraw={handleWithdraw}
      amount={myHolderAmount}
      lastUpdate={data?.allocator_allocation_result[0].block_number}
    />
  )
}

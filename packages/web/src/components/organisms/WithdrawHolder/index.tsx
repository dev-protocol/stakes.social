import React from 'react'
import { useWithdrawHolderReward, useGetMyHolderAmount } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { useCallback } from 'react'

interface Props {
  propertyAddress: string
}

export const WithdrawHolderCard = ({ propertyAddress }: Props) => {
  const { withdraw } = useWithdrawHolderReward()
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)

  const handleWithdraw = useCallback(() => withdraw(propertyAddress), [propertyAddress, withdraw])

  return <WithdrawCard label="Holder" onSubmitWithdraw={handleWithdraw} amount={myHolderAmount} lastUpdate="24141241" />
}

import React from 'react'
import { useWithdrawHolderReward } from 'src/fixtures/dev-kit/hooks'
import { WithdrawCard } from 'src/components/molecules/WithdrawCard'
import { useCallback } from 'react'
import BigNumber from 'bignumber.js'

interface Props {
  propertyAddress: string
}

export const WithdrawHolderCard = ({ propertyAddress }: Props) => {
  const { withdraw } = useWithdrawHolderReward()

  const handleWithdraw = useCallback(() => withdraw(propertyAddress), [propertyAddress, withdraw])

  return (
    <WithdrawCard
      label="Holder"
      onSubmitWithdraw={handleWithdraw}
      amount={new BigNumber(1000000)}
      lastUpdate="24141241"
    />
  )
}

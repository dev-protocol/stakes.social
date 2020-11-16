import React, { useCallback } from 'react'
import { useGetMyHolderAmount, useWithdrawHolderReward } from 'src/fixtures/dev-kit/hooks'
import { TransactForm } from 'src/components/molecules/TransactForm'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

export const WithdrawalForHolders = ({ className, title, propertyAddress }: Props) => {
  const { myHolderAmount } = useGetMyHolderAmount(propertyAddress)
  const { withdrawHolder } = useWithdrawHolderReward()
  const withdraw = useCallback(() => {
    withdrawHolder(propertyAddress)
  }, [withdrawHolder, propertyAddress])

  return (
    <TransactForm
      className={className}
      title={title}
      id="withdrawalForHolders"
      enterButton="Withdraw"
      value={myHolderAmount?.toFixed()}
      onSearch={withdraw}
      suffix="DEV"
      estimateTitle="Withdrawable Amount"
      estimatedValue={<p>{myHolderAmount?.toFixed() || 0} DEV</p>}
    ></TransactForm>
  )
}

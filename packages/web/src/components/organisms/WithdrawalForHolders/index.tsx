import React, { useCallback, useMemo } from 'react'
import { useGetMyHolderAmount, useWithdrawHolderReward } from 'src/fixtures/dev-kit/hooks'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/TransactForm/Estimated'

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
  const Label = useMemo(() => (title ? () => <label htmlFor="withdrawalForHolders">{title}</label> : () => <></>), [
    title
  ])

  return (
    <FormContainer>
      <Label />
      <TransactForm
        className={className}
        id="withdrawalForHolders"
        enterButton="Withdraw"
        value={myHolderAmount?.toFixed()}
        onSearch={withdraw}
        suffix="DEV"
      ></TransactForm>
      <Estimated title="Withdrawable Amount">{<p>{myHolderAmount?.toFixed() || 0} DEV</p>}</Estimated>
    </FormContainer>
  )
}

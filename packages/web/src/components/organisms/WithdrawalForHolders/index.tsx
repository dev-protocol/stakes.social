import React, { useCallback, useMemo } from 'react'
import { useGetMyHolderAmount, useWithdrawHolderReward } from 'src/fixtures/dev-kit/hooks'
import { WithdrawTransactForm } from 'src/components/molecules/WithdrawTransactForm'
import { FormContainer } from 'src/components/molecules/WithdrawTransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/WithdrawTransactForm/Estimated'

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
  const Label = useMemo(
    () => (title ? () => <label htmlFor="withdrawalForHolders">{title}</label> : () => <></>),
    [title]
  )

  return (
    <FormContainer>
      <Label />
      <WithdrawTransactForm
        className={className}
        id="withdrawalForHolders"
        enterButton="Withdraw"
        value={myHolderAmount?.toFixed()}
        withdraw={withdraw}
        suffix="DEV"
        propertyAddress={propertyAddress}
      />
      <Estimated title="Withdrawable Amount">{<p>{myHolderAmount?.toFixed() || 0} DEV</p>}</Estimated>
    </FormContainer>
  )
}

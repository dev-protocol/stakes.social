import React, { useCallback, useState, useMemo, ChangeEvent, useEffect } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useWithdrawStaking } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
  onChange?: (value: string) => void
}

export const Withdraw = ({ className, title, propertyAddress, onChange: onChangeAmount }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const { web3, accountAddress } = useProvider()
  const { withdrawStaking } = useWithdrawStaking()
  const withdrawFor = useCallback(
    (amount: string) => {
      withdrawStaking(propertyAddress, toAmountNumber(amount))
    },
    [withdrawStaking, propertyAddress]
  )
  const onClickMax = () =>
    whenDefinedAll([web3, accountAddress], ([libWeb3, account]) =>
      getMyStakingAmount(libWeb3, propertyAddress, account)
        .then(async x => toNaturalNumber(x))
        .then(x => setWithdrawAmount(x.toFixed()))
    )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(event.target.value)
  }
  useEffect(() => {
    if (onChangeAmount) {
      onChangeAmount(withdrawAmount)
    }
  }, [withdrawAmount, onChangeAmount])

  const Label = useMemo(() => (title ? () => <label htmlFor="withdraw">{title}</label> : () => <></>), [title])

  return (
    <FormContainer>
      <Label />
      <TransactForm
        className={className}
        id="withdraw"
        enterButton="Withdraw"
        value={withdrawAmount}
        onChange={onChange}
        onSearch={withdrawFor}
        onClickMax={onClickMax}
      ></TransactForm>
    </FormContainer>
  )
}

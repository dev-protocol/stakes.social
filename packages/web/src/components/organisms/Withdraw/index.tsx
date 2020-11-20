import React, { useCallback, useState, useMemo, ChangeEvent } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useWithdrawStaking } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import styled from 'styled-components'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  gap: 0.5rem;
  justify-content: stretch;
  align-items: center;
  grid-template-columns: auto 1fr;
`

export const Withdraw = ({ className, title, propertyAddress }: Props) => {
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
  const onChange = useMemo(
    () => (event: ChangeEvent<HTMLInputElement>) => {
      setWithdrawAmount(event.target.value)
    },
    [setWithdrawAmount]
  )

  const Label = useMemo(() => (title ? () => <label htmlFor="withdraw">{title}</label> : () => <></>), [title])

  return (
    <FormContainer>
      <Label />
      <Wrap>
        <TransactForm
          className={className}
          id="withdraw"
          enterButton="Withdraw"
          value={withdrawAmount}
          onChange={onChange}
          onSearch={withdrawFor}
          onClickMax={onClickMax}
        ></TransactForm>
      </Wrap>
    </FormContainer>
  )
}

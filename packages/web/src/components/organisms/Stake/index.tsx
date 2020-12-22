import React, { useCallback, useState, ChangeEvent, useMemo } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { balanceOf } from 'src/fixtures/dev-kit/client'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { IncognitoSwitch } from 'src/components/molecules/IncognitoSwitch'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

export const Stake = ({ className, title, propertyAddress }: Props) => {
  const [stakeAmount, setStakeAmount] = useState<string>('')
  const { web3, accountAddress } = useProvider()
  const { stake } = useStake()
  const stakeFor = useCallback(
    (amount: string) => {
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress]
  )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setStakeAmount(event.target.value)
  }
  const onClickMax = () =>
    whenDefinedAll([web3, accountAddress], ([libWeb3, account]) =>
      balanceOf(libWeb3, account)
        .then(async x => toNaturalNumber(x))
        .then(x => setStakeAmount(x.toFixed()))
    )
  const Label = useMemo(() => (title ? () => <label htmlFor="stake">{title}</label> : () => <></>), [title])

  return (
    <FormContainer>
      <Label />
      <TransactForm
        className={className}
        id="stake"
        enterButton="Stake"
        value={stakeAmount}
        onChange={onChange}
        onSearch={stakeFor}
        onClickMax={onClickMax}
      />
      <div style={{ height: '40px' }}>
        <IncognitoSwitch propertyAddress={propertyAddress} />
      </div>
    </FormContainer>
  )
}

import React, { useCallback, useState, ChangeEvent, useMemo } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { balanceOf } from 'src/fixtures/dev-kit/client'
import { useStake, useGetEstimateGas4Stake } from 'src/fixtures/dev-kit/hooks'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { EstimatedGasFeeCard } from 'src/components/molecules/EstimatedGasFeeCard'
import { message } from 'antd'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

export const Stake = ({ className, title, propertyAddress }: Props) => {
  const [stakeAmount, setStakeAmount] = useState<string>('')
  const { web3, accountAddress } = useProvider()
  const { stake } = useStake()
  const { estimateGas } = useGetEstimateGas4Stake(propertyAddress, stakeAmount || undefined)
  const { data: ethPrice } = useGetEthPrice()
  const estimateGasUSD = useMemo(
    () => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)),
    [estimateGas, ethPrice]
  )
  const stakeFor = useCallback(
    (amount: string) => {
      if (!web3) {
        message.warn({ content: 'Please sign in', key: 'StakeButton' })
        return
      }
      const amountNumber = toAmountNumber(amount)
      if (amountNumber.toNumber() <= 0) {
        message.warn({ content: 'Please enter a value greater than 0', key: 'StakeButton' })
        return
      }
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress, web3]
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
        disabled={!web3}
        onClickMax={onClickMax}
      />
      <div style={{ height: '40px' }}></div>
      <EstimatedGasFeeCard
        estimatedGasFee={estimateGas ? estimateGas.toFixed(6) : '-'}
        estimatedGasFeeUSD={estimateGasUSD ? estimateGasUSD.toFixed(2) : ''}
      />
    </FormContainer>
  )
}

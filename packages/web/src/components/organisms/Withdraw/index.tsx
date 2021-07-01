import React, { useCallback, useState, useMemo, ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import { useWithdrawStaking, useGetEstimateGas4WithdrawStakingAmount } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import InfoCircleOutlined from '@ant-design/icons/lib/icons/InfoCircleOutlined'
import { EstimatedGasFeeCard } from 'src/components/molecules/EstimatedGasFeeCard'
import { message } from 'antd'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
  onChange?: (value: string) => void
  isDisplayFee?: boolean
}

const InfoContainer = styled.div`
  margin-right: 20px;
  svg {
    width: 1.5em;
    height: auto;
  }
`

const SubtitleContianer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Withdraw = ({ className, title, propertyAddress, onChange: onChangeAmount, isDisplayFee }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const { web3, accountAddress } = useProvider()
  const { withdrawStaking } = useWithdrawStaking()
  const { estimateGas } = useGetEstimateGas4WithdrawStakingAmount(propertyAddress, withdrawAmount || '0')
  const { data: ethPrice } = useGetEthPrice()
  const estimateGasUSD = useMemo(
    () => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)),
    [estimateGas, ethPrice]
  )
  const withdrawFor = useCallback(
    (amount: string) => {
      if (!web3) {
        message.warn({ content: 'Please sign in', key: 'WithdrawButton' })
        return
      }
      const amountNumber = toAmountNumber(amount)
      if (amountNumber.toNumber() < 0) {
        message.warn({ content: 'Please enter a value greater than or equal to 0', key: 'WithdrawButton' })
        return
      }
      withdrawStaking(propertyAddress, amountNumber)
    },
    [withdrawStaking, propertyAddress, web3]
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
        disabled={!web3}
        onClickMax={onClickMax}
      />
      <SubtitleContianer>
        <InfoContainer>
          <InfoCircleOutlined />
        </InfoContainer>
        <span style={{ fontSize: '0.8em' }}>
          You will receive all accumulated rewards when withdrawing any amount of staked DEV.
        </span>
      </SubtitleContianer>
      {isDisplayFee ? (
        <EstimatedGasFeeCard
          estimatedGasFee={estimateGas ? estimateGas.toFixed(6) : '-'}
          estimatedGasFeeUSD={estimateGasUSD ? estimateGasUSD.toFixed(2) : ''}
        />
      ) : (
        <></>
      )}
    </FormContainer>
  )
}

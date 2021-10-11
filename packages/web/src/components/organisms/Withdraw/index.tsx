import React, { useCallback, useState, useMemo, ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount, getStokenPositions } from 'src/fixtures/dev-kit/client'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import {
  useGetEstimateGas4WithdrawStakingAmount,
  useWithdrawByPosition,
  useWithdrawStaking
} from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { WithdrawTransactForm } from 'src/components/molecules/WithdrawTransactForm'
import { FormContainer } from 'src/components/molecules/WithdrawTransactForm/FormContainer'
import { EstimatedGasFeeCard } from 'src/components/molecules/EstimatedGasFeeCard'
import { InfoCircleOutlined } from '@ant-design/icons'
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
  const { withdrawStaking: legacyWithdrawStaking } = useWithdrawStaking()
  const { withdrawByPosition } = useWithdrawByPosition()
  const { estimateGas } = useGetEstimateGas4WithdrawStakingAmount(propertyAddress, withdrawAmount || '0')
  const { data: ethPrice } = useGetEthPrice()

  const amountNumber = useMemo(() => toAmountNumber(withdrawAmount), [withdrawAmount])
  const estimateGasUSD = useMemo(
    () => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)),
    [estimateGas, ethPrice]
  )
  const onClickMax = (sTokenId?: number) =>
    whenDefinedAll([web3, sTokenId], ([libWeb3, tokenId]) =>
      getStokenPositions(libWeb3, tokenId)
        .then(async x => toNaturalNumber(x?.amount))
        .then(x => setWithdrawAmount(x.toFixed()))
    ) ||
    whenDefinedAll([web3, propertyAddress, accountAddress], ([libWeb3, property, account]) =>
      getMyStakingAmount(libWeb3, property, account)
        .then(async x => toNaturalNumber(x))
        .then(x => setWithdrawAmount(x.toFixed()))
    )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(event.target.value)
  }
  const withdraw = useCallback(
    (sTokenId?: number) => {
      if (!web3) {
        message.warn({ content: 'Please sign in', key: 'WithdrawButton' })
        return
      }
      if (amountNumber.toNumber() < 0) {
        message.warn({ content: 'Please enter a value greater than or equal to 0', key: 'WithdrawButton' })
        return
      }
      if (!sTokenId) {
        legacyWithdrawStaking(propertyAddress, amountNumber)
        return
      }
      withdrawByPosition(sTokenId.toString(), amountNumber.toFixed())
    },
    [web3, amountNumber, withdrawByPosition, legacyWithdrawStaking, propertyAddress]
  )
  useEffect(() => {
    if (onChangeAmount) {
      onChangeAmount(withdrawAmount)
    }
  }, [withdrawAmount, onChangeAmount])

  const Label = useMemo(() => (title ? () => <label htmlFor="withdraw">{title}</label> : () => <></>), [title])

  return (
    <FormContainer>
      <Label />
      <WithdrawTransactForm
        className={className}
        id="withdraw"
        enterButton="Withdraw"
        value={withdrawAmount}
        onChange={onChange}
        withdraw={withdraw}
        disabled={!web3}
        onClickMax={onClickMax}
        propertyAddress={propertyAddress}
      />
      <SubtitleContianer>
        <InfoContainer>
          <InfoCircleOutlined />
        </InfoContainer>
        <span style={{ fontSize: '0.8em' }}>
          You will receive all accumulated rewards when withdrawing any amount of staked DEV.
        </span>
      </SubtitleContianer>
      {isDisplayFee && (
        <EstimatedGasFeeCard
          estimatedGasFee={estimateGas ? estimateGas.toFixed(6) : '-'}
          estimatedGasFeeUSD={estimateGasUSD ? estimateGasUSD.toFixed(2) : ''}
        />
      )}
    </FormContainer>
  )
}

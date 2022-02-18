import React, { useCallback, useState, useMemo, ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount, getStokenPositions } from 'src/fixtures/dev-kit/client'
import { useWithdrawByPosition, useWithdrawStaking } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { WithdrawTransactForm } from 'src/components/molecules/WithdrawTransactForm'
import { FormContainer } from 'src/components/molecules/WithdrawTransactForm/FormContainer'
import { InfoCircleOutlined } from '@ant-design/icons'
import { message } from 'antd'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
  onChange?: (value: string, sTokenId?: number) => void
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

export const Withdraw = ({ className, title, propertyAddress, onChange: onChangeAmount }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>('0')
  const [selectedSTokenId, setSelectedSTokenId] = useState<number | undefined>(undefined)
  const { ethersProvider, accountAddress } = useProvider()
  const { withdrawStaking: legacyWithdrawStaking } = useWithdrawStaking()
  const { withdrawByPosition } = useWithdrawByPosition()

  const amountNumber = useMemo(() => toAmountNumber(withdrawAmount), [withdrawAmount])
  const onClickMax = (sTokenId?: number) =>
    whenDefinedAll([ethersProvider, sTokenId], ([prov, tokenId]) =>
      getStokenPositions(prov, tokenId)
        .then(async x => toNaturalNumber(x?.amount))
        .then(x => {
          setWithdrawAmount(x.toFixed())
          setSelectedSTokenId(sTokenId)
        })
    ) ||
    whenDefinedAll([ethersProvider, propertyAddress, accountAddress], ([prov, property, account]) =>
      getMyStakingAmount(prov, property, account)
        .then(async x => toNaturalNumber(x))
        .then(x => setWithdrawAmount(x.toFixed()))
    )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(event.target.value)
  }
  const onChangeRadio = (sTokenId?: number) => setSelectedSTokenId(sTokenId)
  const withdraw = useCallback(
    (sTokenId?: number) => {
      if (!ethersProvider) {
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
    [ethersProvider, amountNumber, withdrawByPosition, legacyWithdrawStaking, propertyAddress]
  )
  useEffect(() => {
    if (onChangeAmount) {
      onChangeAmount(withdrawAmount, selectedSTokenId)
    }
  }, [withdrawAmount, onChangeAmount, selectedSTokenId])

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
        onChangeRadio={onChangeRadio}
        withdraw={withdraw}
        disabled={!ethersProvider}
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
    </FormContainer>
  )
}

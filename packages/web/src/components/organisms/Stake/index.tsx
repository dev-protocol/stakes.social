import React, { useState, useMemo } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { balanceOf } from 'src/fixtures/dev-kit/client'
import {
  useGetEstimateGas4Stake,
  useDepositToPosition,
  useDepositToProperty,
  useApprove,
  useDetectSTokens
} from 'src/fixtures/dev-kit/hooks'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import { toAmountNumber, toNaturalNumber, whenDefinedAll } from 'src/fixtures/utility'
import { FormContainer } from 'src/components/molecules/WithdrawTransactForm/FormContainer'
import { EstimatedGasFeeCard } from 'src/components/molecules/EstimatedGasFeeCard'
import { message, Button, Input, Radio, Space, Row, Col, RadioChangeEvent } from 'antd'
import styled from 'styled-components'
import { Max } from 'src/components/molecules/Max'
import { PositionText } from './PositionText'
import RightArrow from 'src/components/organisms/Incubator/molecules/RightArrow'
import { getContractAddress } from 'src/fixtures/dev-kit/get-contract-address'
import { contractFactory } from '@devprotocol/dev-kit'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

const StyledForm = styled(Input)`
  width: inherit;
  bottom: 0;
  .ant-input-affix-wrapper-focused {
    box-shadow: none;
    outline: 0;
    -webkit-box-shadow: none;
  }
  .ant-input-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .ant-input-group-addon,
  .ant-btn {
    width: 100%;
  }
  .ant-input-affix-wrapper,
  .ant-input-search,
  .ant-btn {
    border: ${props => (props.id === 'withdraw' ? '2px solid #5B5B5B' : '2px solid #2f80ed')};
  }
  .ant-input-search {
    border-right: 0;
  }
  .ant-input-group-addon {
    .ant-btn {
      border-left: 0;
      height: 100%;
      font-size: 1.2rem;
      background-image: ${props =>
        props.id === 'withdraw'
          ? 'linear-gradient(to right, #5B5B5B, #2A2A2A)'
          : 'linear-gradient(to right, #2f80ed, #1ac9fc)'};
    }
  }
  input {
    font-size: 1.6rem;
  }
`

const StyledButton = styled(Button)`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  border: 2px solid #2f80ed;
  &:hover {
    background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
    border: 2px solid #2f80ed;
  }
`

const WrapStyledButton = styled.div`
  width: 100%;
  margin-top: 12px;
`

const WrapRightArrowCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Wrap = styled.div`
  display: grid;
`

const DEFAULT_RADIO_VALUE = -1

export const Stake = ({ className, title, propertyAddress }: Props) => {
  const { ethersProvider, accountAddress } = useProvider()
  const { depositToPosition } = useDepositToPosition()
  const { depositToProperty } = useDepositToProperty()
  const { approve, ok } = useApprove()

  const [stakeAmount, setStakeAmount] = useState('')
  const [radioValue, setRadioValue] = useState(0)
  const { sTokens } = useDetectSTokens(propertyAddress, accountAddress)
  const disabled = useMemo(() => !ethersProvider, [ethersProvider])
  const amountNumber = useMemo(() => toAmountNumber(stakeAmount), [stakeAmount])

  const { estimateGas } = useGetEstimateGas4Stake(propertyAddress, stakeAmount || undefined)
  const { data: ethPrice } = useGetEthPrice()
  const estimateGasUSD = useMemo(
    () => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)),
    [estimateGas, ethPrice]
  )

  const handleChangeRadio = (event: RadioChangeEvent) => {
    setRadioValue(event.target.value)
  }

  const handleApprove = async () => {
    if (!ethersProvider) {
      message.warn({ content: 'Please sign in', key: 'StakeButton' })
      return
    }
    if (amountNumber.toNumber() <= 0) {
      message.warn({ content: 'Please enter a value greater than 0', key: 'StakeButton' })
      return
    }
    approve(await getContractAddress(contractFactory(ethersProvider), 'lockup'), amountNumber.toFixed())
  }

  const handleStake = () => {
    if (typeof radioValue === 'undefined') {
      message.warn({ content: 'No position selected', key: 'StakeButton' })
      return
    }
    if (radioValue > DEFAULT_RADIO_VALUE) {
      console.log('depositToPosition', radioValue)
      depositToPosition(`${radioValue}`, amountNumber.toFixed())
    } else {
      console.log('depositToProperty', propertyAddress)
      depositToProperty(propertyAddress, amountNumber.toFixed())
    }
  }

  const Label = useMemo(() => (title ? () => <label htmlFor="stake">{title}</label> : () => <></>), [title])

  const suffix = useMemo(
    () => (
      <Max
        onClick={() =>
          whenDefinedAll([ethersProvider, accountAddress], ([libWeb3, account]) =>
            balanceOf(libWeb3, account)
              .then(async x => toNaturalNumber(x))
              .then(x => setStakeAmount(x.toFixed()))
          )
        }
      />
    ),
    [accountAddress, ethersProvider]
  )

  return (
    <FormContainer>
      <Label />
      <Wrap className={className} style={{ opacity: disabled ? '0.3' : '1.0' }}>
        <Radio.Group onChange={handleChangeRadio} value={radioValue} style={{ marginBottom: '12px' }}>
          <Space direction="vertical">
            <Radio value={DEFAULT_RADIO_VALUE}>
              <span style={{ marginLeft: '12px' }}>New position</span>
            </Radio>
            )
            {sTokens?.map((stoken, idx) => (
              <Radio value={stoken} key={idx}>
                <PositionText sTokenId={stoken} />
              </Radio>
            ))}
          </Space>
        </Radio.Group>

        <StyledForm
          id="stake"
          size="large"
          value={stakeAmount}
          onChange={event => setStakeAmount(event.target.value)}
          disabled={disabled || ok}
          suffix={suffix}
          type="number"
        />
        <WrapStyledButton>
          <Row>
            <Col span={11}>
              <StyledButton type="primary" onClick={handleApprove} disabled={disabled || ok}>
                Approve
              </StyledButton>
            </Col>
            <WrapRightArrowCol span={2}>
              <RightArrow />
            </WrapRightArrowCol>
            <Col span={11}>
              <StyledButton type="primary" disabled={!ok} onClick={handleStake}>
                Stake
              </StyledButton>
            </Col>
          </Row>
        </WrapStyledButton>
      </Wrap>
      <div style={{ height: '40px' }}></div>
      <EstimatedGasFeeCard
        estimatedGasFee={estimateGas ? estimateGas.toFixed(6) : '-'}
        estimatedGasFeeUSD={estimateGasUSD ? estimateGasUSD.toFixed(2) : ''}
      />
    </FormContainer>
  )
}

import { Button, Form, Steps } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toAmountNumber, toNaturalNumber } from 'src/fixtures/utility'
import { ETHDEV_V2_ADDRESS } from '../../fixtures/constants/address'
import { estimateReward } from '../../fixtures/geyser/client'
import { useStake } from '../../fixtures/geyser/hooks'
import { allowance, balanceOf } from '../../fixtures/uniswap-pool/client'
import { useApprove } from '../../fixtures/uniswap-pool/hooks'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

export const Deposit = () => {
  const { Item } = Form
  const { Step } = Steps
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const [estimatedReward, setEstimatedReward] = useState(0)
  const [requireApproval, setRequireApproval] = useState(true)
  const [requireDeposit, setRequireDeposit] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const approve = useApprove()
  const stake = useStake()
  const updateAmount = useCallback((value: string | number) => {
    const amount = value.toString()
    setAmount(amount)
    setEstimatedReward(estimateReward(amount))
    allowance(ETHDEV_V2_ADDRESS).then(x => {
      const req = x ? x.isLessThan(value) : true
      setRequireApproval(req)
      setCurrentStep(req ? 0 : 1)
    })
  }, [])
  const onClickMax = useCallback(() => balanceOf().then(x => updateAmount(toNaturalNumber(x ? x : 0).toString())), [
    updateAmount
  ])
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickApprove = async () => {
    await approve(ETHDEV_V2_ADDRESS, toAmountNumber(amount ? amount : 0))
    setRequireApproval(false)
    setRequireDeposit(true)
    setCurrentStep(1)
  }
  const onClickDeposit = async () => {
    await stake(toAmountNumber(amount ? amount : 0))
    setRequireDeposit(false)
    updateAmount(0)
  }

  return (
    <Form layout="vertical">
      <Item>
        <Gap>
          <label htmlFor="amount">Your amount</label>
          <LargeInput
            size="large"
            id="amount"
            suffix={
              <>
                <TokenSymbol>WETHDEV-V2</TokenSymbol>
                <Max onClick={onClickMax}></Max>
              </>
            }
            type="number"
            onChange={onChange}
            value={amount}
          ></LargeInput>
          <a
            href="https://app.uniswap.org/#/add/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26/ETH"
            target="_blank"
            rel="noreferrer"
          >
            Provide liquidity on Uniswap to get WETHDEV-V2 ↗
          </a>
        </Gap>
      </Item>
      <Item>
        <Gap>
          <label htmlFor="estimated">Your estimated reward</label>
          <LargeInput disabled size="large" id="estimated" type="number" value={estimatedReward}></LargeInput>
          <small>*Estimated rewards assume you have achieved the maximum reward multiplier.</small>
        </Gap>
      </Item>
      <Item>
        <Steps progressDot current={currentStep} direction="vertical">
          <Step
            title="Approve"
            description={
              <>
                <p>Please approve the token transfer to deposit WETHDEV-V2.</p>
                <Button disabled={!requireApproval} type="primary" size="large" onClick={onClickApprove}>
                  Approve
                </Button>
              </>
            }
          />
          <Step
            title="Deposit"
            description={
              <>
                <p>Deposit WETHDEV-V2.</p>
                <Button
                  disabled={requireApproval || !requireDeposit}
                  type="primary"
                  size="large"
                  onClick={onClickDeposit}
                >
                  Deposit
                </Button>
              </>
            }
          />
        </Steps>
      </Item>
    </Form>
  )
}

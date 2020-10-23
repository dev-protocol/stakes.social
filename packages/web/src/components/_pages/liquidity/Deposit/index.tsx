import { Button, Form, Steps } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { getUTC, toAmountNumber, toBigNumber, toEVMBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import { ETHDEV_V2_ADDRESS, GEYSER_ETHDEV_V2_ADDRESS } from '../../../../fixtures/_pages/liquidity/constants/address'
import {
  useAllTokensClaimed,
  useEstimateReward,
  useFinalUnlockSchedules,
  useStake,
  useTotalStaked,
  useTotalStakingShares,
  useUpdateAccounting,
  useIsAlreadyFinished
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { allowance, balanceOf } from '../../../../fixtures/_pages/liquidity/uniswap-pool/client'
import { useApprove } from '../../../../fixtures/_pages/liquidity/uniswap-pool/hooks'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

export const Deposit = () => {
  const { Item } = Form
  const { Step } = Steps
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const [estimatedReward, setEstimatedReward] = useState<number | string>(0)
  const [requireApproval, setRequireApproval] = useState(true)
  const [requireDeposit, setRequireDeposit] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [requireReEstimate, setRequireReEstimate] = useState(false)

  const { data: totalStakingShares } = useTotalStakingShares()
  const { data: totalStaked } = useTotalStaked()
  const { data: accounting } = useUpdateAccounting()
  const { data: finalUnlockSchedule } = useFinalUnlockSchedules()

  const { data: isAlreadyFinished } = useIsAlreadyFinished()
  const estimate = useEstimateReward()
  const { approve } = useApprove()
  const { stake } = useStake()
  const isFulfilled = useCallback(() => {
    return !totalStakingShares || !totalStaked || !accounting || !finalUnlockSchedule
      ? false
      : { totalStakingShares, totalStaked, accounting, finalUnlockSchedule }
  }, [totalStakingShares, totalStaked, accounting, finalUnlockSchedule])
  const updateEstimate = useCallback(
    (value?: string) => {
      const data = isFulfilled()
      if (data === false) {
        return setRequireReEstimate(true)
      } else {
        setRequireReEstimate(false)
      }
      const estimated = estimate({
        ...data,
        timestamp: getUTC(),
        amount: toAmountNumber(value ? value : 0)
      })
      setEstimatedReward(toNaturalNumber(estimated).dp(10).toFixed())
    },
    [estimate, isFulfilled]
  )
  const updateAmount = useCallback(
    (value: string | number) => {
      const bnValue = toBigNumber(value)
      setAmount(value.toString())
      updateEstimate(value.toString())
      allowance(GEYSER_ETHDEV_V2_ADDRESS).then(x => {
        const req = x ? x.lt(toEVMBigNumber(bnValue.toFixed())) : true
        setRequireApproval(req)
        setCurrentStep(req ? 0 : 1)
      })
    },
    [updateEstimate]
  )
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
  if (requireReEstimate) {
    updateEstimate(amount)
  }

  return (
    <Form layout="vertical">
      <Item>
        <Gap>
          <label htmlFor="amount">Your amount</label>
          <LargeInput
            disabled={isAlreadyFinished}
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
          <LargeInput disabled size="large" id="estimated" value={`${estimatedReward} / month`}></LargeInput>
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
                <Button
                  disabled={isAlreadyFinished || !requireApproval}
                  type="primary"
                  size="large"
                  onClick={onClickApprove}
                >
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
                  disabled={isAlreadyFinished || requireApproval || !requireDeposit}
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

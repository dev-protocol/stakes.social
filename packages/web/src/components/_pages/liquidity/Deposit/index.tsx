import { Button, Divider, Form, message, Steps } from 'antd'
import BigNumber from 'bignumber.js'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { getUTC, toAmountNumber, toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import styled from 'styled-components'
import { GEYSER_ETHDEV_V2_ADDRESS } from '../../../../fixtures/_pages/liquidity/constants/address'
import {
  useEstimateReward,
  useFinalUnlockSchedules,
  useStake,
  useTotalStaked,
  useTotalStakingShares,
  useUpdateAccounting,
  useIsAlreadyFinished,
  useMutateDepositDependence
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { allowance, balanceOf } from '../../../../fixtures/_pages/liquidity/uniswap-pool/client'
import { useApprove } from '../../../../fixtures/_pages/liquidity/uniswap-pool/hooks'
import { Countdown } from '../Countdown'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 2rem;
`

const LinkToUniswap = () => (
  <a
    href="https://app.uniswap.org/#/add/0x5caf454ba92e6f2c929df14667ee360ed9fd5b26/ETH"
    target="_blank"
    rel="noreferrer"
  >
    Provide liquidity on Uniswap to get ETHDEV-V2 ↗
  </a>
)

const ZERO = toBigNumber(0)

export const Deposit = () => {
  const { Item } = Form
  const { Step } = Steps
  const [amount, setAmount] = useState<undefined | BigNumber>(undefined)
  const [displayAmount, setDisplayAmount] = useState<undefined | string>(undefined)
  const [estimatedReward, setEstimatedReward] = useState<number | string>(0)
  const [requireApproval, setRequireApproval] = useState(true)
  const [requireDeposit, setRequireDeposit] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [requireReEstimate, setRequireReEstimate] = useState(false)
  const { purge } = useMutateDepositDependence()

  const { data: totalStakingShares } = useTotalStakingShares()
  const { data: totalStaked } = useTotalStaked()
  const { data: accounting } = useUpdateAccounting()
  const { data: finalUnlockSchedule } = useFinalUnlockSchedules()

  const [isAlreadyFinished] = useIsAlreadyFinished(useState<boolean>(false))
  const estimate = useEstimateReward()
  const { approve } = useApprove()
  const { stake } = useStake()
  const isFulfilled = useCallback(() => {
    return !totalStakingShares || !totalStaked || !accounting || !finalUnlockSchedule
      ? false
      : { totalStakingShares, totalStaked, accounting, finalUnlockSchedule }
  }, [totalStakingShares, totalStaked, accounting, finalUnlockSchedule])
  const updateEstimate = useCallback(
    (value?: BigNumber) => {
      const data = isFulfilled()
      if (data === false) {
        return setRequireReEstimate(true)
      } else {
        setRequireReEstimate(false)
      }
      const estimated = estimate({
        ...data,
        timestamp: getUTC(),
        amount: value ? value : toBigNumber(0)
      })
      setEstimatedReward(toNaturalNumber(estimated).dp(10).toFixed())
    },
    [estimate, isFulfilled]
  )
  const updateAmount = useCallback(
    (value: string) => {
      const bn = toAmountNumber(value)
      setAmount(bn)
      setDisplayAmount(value)
      updateEstimate(bn)
      allowance(GEYSER_ETHDEV_V2_ADDRESS).then(x => {
        const req = x ? x.isLessThanOrEqualTo(bn) : true
        setRequireApproval(req)
        setCurrentStep(req ? 0 : 1)
      })
    },
    [updateEstimate]
  )
  const onClickMax = useCallback(
    () =>
      balanceOf().then(x => {
        updateAmount(x ? toNaturalNumber(x).toFixed() : '0')
        if (x?.toNumber() === 0) {
          message.warn(
            <>
              <span>Your ETHDEV-V2 token is 0</span>
              <Divider type="vertical"></Divider>
              <LinkToUniswap />
            </>
          )
        }
      }),
    [updateAmount]
  )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickApprove = async () => {
    const res = await approve(GEYSER_ETHDEV_V2_ADDRESS, amount ? amount : ZERO)
    if (res === false) {
      return
    }
    setRequireApproval(false)
    setRequireDeposit(true)
    setCurrentStep(1)
  }
  const onClickDeposit = async () => {
    const res = await stake(amount ? amount : ZERO)
    if (res === false) {
      return
    }
    setRequireDeposit(false)
    updateAmount('0')
    purge()
  }
  if (requireReEstimate) {
    updateEstimate(amount)
  }

  return (
    <StyledForm layout="vertical">
      <Countdown endAtSec={finalUnlockSchedule ? Number(finalUnlockSchedule.endAtSec) : 0}></Countdown>
      <Item>
        <Gap>
          <label htmlFor="amount">Your amount</label>
          <LargeInput
            disabled={isAlreadyFinished}
            size="large"
            id="amount"
            suffix={
              <>
                <TokenSymbol>ETHDEV-V2</TokenSymbol>
                <Max onClick={onClickMax}></Max>
              </>
            }
            type="number"
            onChange={onChange}
            value={displayAmount}
          ></LargeInput>
          <LinkToUniswap />
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
                <p>Please approve the token transfer to deposit ETHDEV-V2.</p>
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
                <p>Deposit ETHDEV-V2.</p>
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
    </StyledForm>
  )
}

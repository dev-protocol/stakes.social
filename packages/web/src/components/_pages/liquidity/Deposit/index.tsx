import { Button, Divider, Form, message, Steps } from 'antd'
import BigNumber from 'bignumber.js'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { getUTC, toAmountNumber, toBigNumber, toNaturalNumber, whenDefined } from 'src/fixtures/utility'
import { useProvider } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
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
    href="https://app.uniswap.org/#/add/v2/0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26/ETH"
    target="_blank"
    rel="noreferrer"
  >
    Provide liquidity on Uniswap to get ETHDEV-V2 ↗
  </a>
)

const ZERO = toBigNumber(0)

export const Deposit = ({ geyserAddress }: { geyserAddress: string }) => {
  const messageKey = 'liquidityDeposit'
  const { Item } = Form
  const { Step } = Steps
  const { web3 } = useProvider()
  const [amount, setAmount] = useState<undefined | BigNumber>(undefined)
  const [displayAmount, setDisplayAmount] = useState<undefined | string>(undefined)
  const [estimatedReward, setEstimatedReward] = useState<number | string>(0)
  const [requireApproval, setRequireApproval] = useState(true)
  const [requireDeposit, setRequireDeposit] = useState(true)
  const [currentStep, setCurrentStep] = useState(0)
  const [requireReEstimate, setRequireReEstimate] = useState(false)
  const { purge } = useMutateDepositDependence(geyserAddress)

  const { data: totalStakingShares } = useTotalStakingShares(geyserAddress)
  const { data: totalStaked } = useTotalStaked(geyserAddress)
  const { data: accounting } = useUpdateAccounting(geyserAddress)
  const { data: finalUnlockSchedule } = useFinalUnlockSchedules(geyserAddress)

  const [isAlreadyFinished] = useIsAlreadyFinished(useState<boolean>(false), geyserAddress)
  const estimate = useEstimateReward()
  const { approve, isLoading: isApproving } = useApprove()
  const { stake, isLoading: isStaking } = useStake(geyserAddress)
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
      whenDefined(web3, x =>
        allowance(x, geyserAddress).then(x => {
          const req = x ? x.isLessThanOrEqualTo(bn) : true
          setRequireApproval(req)
          setCurrentStep(req ? 0 : 1)
        })
      )
    },
    [updateEstimate, web3, geyserAddress]
  )
  const onClickMax = useCallback(
    () =>
      whenDefined(web3, x =>
        balanceOf(x).then(x => {
          updateAmount(x ? toNaturalNumber(x).toFixed() : '0')
          if (x?.toNumber() === 0) {
            message.warn({
              content: (
                <>
                  <span>Your ETHDEV-V2 token is 0</span>
                  <Divider type="vertical"></Divider>
                  <LinkToUniswap />
                </>
              ),
              key: messageKey
            })
          }
        })
      ) || message.warn({ content: 'Please sign in', key: messageKey }),
    [updateAmount, web3]
  )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickApprove = async () => {
    if (!web3) {
      message.warn({ content: 'Please sign in', key: messageKey })
      return
    }
    const res = await approve(geyserAddress, amount ? amount : ZERO)
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
  if (requireReEstimate && web3) {
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
                  loading={isApproving}
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
                  loading={isStaking}
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

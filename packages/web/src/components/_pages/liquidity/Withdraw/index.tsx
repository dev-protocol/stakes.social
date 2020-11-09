import { Button, Form, Statistic } from 'antd'
import BigNumber from 'bignumber.js'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toAmountNumber, toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import styled from 'styled-components'
import {
  useRewardMultiplier,
  useTotalStakedFor,
  useUnstake,
  useUnstakeQuery
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

const CenterdItem = styled(Form.Item)`
  text-align: center;
`

const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 2rem;
`

export const Withdraw = () => {
  const { Item } = Form
  const [amount, setAmount] = useState<undefined | BigNumber>(undefined)
  const [displayAmount, setDisplayAmount] = useState<undefined | string>(undefined)
  const [rewardClaimed, setRewardClaimed] = useState('0')
  const { unstake } = useUnstake()
  const { unstakeQuery } = useUnstakeQuery()
  const { data: rewardMultiplier, max } = useRewardMultiplier()
  const { data: totalStakedFor } = useTotalStakedFor()
  const updateAmount = useCallback(
    (value: string | number) => {
      const amountE18 = toAmountNumber(value)
      setAmount(amountE18)
      setDisplayAmount(String(value))
      const queryAmount = totalStakedFor
        ? totalStakedFor.isGreaterThanOrEqualTo(amountE18) && amountE18.isGreaterThan(0)
          ? amountE18
          : 0
        : 0
      if (queryAmount !== 0) {
        unstakeQuery(queryAmount).then(x => {
          if (x) {
            console.log(x.toFixed())
            setRewardClaimed(toNaturalNumber(x).toFixed())
          }
        })
      }
    },
    [unstakeQuery, totalStakedFor]
  )
  const onClickMax = useCallback(() => updateAmount(toNaturalNumber(totalStakedFor ? totalStakedFor : 0).toFixed()), [
    updateAmount,
    totalStakedFor
  ])
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickWithdraw = async () => {
    await unstake(amount ? amount : toBigNumber(0))
    updateAmount(0)
  }

  return (
    <StyledForm layout="vertical">
      <Statistic
        title="Your Reward Multiplier"
        value={rewardMultiplier ? rewardMultiplier : '(not staked)'}
        suffix={rewardMultiplier ? `X / ${max}X` : undefined}
        precision={1}
      ></Statistic>
      <Item>
        <Gap>
          <label htmlFor="amount">Your amount</label>
          <LargeInput
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
        </Gap>
      </Item>
      <Item>
        <Gap>
          <label htmlFor="estimated">Rewards claimed</label>
          <LargeInput disabled size="large" id="estimated" type="number" value={rewardClaimed}></LargeInput>
        </Gap>
      </Item>
      <CenterdItem>
        <Button type="primary" size="large" onClick={onClickWithdraw}>
          Withdraw
        </Button>
      </CenterdItem>
    </StyledForm>
  )
}

import { Button, Form, Statistic } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toAmountNumber, toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import styled from 'styled-components'
import { totalStakedFor, unstakeQuery } from '../../../../fixtures/_pages/liquidity/geyser/client'
import { useRewardMultiplier, useUnstake } from '../../../../fixtures/_pages/liquidity/geyser/hooks'
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
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const [rewardClaimed, setRewardClaimed] = useState('0')
  const { unstake } = useUnstake()
  const { data: rewardMultiplier, max } = useRewardMultiplier()
  const updateAmount = useCallback((value: string | number) => {
    const amount = toBigNumber(value).toFixed()
    setAmount(amount)
    unstakeQuery(toAmountNumber(amount || 0)).then(x => {
      setRewardClaimed(toNaturalNumber(x).toFixed())
    })
  }, [])
  const onClickMax = useCallback(() => totalStakedFor().then(x => updateAmount(toNaturalNumber(x ? x : 0).toFixed())), [
    updateAmount
  ])
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickWithdraw = async () => {
    await unstake(toAmountNumber(amount ? amount : 0))
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
            value={amount}
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

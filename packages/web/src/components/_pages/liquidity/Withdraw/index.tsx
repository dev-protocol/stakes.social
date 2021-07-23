import { Button, Form, Statistic } from 'antd'
import BigNumber from 'bignumber.js'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toAmountNumber, toBigNumber, toNaturalNumber, whenDefined } from 'src/fixtures/utility'
import { useProvider } from 'src/fixtures/wallet/hooks'
import styled from 'styled-components'
import { unstakeQuery } from '../../../../fixtures/_pages/liquidity/geyser/client'
import { useRewardMultiplier, useTotalStakedFor, useUnstake } from '../../../../fixtures/_pages/liquidity/geyser/hooks'
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

export const Withdraw = (geyserAddress: string) => {
  const { Item } = Form
  const [amount, setAmount] = useState<undefined | BigNumber>(undefined)
  const [displayAmount, setDisplayAmount] = useState<undefined | string>(undefined)
  const [rewardClaimed, setRewardClaimed] = useState('0')
  const { unstake } = useUnstake(geyserAddress)
  const { data: rewardMultiplier, max } = useRewardMultiplier(geyserAddress)
  const { data: totalStakedFor } = useTotalStakedFor(geyserAddress)
  const { web3 } = useProvider()
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
        whenDefined(web3, w =>
          unstakeQuery(w, queryAmount, geyserAddress).then(x => {
            if (x) {
              setRewardClaimed(toNaturalNumber(x).toFixed())
            }
          })
        )
      }
    },
    [totalStakedFor, web3, geyserAddress]
  )
  const onClickMax = useCallback(
    () => updateAmount(toNaturalNumber(totalStakedFor ? totalStakedFor : 0).toFixed()),
    [updateAmount, totalStakedFor]
  )
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

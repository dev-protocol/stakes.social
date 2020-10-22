import { Button, Form } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toAmountNumber, toNaturalNumber } from 'src/fixtures/utility'
import styled from 'styled-components'
import { totalStakedFor, unstakeQuery } from '../../fixtures/geyser/client'
import { useUnstake } from '../../fixtures/geyser/hooks'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

const CenterdItem = styled(Form.Item)`
  text-align: center;
`

export const Withdraw = () => {
  const { Item } = Form
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const [rewardClaimed, setRewardClaimed] = useState(0)
  const unstake = useUnstake()
  const updateAmount = useCallback((value: string | number) => {
    const amount = value.toString()
    setAmount(amount)
    unstakeQuery(amount).then(x => setRewardClaimed(toNaturalNumber(x).toNumber()))
  }, [])
  const onClickMax = useCallback(
    () => totalStakedFor().then(x => updateAmount(toNaturalNumber(x ? x : 0).toString())),
    [updateAmount]
  )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    updateAmount(value)
  }
  const onClickWithdraw = async () => {
    await unstake(toAmountNumber(amount ? amount : 0))
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
    </Form>
  )
}

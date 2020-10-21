import { Form } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toNaturalNumber } from 'src/fixtures/utility'
import { estimateReward } from '../../fixtures/geyser/client'
import { balanceOf } from '../../fixtures/uniswap-pool/client'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'
import { TokenSymbol } from '../TokenSymbol'

export const Deposit = () => {
  const { Item } = Form
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const [estimatedReward, setEstimatedReward] = useState(0)
  const onClickMax = useCallback(async () => setAmount(await balanceOf().then(x => toNaturalNumber(x).toString())), [])
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target)
    const { value } = event.target
    setAmount(value)
    setEstimatedReward(estimateReward(value))
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
    </Form>
  )
}

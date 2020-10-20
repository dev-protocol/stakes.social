import { Form } from 'antd'
import React, { ChangeEvent, useCallback } from 'react'
import { useState } from 'react'
import { toNaturalNumber } from 'src/fixtures/utility'
import { balanceOf } from '../../fixtures/uniswap-pool/client'
import { Gap } from '../Gap'
import { LargeInput } from '../LargeInput'
import { Max } from '../Max'

export const Deposit = () => {
  const { Item } = Form
  const [amount, setAmount] = useState<undefined | string>(undefined)
  const onClickMax = useCallback(async () => setAmount(await balanceOf().then(x => toNaturalNumber(x).toString())), [])
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target)
    const { value } = event.target
    setAmount(value)
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
                <span>WETHDEV-V2</span>
                <Max onClick={onClickMax}></Max>
              </>
            }
            type="number"
            onChange={onChange}
            value={amount}
          ></LargeInput>
        </Gap>
      </Item>
    </Form>
  )
}

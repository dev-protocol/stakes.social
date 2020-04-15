import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button } from 'antd'

interface Props {
  label: 'Staking' | 'Holder'
  amount: BigNumber
  lastUpdate: string
  onSubmitWithdraw: () => void
}

export const WithdrawCard = ({ amount, label, onSubmitWithdraw, lastUpdate }: Props) => {
  return (
    <Card
      title={`Withdraw ${label} Reward`}
      extra={
        <>
          <p>Last Update: ${lastUpdate}</p>
          <a href="#" target="_blank" rel="noreferrer noopener">
            Mining now
          </a>
        </>
      }
    >
      <p>{amount.dp(1).toNumber()} DEV</p>
      <Button onClick={onSubmitWithdraw}>Withdraw</Button>
    </Card>
  )
}

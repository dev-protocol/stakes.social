import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space } from 'antd'

interface Props {
  label: 'Staking' | 'Holder'
  amount?: BigNumber
  lastUpdate?: number
  onSubmitWithdraw: () => void
}

export const WithdrawCard = ({ amount, label, onSubmitWithdraw, lastUpdate }: Props) => {
  return (
    <Card style={{ maxWidth: 961 }}>
      <Space direction="horizontal" size={200}>
        <Space direction="vertical" size={32}>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: '#000' }}>Withdraw {label} Reward</div>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {amount && amount.dp(1).toNumber()} DEV
          </div>
        </Space>
        <Space direction="vertical" size={32}>
          {lastUpdate && <p>Last Update: {lastUpdate}</p>}
          <a href="#" target="_blank" rel="noreferrer noopener">
            Mining now
          </a>
          <Button onClick={onSubmitWithdraw}>Withdraw</Button>
        </Space>
      </Space>
    </Card>
  )
}

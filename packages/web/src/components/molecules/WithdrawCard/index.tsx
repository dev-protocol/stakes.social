import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space, Row, Col } from 'antd'

interface Props {
  label: 'Staking' | 'Holder'
  amount?: BigNumber
  lastUpdate?: number
  onSubmitWithdraw: () => void
}

export const WithdrawCard = ({ amount, label, onSubmitWithdraw, lastUpdate }: Props) => {
  return (
    <Card>
      <Row>
        <Col span={12}>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: '#000', padding: '0 0 32px 0' }}>
            Withdraw {label} Reward
          </div>
        </Col>
        <Col span={12}>
          {lastUpdate && (
            <Space
              direction="horizontal"
              size={31}
              style={{ verticalAlign: 'middle', fontSize: '18px', lineHeight: '24px', padding: '0 0 32px 0' }}
            >
              <div style={{ color: '#000' }}>Last Update: {lastUpdate}</div>
              <a href="#" target="_blank" rel="noreferrer noopener" style={{ textDecoration: 'underline' }}>
                Mining now
              </a>
            </Space>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {amount ? amount.dp(1).toNumber() : 0} DEV
          </div>
        </Col>
        <Col span={12}>
          <Button type="primary" size="large" onClick={onSubmitWithdraw}>
            Withdraw
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

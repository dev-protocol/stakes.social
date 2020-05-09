import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space, Row, Col } from 'antd'

interface Props {
  label: 'Staking' | 'Holder'
  amount?: BigNumber
  lastUpdate?: number
  onSubmitWithdraw: () => void
  onClickMining: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
}

export const WithdrawCard = ({ amount, label, onSubmitWithdraw, lastUpdate, onClickMining }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px">
          <div style={{ fontSize: '24px', lineHeight: '32px', color: '#000', padding: '16px 0' }}>
            Withdraw {label} Reward
          </div>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: 'rgba(0, 0, 0, 0.85)' }}>
            {amount ? amount.dp(1).toNumber() : 0} DEV
          </div>
        </Col>
        <Col flex="1 1 252px">
          <Space
            direction="vertical"
            size={31}
            style={{ verticalAlign: 'middle', fontSize: '18px', lineHeight: '24px', padding: '16px 0' }}
          >
            <div>
              <div style={{ color: '#000' }}>
                Last Update: {lastUpdate || ''}
                <a
                  href="#"
                  target="_blank"
                  style={{ textDecoration: 'underline', margin: '0 0 0 32px' }}
                  onClick={onClickMining}
                >
                  Mining now
                </a>
              </div>
            </div>
            <Button type="primary" size="large" onClick={onSubmitWithdraw}>
              Withdraw
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space, Row, Col, Popconfirm } from 'antd'

interface Props {
  label: 'Staking' | 'Holder'
  amount?: BigNumber
  lastUpdate?: number
  onSubmitWithdraw: () => void
  onClickMining: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
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
                <span style={{ marginRight: '1rem' }}>Last Update: {lastUpdate || ''}</span>
                {/* TODO: Refactoring */}
                {lastUpdate ? (
                  <Popconfirm
                    title={
                      <small style={{ maxWidth: 240, display: 'inline-block' }}>
                        You can mine when Ethereum reaches{' '}
                        <a href="//etherscan.io/blocks" target="_blank" rel="noreferrer">
                          {new BigNumber(lastUpdate).plus(13292).toString()} blocks
                        </a>
                        . Otherwise, mining does not increase rewards. Did you check the block?
                      </small>
                    }
                    onConfirm={onClickMining}
                    okText="Yes"
                    cancelText="No"
                  >
                    <a href="#">Mining</a>
                  </Popconfirm>
                ) : (
                  <a href="#" target="_blank" onClick={onClickMining}>
                    Mining now
                  </a>
                )}
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

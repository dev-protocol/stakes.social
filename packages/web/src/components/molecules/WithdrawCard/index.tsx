import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space, Row, Col, Popconfirm } from 'antd'
import styled from 'styled-components'

interface Props {
  label: 'Staker' | 'Owner'
  amount?: BigNumber
  lastUpdate?: number
  onSubmitWithdraw: () => void
  onClickMining: (e?: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

const Heading = styled.span`
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.4rem;
  }
`
const Statistic = styled.div`
  font-size: 1.4rem;
  color: black;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`
const Descrition = styled.span`
  font-size: 1rem;
  margin-right: 1rem;
`

export const WithdrawCard = ({ amount, label, onSubmitWithdraw, lastUpdate, onClickMining }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px">
          <Heading>{label} Reward</Heading>
          <Statistic>{amount ? amount.dp(1).toNumber() : 0} DEV</Statistic>
        </Col>
        <Col flex="1 1 252px">
          <Space direction="vertical" size="small">
            <div>
              <div style={{ color: '#000' }}>
                <Descrition>Last Update: {lastUpdate || ''}</Descrition>
                {/* TODO: Refactoring */}
                {lastUpdate ? (
                  <Popconfirm
                    title={
                      <small style={{ maxWidth: 240, display: 'inline-block' }}>
                        You can mine when Ethereum reaches{' '}
                        <a href="//etherscan.io/blocks" target="_blank" rel="noreferrer">
                          {new BigNumber(lastUpdate).plus(13293).toString()} blocks
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

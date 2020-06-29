import React from 'react'
import BigNumber from 'bignumber.js'
import { Card, Button, Space, Row, Col } from 'antd'
import styled from 'styled-components'

interface Props {
  label: 'Staking' | 'Holder'
  amount?: BigNumber
  onSubmitWithdraw: () => void
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

export const WithdrawCard = ({ amount, label, onSubmitWithdraw }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px">
          <Heading>Withdraw {label} Reward</Heading>
          <Statistic>{amount ? amount.dp(5).toNumber() : 0} DEV</Statistic>
        </Col>
        <Col flex="1 1 252px">
          <Space direction="vertical" size="small">
            <Button type="primary" size="large" onClick={onSubmitWithdraw}>
              Withdraw
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

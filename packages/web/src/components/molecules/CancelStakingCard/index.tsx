import React from 'react'
import { Card, Button, Row, Col, Space } from 'antd'
import styled from 'styled-components'

interface Props {
  onClickCancel: () => void
  onClickWithdraw: () => void
  disabledWithdraw?: boolean
}

const Heading = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const CancelStakingCard = ({ onClickCancel, onClickWithdraw, disabledWithdraw }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px" style={{ display: 'flex', alignItems: 'center' }}>
          <Heading>Cancel Staking</Heading>
        </Col>
        <Col flex="1 1 252px">
          <Space size="middle">
            <Button type="primary" size="large" onClick={onClickCancel} disabled={!disabledWithdraw}>
              Cancel
            </Button>
            <Button type="primary" size="large" onClick={onClickWithdraw} disabled={disabledWithdraw}>
              Withdraw
            </Button>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

import React from 'react'
import { Card, Button, Row, Col, Space, Spin } from 'antd'
import { LoadingOutlined, CheckCircleTwoTone } from '@ant-design/icons'
import styled from 'styled-components'

interface Props {
  onClickCancel: () => void
  onClickWithdraw: () => void
  remainBlocks: number
  isCompleted: boolean
}

const Heading = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const spinner = <LoadingOutlined style={{ fontSize: 18 }} spin />

export const CancelStakingCard = ({ onClickCancel, onClickWithdraw, remainBlocks, isCompleted }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px" style={{ display: 'flex', alignItems: 'center' }}>
          <Heading>Cancel Staking</Heading>
        </Col>
        <Col flex="1 1 252px">
          <Space size="middle">
            <Button type="primary" size="large" onClick={onClickCancel} disabled={isCompleted}>
              Cancel
            </Button>
            <Button type="primary" size="large" onClick={onClickWithdraw} disabled={!isCompleted}>
              Withdraw
            </Button>
            <div>
              {remainBlocks > 0 && !isCompleted && (
                <>
                  <Spin indicator={spinner} style={{ marginRight: '8px' }} />
                  {remainBlocks} block(s) left
                </>
              )}
              {isCompleted && (
                <>
                  <CheckCircleTwoTone
                    twoToneColor="#52c41a"
                    style={{
                      fontSize: 18,
                      marginRight: '8px'
                    }}
                  />
                  You can withdraw
                </>
              )}
            </div>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

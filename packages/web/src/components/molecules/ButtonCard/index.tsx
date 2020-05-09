import React from 'react'
import { Card, Button, Row, Col } from 'antd'

interface Props {
  label: string
  buttonLabel: string
  onClick: () => void
}

export const ButtonCard = ({ label, onClick, buttonLabel }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px" style={{ display: 'flex', alignItems: 'center', padding: '16px 0' }}>
          <div style={{ fontSize: '24px', lineHeight: '32px', color: '#000' }}>{label}</div>
        </Col>
        <Col flex="1 1 252px" style={{ padding: '16px 0' }}>
          <Button type="primary" size="large" onClick={onClick}>
            {buttonLabel}
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

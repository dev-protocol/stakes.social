import * as React from 'react'
import { Row, Col } from 'antd'

interface Props {
  propertyAddress: string
  percentage: number
}

export const Member = ({ propertyAddress, percentage }: Props) => (
  <div style={{ maxWidth: '961px' }}>
    <Row>
      <Col span={16}>
        <div style={{ fontSize: '24px', lineHeight: '32px' }}>{propertyAddress}</div>
      </Col>
      <Col span={8}>
        <div style={{ fontSize: '24px', lineHeight: '32px' }}>{percentage}%</div>
      </Col>
    </Row>
  </div>
)

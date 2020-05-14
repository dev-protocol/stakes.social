import React from 'react'
import { Row, Col } from 'antd'
import { TextCard } from 'src/components/molecules/TextCard'

interface Props {
  propertyAddress: string
}

export const MarketOverview = () => {
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          <TextCard title="npm" />
        </Col>
      </Row>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          <TextCard title="GitHub" />
        </Col>
      </Row>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          <TextCard title="xxx" />
        </Col>
      </Row>
    </div>
  )
}

import React from 'react'
import { Row, Col } from 'antd'
import { TextCard } from 'src/components/molecules/TextCard'
import { useGetMarketFactoryCreateQuery } from '@dev/graphql'
export const MarketOverview = () => {
  const { data } = useGetMarketFactoryCreateQuery()
  console.log(data?.market_factory_create[0]?.market)
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

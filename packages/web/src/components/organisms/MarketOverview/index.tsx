import React from 'react'
import { Row, Col } from 'antd'
import Link from 'next/link'
import { useGetMarketFactoryCreateQuery } from '@dev/graphql'
import { useGetMarketInformation } from 'src/fixtures/github/hooks'

const Text: React.FC = ({ children }) => (
  <div
    style={{
      fontSize: '18px',
      lineHeight: '24px',
      color: 'rgba(0, 0, 0, 0.85)'
    }}
  >
    {children}
  </div>
)

const Contents = ({ marketAddress }: { marketAddress: string }) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <div>
      <Link href={'/auth/[market]'} as={`/auth/${marketAddress}`}>
        <h2
          style={{
            fontSize: '36px',
            lineHeight: '48px',
            color: '#2F80ED'
          }}
        >
          {data.name}
        </h2>
      </Link>
      <Text>{data.description}</Text>
      <Text>Authentication: {data.asset?.authentication}</Text>
      <Text>Calculation: {data.asset?.calculation}</Text>
    </div>
  ) : (
    <></>
  )
}

export const MarketOverview = () => {
  const { data } = useGetMarketFactoryCreateQuery()
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          {data?.market_factory_create[0]?.market && (
            <Contents marketAddress={data?.market_factory_create[0]?.market} />
          )}
        </Col>
      </Row>
    </div>
  )
}

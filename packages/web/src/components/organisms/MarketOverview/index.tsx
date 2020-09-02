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

const Contents = ({
  marketAddress,
  propertyAddress,
  routePrefix
}: {
  marketAddress: string
  propertyAddress?: string
  routePrefix: string
}) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <div>
      <Link
        href={propertyAddress ? `${routePrefix}/[property]/[market]` : `${routePrefix}/[market]`}
        as={propertyAddress ? `${routePrefix}/${propertyAddress}/${marketAddress}` : `${routePrefix}/${marketAddress}`}
      >
        <h2
          style={{
            fontSize: '36px',
            lineHeight: '48px',
            color: '#2F80ED',
            cursor: 'pointer'
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

export const MarketOverview = ({ propertyAddress, routePrefix }: { propertyAddress?: string; routePrefix: string }) => {
  const { data } = useGetMarketFactoryCreateQuery()
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          {data?.market_factory_create[0]?.market && (
            <Contents
              propertyAddress={propertyAddress}
              marketAddress={data?.market_factory_create[0]?.market}
              routePrefix={routePrefix}
            />
          )}
        </Col>
      </Row>
    </div>
  )
}

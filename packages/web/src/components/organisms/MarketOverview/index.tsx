import React from 'react'
import { Row, Col } from 'antd'
import Link from 'next/link'
import { useGetMarketFactoryCreateQuery } from '@dev/graphql'
import { useGetMarketInformation, MarketInformation } from 'src/fixtures/github/hooks'

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

const Descriptions = ({ data }: { data: MarketInformation }) => (
  <>
    <Text>{data.description}</Text>
    <Text>Authentication: {data.asset?.authentication}</Text>
  </>
)
const ContentsForAuthPage = ({ marketAddress }: { marketAddress: string }) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <div>
      <Link href={'/auth/[market]'} as={`/auth/${marketAddress}`}>
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
      <Descriptions data={data}></Descriptions>
    </div>
  ) : (
    <></>
  )
}
const ContentsForAssociatePage = ({
  marketAddress,
  propertyAddress
}: {
  marketAddress: string
  propertyAddress: string
}) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <div>
      <Link href={'/auth/associate/[property]/[market]'} as={`/auth/associate/${propertyAddress}/${marketAddress}`}>
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
      <Descriptions data={data}></Descriptions>
    </div>
  ) : (
    <></>
  )
}

export const MarketOverview = ({
  associate = false,
  propertyAddress
}: {
  associate?: boolean
  propertyAddress?: string
}) => {
  const { data } = useGetMarketFactoryCreateQuery()
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          {data?.market_factory_create[0]?.market &&
            (associate && propertyAddress ? (
              <ContentsForAssociatePage
                propertyAddress={propertyAddress}
                marketAddress={data?.market_factory_create[0]?.market}
              />
            ) : (
              <ContentsForAuthPage marketAddress={data?.market_factory_create[0]?.market} />
            ))}
        </Col>
      </Row>
    </div>
  )
}

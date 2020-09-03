import React from 'react'
import { Row, Col, List } from 'antd'
import Link from 'next/link'
import { useGetMarketInformation, useGetMarkets } from 'src/fixtures/github/hooks'
import styled from 'styled-components'

const A = styled.a`
  color: #2f80ed;
`
const ContentsForAuthPage = ({ marketAddress }: { marketAddress: string }) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <List.Item>
      <List.Item.Meta
        title={
          <Link href={'/auth/[market]'} as={`/auth/${marketAddress}`} passHref>
            <A>{data.name}</A>
          </Link>
        }
        description={data.description}
      ></List.Item.Meta>
    </List.Item>
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
    <List.Item>
      <List.Item.Meta
        title={
          <Link
            href={'/auth/associate/[property]/[market]'}
            as={`/auth/associate/${propertyAddress}/${marketAddress}`}
            passHref
          >
            <A>{data.name}</A>
          </Link>
        }
        description={data.description}
      ></List.Item.Meta>
    </List.Item>
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
  const { data } = useGetMarkets()
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <Row style={{ margin: '82px 0px' }}>
        <Col span={24}>
          {data ? (
            associate && propertyAddress ? (
              <List
                bordered
                dataSource={data}
                renderItem={item => <ContentsForAssociatePage marketAddress={item} propertyAddress={propertyAddress} />}
              ></List>
            ) : (
              <List bordered dataSource={data} renderItem={item => <ContentsForAuthPage marketAddress={item} />}></List>
            )
          ) : (
            ''
          )}
        </Col>
      </Row>
    </div>
  )
}

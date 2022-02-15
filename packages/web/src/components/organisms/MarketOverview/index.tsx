import React from 'react'
import { Row, Col, List } from 'antd'
import { useGetMarketInformation, useGetMarkets } from 'src/fixtures/github/hooks'
import styled from 'styled-components'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'

const A = styled.a`
  color: #2f80ed;
`

const MarketsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 5em;
`

const MarketEntryContainer = styled.div<{ isNotActive?: Boolean }>`
  display: grid;
  grid-template-columns: 100px auto;
  column-gap: 10px;
  margin-bottom: 20px;
  opacity: ${props => (props?.isNotActive ? '0.4' : '1')};
  cursor: ${props => (!props?.isNotActive ? 'pointer' : 'auto')};

  @media (max-width: 768px) {
    padding-left: 5px;
    padding-right: 10px;
  }
`

const MarketEntryInfo = styled.div<{ bgColor?: string }>`
  display: flex;
  flex-direction: column;
  color: white;
  background: ${props => props.bgColor || 'black'};
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
`

const MarketTypeHeader = styled.div`
  font-size: 1.2em;
  margin-left: 110px;
  font-weight: bolder;
  margin-bottom: 10px;
`

const MarketSection = styled.div`
  margin-bottom: 2em;
`

export const MarketsOverview = () => {
  return (
    <MarketsContainer>
      <MarketSection>
        <MarketTypeHeader>Get started</MarketTypeHeader>
        <LinkWithNetwork href={'/invite/github'} as={`/invite/github`} passHref>
          <MarketEntryContainer>
            <img
              src="https://res.cloudinary.com/haas-storage/image/upload/v1600172007/25231_hng64u.png"
              width="100"
              height="auto"
            />
            <MarketEntryInfo>
              <div style={{ padding: '1em' }}>
                <h3 style={{ color: 'white', fontWeight: 'bolder' }}>GitHub</h3>
                <span>Authenticate and tokenize your GitHub OSS project.</span>
              </div>
            </MarketEntryInfo>
          </MarketEntryContainer>
        </LinkWithNetwork>
      </MarketSection>
      <MarketSection>
        <MarketTypeHeader>Coming soon</MarketTypeHeader>
        <MarketEntryContainer isNotActive>
          <img
            src="https://res.cloudinary.com/haas-storage/image/upload/v1604315606/npm_icon_146141_w61uhw.png"
            width="100"
            height="auto"
          />
          <MarketEntryInfo bgColor="#c42424">
            <div style={{ padding: '1em' }}>
              <h3 style={{ color: 'white', fontWeight: 'bolder' }}>NPM</h3>
              <span>Authenticate and tokenize your NPM OSS project.</span>
            </div>
          </MarketEntryInfo>
        </MarketEntryContainer>
      </MarketSection>
    </MarketsContainer>
  )
}

const ContentsForAuthPage = ({ marketAddress }: { marketAddress: string }) => {
  const { data } = useGetMarketInformation(marketAddress)
  return data ? (
    <List.Item>
      <List.Item.Meta
        title={
          <a target="_blank" href="https://niwa.xyz" rel="noreferrer">
            <A>{data.name}</A>
          </a>
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
          <LinkWithNetwork
            href={'/create/associate/[property]/[market]'}
            as={`/create/associate/${propertyAddress}/${marketAddress}`}
            passHref
          >
            <A>{data.name}</A>
          </LinkWithNetwork>
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

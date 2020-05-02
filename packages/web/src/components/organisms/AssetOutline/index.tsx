import React, { useMemo } from 'react'
import { List, Row, Col } from 'antd'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useAssetStrength } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const ResponsivePropertyFrame = styled.div`
  padding: 0 28px;
  min-height: 270px;
  @media (max-width: 768px) {
    padding: 0 18px;
  }
`

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <Row align="middle" gutter={48}>
    <Col span={12}>
      <CircleGraph size={224} percentage={assetStrength} />
    </Col>
    <Col span={12}>
      <div>
        <span style={{ fontSize: '36px', lineHeight: '48px', color: '#000' }}>{Math.round(assetStrength * 100)}%</span>
        <span> of total market</span>
      </div>
    </Col>
  </Row>
)

const AssetStrength = ({ metrics, market }: { metrics: string; market: string }) => {
  const { assetStrength: maybeAssetStrength } = useAssetStrength(metrics, market)
  const assetStrength = useMemo(() => maybeAssetStrength || 0, [maybeAssetStrength])
  return <AssetStrengthBase assetStrength={assetStrength} />
}

const AssetStrengthWithoutData = () => {
  return <AssetStrengthBase assetStrength={0} />
}

export const AssetOutline = ({ propertyAddress }: Props) => {
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includedAssetList = useMemo(() => data?.property_authentication.map(e => e.authentication_id), [data])
  const metrics = useMemo(() => data?.property_authentication[0].metrics, [data])
  const market = useMemo(() => data?.property_authentication[0].market, [data])

  return (
    <div>
      <Row>
        <Col flex="1 1 268px">
          <ResponsivePropertyFrame>
            <p style={{ fontSize: '18px', lineHeight: '24px', color: '#000' }}>Included Assets</p>
            <List
              bordered
              dataSource={includedAssetList}
              renderItem={item => (
                <List.Item style={{ fontSize: '24px', lineHeight: '32px', color: '#000' }}>
                  <span style={{ overflow: 'auto' }}>{item}</span>
                </List.Item>
              )}
              style={{ maxHeight: '224px' }}
            />
          </ResponsivePropertyFrame>
        </Col>
        <Col flex="0 1 500px">
          <ResponsivePropertyFrame>
            <p style={{ fontSize: '18px', lineHeight: '24px', color: '#000' }}>Assets Strength</p>
            {metrics && market ? <AssetStrength metrics={metrics} market={market} /> : <AssetStrengthWithoutData />}
          </ResponsivePropertyFrame>
        </Col>
      </Row>
    </div>
  )
}

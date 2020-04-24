import React, { useMemo } from 'react'
import { List, Space, Row, Col } from 'antd'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useAssetStrength } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <Space direction="horizontal" size={40}>
    <CircleGraph size={224} percentage={assetStrength} />
    <div>
      <span style={{ fontSize: '36px', lineHeight: '48px', color: '#000' }}>{Math.round(assetStrength * 100)}%</span>
      <span> of total market</span>
    </div>
  </Space>
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
      <Row gutter={112}>
        <Col span={10}>
          <div style={{ minHeight: '270px' }}>
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
          </div>
        </Col>
        <Col span={14}>
          <div>
            <p style={{ fontSize: '18px', lineHeight: '24px', color: '#000', padding: '0 36px' }}>Assets Strength</p>

            {metrics && market ? <AssetStrength metrics={metrics} market={market} /> : <AssetStrengthWithoutData />}
          </div>
        </Col>
      </Row>
    </div>
  )
}

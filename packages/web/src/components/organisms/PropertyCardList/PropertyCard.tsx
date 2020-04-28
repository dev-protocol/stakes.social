import React, { useMemo } from 'react'
import Link from 'next/link'
import { Row, Col, Statistic } from 'antd'
import { useGetTotalRewardsAmount, useAssetStrength } from 'src/fixtures/dev-kit/hooks'
import { truncate } from 'src/fixtures/utility/string'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useAverageInterestRate } from 'src/fixtures/utility/gql-hooks-wrapper'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const ResponsiveRow = styled(Row)`
  @media (max-width: 768px) {
    margin-top: 1em;
  }
`

const ResponsiveCol = styled(Col)`
  @media (max-width: 768px) {
    width: 100%;
  }
`

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <div>
    <span style={{ position: 'absolute' }}>{Math.floor(assetStrength * 100)}% of markets</span>
    <CircleGraph size={81} percentage={assetStrength} />
  </div>
)

const AssetStrength = ({ metrics, market }: { metrics: string; market: string }) => {
  const { assetStrength: maybeAssetStrength } = useAssetStrength(metrics, market)
  const assetStrength = useMemo(() => maybeAssetStrength || 0, [maybeAssetStrength])
  return <AssetStrengthBase assetStrength={assetStrength} />
}

const AssetStrengthWithoutData = () => {
  return <AssetStrengthBase assetStrength={0} />
}

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )
  const metrics = useMemo(() => data?.property_authentication[0]?.metrics, [data])
  const market = useMemo(() => data?.property_authentication[0]?.market, [data])
  const averageInterestRate = useAverageInterestRate(metrics ? metrics : '')

  return (
    <div style={{ border: 'solid 1px #f0f0f0', padding: '1.2em', cursor: 'pointer' }}>
      <Row>
        <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
          <Col sm={24} md={10}>
            <Statistic title={propertyAddress} value={includeAssets} />
          </Col>
        </Link>
        <ResponsiveCol sm={24} md={14}>
          <ResponsiveRow>
            <Col span={10}>
              <Statistic
                title="Total Rewards"
                value={totalRewardsAmount && totalRewardsAmount.dp(1).toNumber()}
                suffix="DEV"
              />
            </Col>
            <Col span={8}>
              <Statistic title="Avg. Interest" value={averageInterestRate.dp(2).toNumber()} suffix="%" />
            </Col>
            <Col span={6}>
              {metrics && market ? <AssetStrength metrics={metrics} market={market} /> : <AssetStrengthWithoutData />}
            </Col>
          </ResponsiveRow>
        </ResponsiveCol>
      </Row>
    </div>
  )
}

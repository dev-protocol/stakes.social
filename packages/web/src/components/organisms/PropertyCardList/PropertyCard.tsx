import React, { useMemo } from 'react'
import Link from 'next/link'
import { Row, Col, Statistic } from 'antd'
import { useGetTotalRewardsAmount, useStakingShare, useGetMyStakingAmount } from 'src/fixtures/dev-kit/hooks'
import { truncate } from 'src/fixtures/utility/string'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
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

const StatisticTitle = styled.span`
  color: rgba(0, 0, 0, 0.45);
  font-size: 14px;
`

const AssetStrengthBase = ({ assetStrength }: { assetStrength: number }) => (
  <div>
    <StatisticTitle style={{ position: 'absolute' }}>
      {Math.floor(assetStrength * 100)}% of the total stakes
    </StatisticTitle>
    <CircleGraph percentage={assetStrength} />
  </div>
)

const AssetStrength = ({ property }: { property: string }) => {
  const { stakingShare: maybeAssetStrength } = useStakingShare(property)
  const assetStrength = useMemo(() => maybeAssetStrength || 0, [maybeAssetStrength])
  return <AssetStrengthBase assetStrength={assetStrength} />
}

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 24),
    [data]
  )
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <div style={{ border: 'solid 1px #f0f0f0', padding: '1.2em', cursor: 'pointer' }}>
        <Row>
          <Col sm={24} md={10}>
            <Statistic title={propertyAddress} value={includeAssets} />
          </Col>
          <ResponsiveCol sm={24} md={14}>
            <ResponsiveRow>
              <Col span={12}>
                <Statistic
                  title="Total Rewards"
                  value={totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()}
                  suffix="DEV"
                />
              </Col>
              <Col span={9}>
                <Statistic
                  title="Your Staking Amount"
                  value={myStakingAmount && myStakingAmount.dp(5).toNumber()}
                  suffix="DEV"
                />
              </Col>
              <Col span={3}>
                <AssetStrength property={propertyAddress} />
              </Col>
            </ResponsiveRow>
          </ResponsiveCol>
        </Row>
      </div>
    </Link>
  )
}

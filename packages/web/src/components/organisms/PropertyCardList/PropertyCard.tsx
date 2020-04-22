import React, { useMemo } from 'react'
import Link from 'next/link'
import { Card, Row, Col, Statistic } from 'antd'
import { useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import { truncate } from 'src/fixtures/utility/string'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import { CircleGraph } from 'src/components/atoms/CircleGraph'

interface Props {
  propertyAddress: string
}

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includeAssets = useMemo(
    () => data && truncate(data.property_authentication.map(e => e.authentication_id).join(', '), 17),
    [data]
  )
  const averageInterestRate = 0.15
  const percentage = 0.55

  return (
    <Link href={'/[propertyAddress]'} as={`/${propertyAddress}`}>
      <Card style={{ margin: '0 0 54px 0', maxWidth: '1048px', maxHeight: '174px' }}>
        <Row>
          <Col span={12}>
            <div>{propertyAddress}</div>
            <div style={{ fontSize: '36px', lineHeight: '48px', margin: '36px 0 48px 0' }}>{includeAssets}</div>
          </Col>
          <Col span={4}>
            <Statistic
              title="Total Rewards"
              value={totalRewardsAmount && totalRewardsAmount.dp(1).toNumber()}
              valueStyle={{ fontSize: '36px', lineHeight: '48px', margin: '36px 0 0 0' }}
              suffix="DEV"
            />
          </Col>
          <Col span={4}>
            <Statistic
              title="Ararage Interest Rate"
              value={averageInterestRate * 100}
              valueStyle={{ fontSize: '36px', lineHeight: '48px', margin: '36px 0 48px 0' }}
              suffix="%"
            />
          </Col>
          <Col span={4}>
            <div>
              <span>{Math.floor(percentage * 100)}% of total market</span>
              <div style={{ padding: '14px 0 14px 32px' }}>
                <CircleGraph size={81} percentage={percentage} />
              </div>
            </div>
          </Col>
        </Row>
      </Card>
    </Link>
  )
}

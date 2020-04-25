import React, { useMemo } from 'react'
import { Card, Statistic, Row, Col } from 'antd'
import { useGetTotalStakingAmount, useGetMyStakingAmount } from 'src/fixtures/dev-kit/hooks'
import { useAverageInterestRate } from 'src/fixtures/utility/gql-hooks-wrapper'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const PossessionOutline = ({ propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const metrics = useMemo(() => data?.property_authentication[0]?.metrics, [data])
  const averageInterestRate = useAverageInterestRate(metrics!)

  return (
    <Card>
      <Row>
        <Col span={6}>
          <Statistic
            title="Total Staking Amount"
            value={totalStakingAmount && totalStakingAmount.dp(1).toNumber()}
            suffix="DEV"
          />
        </Col>
        <Col span={6}>
          <Statistic
            title="Your Staking Amount"
            value={myStakingAmount && myStakingAmount.dp(1).toNumber()}
            suffix="DEV"
          />
        </Col>
        <Col span={6}>
          <Statistic title="Average Interest Rate" value={averageInterestRate} suffix="%" />
        </Col>
        <Col span={6}>
          <Statistic title="Total Rewards" value={myStakingAmount && myStakingAmount.dp(1).toNumber()} suffix="DEV" />
        </Col>
      </Row>
    </Card>
  )
}

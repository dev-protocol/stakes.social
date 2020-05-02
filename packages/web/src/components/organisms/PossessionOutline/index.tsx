import React, { useMemo } from 'react'
import { Card, Statistic, Row, Col } from 'antd'
import { useGetTotalStakingAmount, useGetMyStakingAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import { useAverageInterestRate } from 'src/fixtures/utility/gql-hooks-wrapper'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const PossessionOutline = ({ propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { data } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const metrics = useMemo(() => data?.property_authentication[0]?.metrics, [data])
  const averageInterestRate = useAverageInterestRate(metrics!)

  return (
    <Card>
      <Row>
        <Col flex="1 1 148px">
          <Statistic
            title="Total Staking Amount"
            value={totalStakingAmount && totalStakingAmount.dp(1).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title="Your Staking Amount"
            value={myStakingAmount && myStakingAmount.dp(1).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title="Average Interest Rate"
            value={averageInterestRate.dp(2).toNumber()}
            suffix="%"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title="Total Rewards"
            value={totalRewardsAmount && totalRewardsAmount.dp(1).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
      </Row>
    </Card>
  )
}

import React from 'react'
import { Card, Statistic, Row, Col } from 'antd'
import { useGetTotalStakingAmount, useGetMyStakingAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import { useTranslation, POSSESSION_OUTLINE_NAMESPACE, possessionOutlineTranslationKeys } from '@dev/i18n'

interface Props {
  propertyAddress: string
}

export const PossessionOutline = ({ propertyAddress }: Props) => {
  const { t } = useTranslation(POSSESSION_OUTLINE_NAMESPACE)
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Card>
      <Row>
        <Col flex="1 1 148px">
          <Statistic
            title="Total Staking Amount"
            value={totalStakingAmount && totalStakingAmount.dp(5).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title="Your Staking Amount"
            value={myStakingAmount && myStakingAmount.dp(5).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title="Your Staking Share"
            value={
              myStakingAmount &&
              totalStakingAmount &&
              (myStakingAmount.dp(5).toNumber() / totalStakingAmount.dp(5).toNumber()) * 100
            }
            suffix="%"
            style={{ margin: '12px 0' }}
          />
        </Col>
        <Col flex="1 1 148px">
          <Statistic
            title={t(possessionOutlineTranslationKeys.totalRewards)}
            value={totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()}
            suffix="DEV"
            style={{ margin: '12px 0' }}
          />
        </Col>
      </Row>
    </Card>
  )
}

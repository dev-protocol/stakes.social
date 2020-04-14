import React from 'react'
import { Card } from 'antd'
import { useGetTotalStakingAmount } from 'src/fixtures/dev-kit/hooks'

interface Props {
  propertyAddress: string
}

export const PossessionOutline = ({ propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)

  return <Card>{totalStakingAmount && <div>total staking amount: {totalStakingAmount.dp(1).toNumber()}</div>}</Card>
}

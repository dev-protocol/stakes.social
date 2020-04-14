import React from 'react'
import { Card } from 'antd'
import { useGetTotalStakingAmount, useGetMyStakingAmount } from 'src/fixtures/dev-kit/hooks'

interface Props {
  propertyAddress: string
}

export const PossessionOutline = ({ propertyAddress }: Props) => {
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Card>
      {totalStakingAmount && <div>total staking amount: {totalStakingAmount.dp(1).toNumber()} DEV</div>}
      {myStakingAmount && <div>Your staking amount: {myStakingAmount.dp(1).toNumber()} DEV</div>}
    </Card>
  )
}

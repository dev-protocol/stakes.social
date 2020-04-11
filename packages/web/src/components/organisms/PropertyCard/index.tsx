import React from 'react'
import { Card } from 'antd'
import { useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'

interface Props {
  propertyAddress: string
}

export const PropertyCard = ({ propertyAddress }: Props) => {
  const { totalRewardsAmount, error } = useGetTotalRewardsAmount(propertyAddress)

  console.error(error)

  return (
    <Card>
      <p>property address: {propertyAddress}</p>
      {totalRewardsAmount && <p>{totalRewardsAmount}</p>}
    </Card>
  )
}

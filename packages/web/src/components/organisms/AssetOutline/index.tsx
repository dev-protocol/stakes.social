import React from 'react'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useAssetStrength } from 'src/fixtures/dev-kit/hooks'

interface Props {
  metricsAddress: string
  marketAddress: string
}

export const AssetOutline = ({ metricsAddress, marketAddress }: Props) => {
  const { assetStrength } = useAssetStrength(metricsAddress, marketAddress)
  return (
    <div>
      <CircleGraph size={224} percentage={assetStrength ? assetStrength : 0} />
    </div>
  )
}

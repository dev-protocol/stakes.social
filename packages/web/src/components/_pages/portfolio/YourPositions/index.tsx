import React from 'react'
import { AssetList } from 'src/components/molecules/AssetList'
import { usePositionsOfOwner } from 'src/fixtures/dev-kit/hooks'

interface Props {
  accountAddress?: string
}

export const YourPositions = ({ accountAddress }: Props) => {
  const { positions } = usePositionsOfOwner(accountAddress)

  return (
    <AssetList
      isPool={false}
      total={positions?.length || 0}
      loading={!positions}
      positions={positions ? [...positions] : positions}
      enableWithdrawStakersReward={true}
    ></AssetList>
  )
}

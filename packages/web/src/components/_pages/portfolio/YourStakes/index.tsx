// @L2 optimized: The parent component will not use this component on L2
import React from 'react'
import { useListOwnedLockup } from 'src/fixtures/graph'
import { AssetList } from 'src/components/molecules/AssetList'

interface Props {
  accountAddress?: string
}

export const YourStakes = ({ accountAddress }: Props) => {
  const { data } = useListOwnedLockup(accountAddress)
  const properties = data?.map(x => x.property_address)

  return (
    <AssetList
      isPool={false}
      total={data?.length || 0}
      loading={data === undefined}
      properties={properties}
      enableStake={true}
      enableWithdrawStakersReward={true}
    ></AssetList>
  )
}

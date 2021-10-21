// @L2 optimized: The parent component will not use this component on L2
import React, { useState } from 'react'
import { useListAccountLockupQuery } from '@dev/graphql'
import { AssetList } from 'src/components/molecules/AssetList'
import { useCallback } from 'react'

interface Props {
  accountAddress?: string
}

const perPage = 5

export const YourStakes = ({ accountAddress }: Props) => {
  const [page, setPage] = useState(1)
  const { data, loading } = useListAccountLockupQuery({
    variables: {
      account_address: accountAddress || '',
      limit: perPage,
      offset: (page - 1) * perPage
    }
  })
  const onPagination = useCallback(
    (page: number) => {
      setPage(page)
    },
    [setPage]
  )
  const properties = data?.account_lockup.map(x => x.property_address)

  return (
    <AssetList
      isPool={false}
      total={data?.account_lockup_aggregate?.aggregate?.count || 0}
      onPagination={onPagination}
      loading={loading}
      properties={properties}
      enableStake={true}
      enableWithdrawStakersReward={true}
    ></AssetList>
  )
}

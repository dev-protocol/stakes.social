import React, { useState } from 'react'
import { useListOwnedPropertyMetaQuery, useListOwnedPropertyTokensQuery } from '@dev/graphql'
import { AssetList } from 'src/components/molecules/AssetList'
import { useCallback } from 'react'

interface Props {
  accountAddress?: string
}

const perPage = 5

export const YourPools = ({ accountAddress }: Props) => {
  const [page, setPage] = useState(1)
  const { data: totalProperties } = useListOwnedPropertyMetaQuery({
    variables: { account_address: accountAddress || '' }
  })
  const { data, loading } = useListOwnedPropertyTokensQuery({
    variables: {
      accountAddress: accountAddress || '',
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
  const properties = data?.property_balance.map(x => x.property_address)
  return (
    <AssetList
      isPool={true}
      total={totalProperties?.property_meta.length || 0}
      onPagination={onPagination}
      loading={loading}
      properties={properties}
      enableWithdrawHoldersReward={true}
    ></AssetList>
  )
}

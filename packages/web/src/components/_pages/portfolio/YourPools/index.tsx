import React, { useState } from 'react'
import { useListOwnedPropertyMetaQuery } from '@dev/graphql'
import { AssetList } from 'src/components/molecules/AssetList'
import { useCallback } from 'react'

interface Props {
  accountAddress?: string
}

const perPage = 5

export const YourPools = ({ accountAddress }: Props) => {
  const [page, setPage] = useState(0)
  const { data, loading } = useListOwnedPropertyMetaQuery({
    variables: {
      account_address: accountAddress || '',
      limit: perPage,
      offset: perPage * page
    }
  })
  const onPagination = useCallback(
    (page: number) => {
      setPage(page)
    },
    [setPage]
  )
  const properties = data?.property_meta.map(x => x.property)

  return (
    <AssetList
      onPagination={onPagination}
      loading={loading}
      properties={properties}
      enableWithdrawHoldersReward={true}
    ></AssetList>
  )
}

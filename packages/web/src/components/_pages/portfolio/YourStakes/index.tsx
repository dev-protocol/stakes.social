import React, { useState } from 'react'
import { useListAccountLockupQuery } from '@dev/graphql'
import { AssetList } from 'src/components/molecules/AssetList'
import { useCallback } from 'react'

interface Props {
  accountAddress?: string
}

const perPage = 5

export const YourStakes = ({ accountAddress }: Props) => {
  const [page, setPage] = useState(0)
  const { data, loading } = useListAccountLockupQuery({
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
  const properties = data?.account_lockup.map(x => x.property_address)

  return (
    <AssetList
      isPool={false}
      onPagination={onPagination}
      loading={loading}
      properties={properties}
      enableStake={true}
      enableWithdrawStakersReward={true}
    ></AssetList>
  )
}

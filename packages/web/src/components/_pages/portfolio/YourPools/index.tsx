// @L2 optimized
import React, { useState } from 'react'
import { useListOwnedPropertyMetaQuery } from '@dev/graphql'
import { AssetList } from 'src/components/molecules/AssetList'
import { useCallback } from 'react'
import { useIsL1 } from 'src/fixtures/wallet/hooks'
import Text from 'antd/lib/typography/Text'

interface Props {
  accountAddress?: string
}

const perPage = 5

export const YourPools = ({ accountAddress }: Props) => {
  const [page, setPage] = useState(1)
  const { isL1 } = useIsL1()
  const { data: totalProperties } = useListOwnedPropertyMetaQuery({
    variables: { account_address: isL1 ? accountAddress || '' : '' }
  })
  const { data, loading } = useListOwnedPropertyMetaQuery({
    variables: {
      account_address: isL1 ? accountAddress || '' : '',
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
  const properties = data?.property_meta.map(x => x.property)

  return isL1 ? (
    <AssetList
      isPool={true}
      total={totalProperties?.property_meta.length || 0}
      onPagination={onPagination}
      loading={loading}
      properties={properties}
      enableWithdrawHoldersReward={true}
    ></AssetList>
  ) : (
    <Text type="secondary">(Not provide this feature yet on L2)</Text>
  )
}

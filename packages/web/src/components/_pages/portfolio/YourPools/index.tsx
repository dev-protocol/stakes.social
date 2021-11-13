// @L2 optimized
import React, { useCallback, useState } from 'react'
import { reverse } from 'ramda'
import { useListOwnedPropertyMetaQuery } from '@dev/graphql'
import { Asset, AssetList } from 'src/components/molecules/AssetList'
import { useIsL1 } from 'src/fixtures/wallet/hooks'
import { useGetEnabledMarkets, useGetAuthenticatedProperties, usePropertyAuthor } from 'src/fixtures/dev-kit/hooks'

interface Props {
  accountAddress?: string
}

const perPage = 5

const AssetAsset4L2 = ({ propertyAddress, accountAddress }: { propertyAddress: string; accountAddress?: string }) => {
  const { author: authorAddress } = usePropertyAuthor(propertyAddress)
  const properties = [propertyAddress]
  return authorAddress === accountAddress ? (
    <Asset isPool={true} properties={properties} enableWithdrawHoldersReward={true}></Asset>
  ) : (
    <></>
  )
}

export const Asset4L2 = ({ market, accountAddress }: { market: string; accountAddress?: string }) => {
  const { data: authenticatedProperties } = useGetAuthenticatedProperties(market)
  const properties = authenticatedProperties ? reverse(authenticatedProperties) : undefined
  return properties?.length ? (
    <>
      {properties?.map((propertyAddress: string, idx: number) => (
        <AssetAsset4L2 key={idx} propertyAddress={propertyAddress} accountAddress={accountAddress} />
      ))}
    </>
  ) : (
    <></>
  )
}

export const YourPools4L2 = ({ accountAddress }: Props) => {
  const { data: enabledMarkets } = useGetEnabledMarkets()

  return enabledMarkets ? (
    <>
      {enabledMarkets.map((market: string, idx: number) => (
        <Asset4L2 key={idx} market={market} accountAddress={accountAddress} />
      ))}
    </>
  ) : (
    <></>
  )
}

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
    <YourPools4L2 accountAddress={accountAddress} />
  )
}

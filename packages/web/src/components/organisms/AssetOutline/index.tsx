import React, { useMemo } from 'react'
import { List, Space } from 'antd'
import { CircleGraph } from 'src/components/atoms/CircleGraph'
import { useAssetStrength } from 'src/fixtures/dev-kit/hooks'
import { truncate } from 'src/fixtures/utility/string'
import { useGetLastAllocatorAllocationResultQuery, useGetPropertyAuthenticationQuery } from '@dev/graphql'

interface Props {
  propertyAddress: string
}

export const AssetOutline = ({ propertyAddress }: Props) => {
  const { data } = useGetLastAllocatorAllocationResultQuery({ variables: { propertyAddress } })
  const { data: propertyAuthenticationData } = useGetPropertyAuthenticationQuery({ variables: { propertyAddress } })
  const includedAssetList = useMemo(
    () => propertyAuthenticationData?.property_authentication.map(e => e.authentication_id),
    [propertyAuthenticationData]
  )
  const { assetStrength } = useAssetStrength(
    data?.allocator_allocation_result[0].metrics,
    data?.allocator_allocation_result[0].market
  )

  return (
    <div>
      <Space direction="horizontal" size={112}>
        <div style={{ minHeight: '270px' }}>
          <p style={{ fontSize: '18px', lineHeight: '24px', color: '#000' }}>Included Assets</p>
          <List
            bordered
            dataSource={includedAssetList}
            renderItem={item => (
              <List.Item style={{ fontSize: '24px', lineHeight: '32px', color: '#000' }}>
                {truncate(item, 15)}
              </List.Item>
            )}
            style={{ maxWidth: '272px', maxHeight: '224px' }}
          />
        </div>
        <div>
          <p style={{ fontSize: '18px', lineHeight: '24px', color: '#000', padding: '0 36px' }}>Assets Strength</p>
          <Space direction="horizontal" size={40}>
            <CircleGraph size={224} percentage={assetStrength ? assetStrength : 0} />
            <div>
              <span style={{ fontSize: '36px', lineHeight: '48px', color: '#000' }}>
                {assetStrength ? assetStrength * 100 : 0}%
              </span>
              <span> of total market</span>
            </div>
          </Space>
        </div>
      </Space>
    </div>
  )
}

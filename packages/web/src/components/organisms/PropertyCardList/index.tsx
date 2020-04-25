import React from 'react'
import { Spin } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'

export const PropertyCardList = () => {
  const { data, loading } = useListPropertyQuery()

  return (
    <div>
      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {data &&
        data.property_factory_create.map(d => (
          <div key={d.event_id} style={{ margin: '54px 0' }}>
            <PropertyCard propertyAddress={d.property} />
          </div>
        ))}
    </div>
  )
}

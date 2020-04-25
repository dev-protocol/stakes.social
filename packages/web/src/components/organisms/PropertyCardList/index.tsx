import React from 'react'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'

export const PropertyCardList = () => {
  const { data, loading } = useListPropertyQuery()

  return (
    <div>
      {loading && <div>loading.......</div>}
      {data &&
        data.property_factory_create.map(d => (
          <div key={d.event_id} style={{ margin: '54px 0' }}>
            <PropertyCard propertyAddress={d.property} />
          </div>
        ))}
    </div>
  )
}

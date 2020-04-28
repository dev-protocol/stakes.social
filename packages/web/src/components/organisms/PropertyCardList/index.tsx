import React, { useCallback } from 'react'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { useRouter } from 'next/router'

interface Props {
  currentPage: number
}

const perPage = 10

export const PropertyCardList = ({ currentPage }: Props) => {
  const { data, loading } = useListPropertyQuery({ variables: { limit: perPage, offset: (currentPage - 1) * perPage } })
  const router = useRouter()
  const handlePagination = useCallback((page: number) => router.push({ pathname: '/', query: { page } }), [router])

  return (
    <div>
      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {data && (
        <>
          {data.property_factory_create.map(d => (
            <div key={d.event_id} style={{ margin: '54px 0' }}>
              <PropertyCard propertyAddress={d.property} />
            </div>
          ))}
          <Pagination
            current={currentPage}
            responsive={true}
            pageSize={perPage}
            onChange={handlePagination}
            total={data.property_factory_create_aggregate.aggregate?.count}
            style={{ margin: '0 0 20px 50%' }}
          />
        </>
      )}
    </div>
  )
}

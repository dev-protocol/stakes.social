import React, { useCallback, useState } from 'react'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { useRouter } from 'next/router'

interface Props {
  currentPage: number
}

const DEFAULT_PER_PAGE = 10

export const PropertyCardList = ({ currentPage }: Props) => {
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data, loading } = useListPropertyQuery({ variables: { limit: perPage, offset: (currentPage - 1) * perPage } })
  const router = useRouter()
  const handlePagination = useCallback((page: number) => router.push({ pathname: '/', query: { page } }), [router])
  const handleShowSizeChange = (_: number, pageSize: number) => setPerPage(pageSize)

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
            size="default"
            responsive={true}
            defaultPageSize={perPage}
            onChange={handlePagination}
            onShowSizeChange={handleShowSizeChange}
            total={data.property_factory_create_aggregate.aggregate?.count}
            style={{ margin: '0 0 20px 50%' }}
          />
        </>
      )}
    </div>
  )
}

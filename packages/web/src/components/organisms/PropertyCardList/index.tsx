import React, { useCallback, useState } from 'react'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { PropertySearchForm } from './PropertySearchForm'
import { useRouter } from 'next/router'
import styled from 'styled-components'

interface Props {
  currentPage: number
  searchWord: string
}

const Header = styled.h2`
  padding-top: 10px;
`

const PropertiesHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr 1fr;
`

const DEFAULT_PER_PAGE = 10

export const PropertyCardList = ({ currentPage, searchWord }: Props) => {
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data, loading } = useListPropertyQuery({
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ilike: searchWord !== '' ? `%${searchWord}%` : undefined
    }
  })
  const router = useRouter()
  const handlePagination = useCallback(
    (page: number) => {
      const query = searchWord !== '' ? { page, word: searchWord } : { page }
      router.push({ pathname: '/', query })
    },
    [router, searchWord]
  )
  const handleShowSizeChange = (_: number, pageSize: number) => setPerPage(pageSize)
  const handleSearch = useCallback((word: string) => router.push({ pathname: '/', query: { word } }), [router])

  return (
    <div>
      <PropertiesHeader>
        <Header>Asset Pools</Header>
      </PropertiesHeader>

      <div style={{ margin: '20px 0 0 0' }}>
        <PropertySearchForm onSubmitSearchProperty={handleSearch} />
      </div>
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

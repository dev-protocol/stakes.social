import React, { useCallback, useState } from 'react'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery, useListPropertyOrderByMostRecentQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { PropertySearchForm } from './PropertySearchForm'
import { CurrencySwitcher } from './CurrencySwitcher'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Select from 'react-select'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'

interface Props {
  currentPage: number
  searchWord: string
  sortBy: string
}

const Header = styled.h2`
  margin-bottom: 0;

  @media (min-width: 768px) {
    grid-column: 1;
  }
`

const PropertiesHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr;
  row-gap: 10px;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
  }
`

const PropertyOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
  }
`

const DEFAULT_PER_PAGE = 9

const FILTER_OPTIONS = [
  { label: 'Your properties', value: 'YOUR_PROPS' },
  { label: 'Most Staked', value: 'MOST_STAKED' },
  { label: 'Most recent', value: 'MOST_RECENT' }
]

const FilterOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 760px) {
    grid-row: 3;
  }
`

export const PropertyCardList = ({ currentPage, searchWord, sortBy }: Props) => {
  const { accountAddress } = useGetAccountAddress()
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data, loading } = useListPropertyQuery({
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ilike: searchWord !== '' ? `%${searchWord}%` : undefined,
      // NOTE: If accountAddress is undefined, all properties will be displayed,
      //       so if YOUR_PROPS is selected and accountAddress is not available,
      //       query with dummy values.
      from: sortBy === 'YOUR_PROPS' ? accountAddress || '0xdummy' : undefined
    }
  })
  const { data: mostRecentData } = useListPropertyOrderByMostRecentQuery({
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ilike: searchWord !== '' ? `%${searchWord}%` : undefined,
      from: sortBy === 'YOUR_PROPS' ? accountAddress || '0xdummy' : undefined
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
  const handleSearch = useCallback((word: string) => router.push({ pathname: '/', query: { word, sortby: sortBy } }), [
    router,
    sortBy
  ])
  const handleChangeSortBy = (e: any) => {
    router.push({ pathname: '/', query: { word: searchWord, sortby: e?.value || '' } })
  }

  return (
    <>
      <PropertiesHeader>
        <Header>Asset Pools</Header>
        <PropertySearchForm onSubmitSearchProperty={handleSearch} />
        <FilterOptionContainer>
          <div style={{ flexGrow: 1 }}>
            <Select placeholder="Sort" options={FILTER_OPTIONS} onChange={handleChangeSortBy} isClearable={true} />
          </div>

          <CurrencySwitcher />
        </FilterOptionContainer>
      </PropertiesHeader>

      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {data && mostRecentData && (
        <PropertyOverview>
          {sortBy !== 'MOST_RECENT' &&
            data.property_factory_create.map(d => (
              <div key={d.event_id} style={{ margin: '54px 0' }}>
                <PropertyCard propertyAddress={d.property} assets={d.authentication} />
              </div>
            ))}
          {sortBy === 'MOST_RECENT' &&
            mostRecentData.property_factory_create.map(d => (
              <div key={d.event_id} style={{ margin: '54px 0' }}>
                <PropertyCard propertyAddress={d.property} assets={d.authentication} />
              </div>
            ))}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gridColumn: '1/-1' }}>
            <Pagination
              current={currentPage}
              size="default"
              responsive={true}
              defaultPageSize={perPage}
              pageSizeOptions={['9', '12', '15', '18', '21']}
              onChange={handlePagination}
              onShowSizeChange={handleShowSizeChange}
              total={data.property_factory_create_aggregate.aggregate?.count}
              style={{ margin: '0 0 20px 50%' }}
            />
          </div>
        </PropertyOverview>
      )}
    </>
  )
}

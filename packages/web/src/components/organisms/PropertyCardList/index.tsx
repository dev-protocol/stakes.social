import React, { useCallback, useState } from 'react'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { PropertySearchForm } from './PropertySearchForm'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Select from 'react-select'

interface Props {
  currentPage: number
  searchWord: string
}

const Header = styled.h2`
  margin-bottom: 0;
`

const PropertiesHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1.5fr 2fr;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
`

const CurrencyContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const Button = styled.button<{ isActive?: boolean }>`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  background-color: ${props => (props.isActive ? 'black' : 'transparent')};
  width: 65px;
  span {
    color: ${props => (props.isActive ? 'white' : 'black')};
  }
`

const Circle = styled.div<{ isActive?: boolean }>`
  padding: 6px;
  border-radius: 45px;
  background-color: ${props => (props.isActive ? 'white' : 'black')};
`

const DEFAULT_PER_PAGE = 10

const FILTER_OPTIONS = [
  { label: 'Your properties', value: 'YOUR_PROPS' },
  { label: 'Most Staked', value: 'MOST_STAKED' },
  { label: 'Most recent', value: 'MOST_RECENT' }
]

export const PropertyCardList = ({ currentPage, searchWord }: Props) => {
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const [activeGridView] = useState(true)
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
        <PropertySearchForm onSubmitSearchProperty={handleSearch} />
        <Select options={FILTER_OPTIONS} />
        <CurrencyContainer>
          <Button isActive>
            <Circle isActive />
            <span>DEV</span>
          </Button>
          <Button>
            <Circle />
            <span>USD</span>
          </Button>
        </CurrencyContainer>
      </PropertiesHeader>

      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {data && !activeGridView && (
        <div>
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
        </div>
      )}
      {data && activeGridView && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', columnGap: '15px' }}>
          {data.property_factory_create.map(d => (
            <div key={d.event_id} style={{ margin: '54px 0' }}>
              <PropertyCard isGrid={activeGridView} propertyAddress={d.property} />
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
        </div>
      )}
    </div>
  )
}

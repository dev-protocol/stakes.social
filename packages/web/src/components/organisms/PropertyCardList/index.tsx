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

const PropertyOverview = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 0;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 15px;
  }
`

const DEFAULT_PER_PAGE = 10

const FILTER_OPTIONS = [
  { label: 'Your properties', value: 'YOUR_PROPS' },
  { label: 'Most Staked', value: 'MOST_STAKED' },
  { label: 'Most recent', value: 'MOST_RECENT' }
]

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
      {data && (
        <PropertyOverview>
          {data.property_factory_create.map(d => (
            <div key={d.event_id} style={{ margin: '54px 0' }}>
              <PropertyCard propertyAddress={d.property} />
            </div>
          ))}
          <div style={{ gridColumn: '1/-1' }}>
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
        </PropertyOverview>
      )}
    </div>
  )
}

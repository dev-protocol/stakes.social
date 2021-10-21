// @L2 optimized
import React, { useCallback, useState } from 'react'
import Link from 'next/link'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery, useListPropertyOrderByMostRecentQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { PropertySearchForm } from './PropertySearchForm'
import { CurrencySwitcher } from './CurrencySwitcher'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Select from 'react-select'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { Grid } from 'src/components/atoms/Grid'
import {
  useGetEnabledMarkets,
  useGetAssetsByProperties,
  useGetAuthenticatedProperties
} from 'src/fixtures/dev-kit/hooks'

export type FeatureTag = '' | 'GitHub' | 'npm' | 'Creators'
interface Props {
  currentPage: number
  searchWord: string
  sortBy: string
  featureTag: FeatureTag
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

  @media (min-width: 1200px) {
    grid-template-rows: none;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 60px;
  }
`

const PropertyOverview = styled(Grid)`
  grid-template-columns: repeat(auto-fit, minmax(345px, 1fr));
  grid-gap: 6rem 3rem;
  justify-content: space-between;
  margin: 3rem 0;
`

const DEFAULT_PER_PAGE = 9

// TODO: use valid market list via other data source
const markets = {
  GitHub: '0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318',
  npm: '0x88c7B1f41DdE50efFc25541a2E0769B887eB2ee7'
}

const Wrap = styled.div`
  display: flex;
  padding-top: 1rem;
  justify-content: space-between;
  a {
    margin-right: 20px;
  }

  a:last-child {
    margin-right: 0px;
  }

  @media (min-width: 768px) {
    justify-content: flex-start;

    a {
      margin-right: 40px;
    }
  }
`

const FILTER_OPTIONS = [
  { label: 'Your Properties', value: 'YOUR_PROPS' },
  { label: 'Most Staked', value: 'MOST_STAKED' },
  { label: 'Most Recent', value: 'MOST_RECENT' }
]

const FilterOptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 100vw;

  @media (max-width: 760px) {
    grid-row: 3;
  }
`

const PaginationContainer = styled.div`
  display: flex;
  grid-column: 1/-1;
  justify-content: flex-start;

  ul {
    margin-left: 0px;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    margin-left: 0;
  }
`

const FeatureTags = ({ tag }: { tag: FeatureTag }) => {
  const tags = ['GitHub', 'npm', 'Creators']

  return (
    <Wrap>
      <Link href="/">
        <a style={tag !== '' ? { color: '#c9c9c9' } : {}}>All Pools</a>
      </Link>
      {tags &&
        tags.map((d: string) => (
          <Link href={`/?tag=${d}`} key={d}>
            <a style={{ color: tag !== d ? '#c9c9c9' : '' }}>{d}</a>
          </Link>
        ))}
    </Wrap>
  )
}

export const PropertyCardList = ({ currentPage, searchWord, sortBy, featureTag }: Props) => {
  const { accountAddress } = useProvider()
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data, loading } = useListPropertyQuery({
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ilike: searchWord !== '' ? `%${searchWord}%` : undefined,
      market: featureTag === 'GitHub' || featureTag === 'npm' ? markets[featureTag] : undefined,
      marketOther: featureTag === 'Creators' ? Object.values(markets) : undefined,
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
      market: featureTag === 'GitHub' || featureTag === 'npm' ? markets[featureTag] : undefined,
      marketOther: featureTag === 'Creators' ? Object.values(markets) : undefined,
      from: sortBy === 'YOUR_PROPS' ? accountAddress || '0xdummy' : undefined
    }
  })

  const router = useRouter()
  const handlePagination = useCallback(
    (page: number) => {
      const query = { page, word: searchWord, sortby: sortBy, tag: featureTag }
      router.push({ pathname: '/', query })
    },
    [router, searchWord, sortBy, featureTag]
  )
  const handleShowSizeChange = (_: number, pageSize: number) => setPerPage(pageSize)
  const handleSearch = useCallback(
    (word: string) => router.push({ pathname: '/', query: { word, sortby: sortBy, tag: featureTag } }),
    [router, sortBy, featureTag]
  )
  const handleChangeSortBy = useCallback(
    (e: any) => {
      router.push({
        pathname: '/',
        query: { word: searchWord, sortby: e?.value || '', tag: featureTag }
      })
    },
    [router, searchWord, featureTag]
  )

  return (
    <div style={{ flexGrow: 1, maxWidth: '100vw' }}>
      <PropertiesHeader>
        <Header>Asset Pools</Header>
        <PropertySearchForm onSubmitSearchProperty={handleSearch} />
        <FilterOptionContainer>
          <div style={{ flexGrow: 1 }}>
            <Select
              placeholder="Sort"
              defaultValue={{ label: 'Most Recent', value: 'MOST_RECENT' }}
              options={FILTER_OPTIONS}
              onChange={handleChangeSortBy}
              isClearable={true}
            />
          </div>

          <CurrencySwitcher />
        </FilterOptionContainer>
      </PropertiesHeader>
      <FeatureTags tag={featureTag} />

      {loading && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {data && mostRecentData && (
        <>
          <PropertyOverview>
            {sortBy !== 'MOST_RECENT' &&
              data.property_factory_create.map(d => (
                <PropertyCard
                  key={d.event_id}
                  propertyAddress={d.property}
                  assets={d.authentication.map(x => x.authentication_id)}
                />
              ))}
            {sortBy === 'MOST_RECENT' &&
              mostRecentData.property_factory_create.map(d => (
                <PropertyCard
                  key={d.event_id}
                  propertyAddress={d.property}
                  assets={d.authentication.map(x => x.authentication_id)}
                />
              ))}
          </PropertyOverview>
          <PaginationContainer>
            <Pagination
              current={currentPage}
              size="default"
              responsive={true}
              defaultPageSize={perPage}
              pageSizeOptions={['9', '12', '15', '18', '21']}
              onChange={handlePagination}
              onShowSizeChange={handleShowSizeChange}
              total={data.property_factory_create_aggregate.aggregate?.count || 0}
            />
          </PaginationContainer>
        </>
      )}
    </div>
  )
}

export const PropertyByMarketWithAssetsL2 = ({ propertyAddress }: { propertyAddress: string }) => {
  const { data } = useGetAssetsByProperties(propertyAddress)

  return <>{data ? <PropertyCard propertyAddress={propertyAddress} assets={data.map(d => d.id)} /> : ''}</>
}

export const PropertyByMarketL2 = ({ market }: { market: string }) => {
  const { data } = useGetAuthenticatedProperties(market)

  return (
    <>{data ? data.map((property, i) => <PropertyByMarketWithAssetsL2 key={i} propertyAddress={property} />) : ''}</>
  )
}

export const PropertyCardListL2 = () => {
  const { data: enabledMarkets } = useGetEnabledMarkets()

  return (
    <div style={{ flexGrow: 1, maxWidth: '100vw' }}>
      <PropertiesHeader>
        <Header>Asset Pools</Header>
      </PropertiesHeader>

      {enabledMarkets && (
        <PropertyOverview>
          {enabledMarkets.map((market, i) => (
            <PropertyByMarketL2 key={i} market={market} />
          ))}
        </PropertyOverview>
      )}
    </div>
  )
}

import React, { useCallback, useContext, useState } from 'react'
import Link from 'next/link'
import { Spin, Pagination } from 'antd'
import { useListPropertyQuery, useListPropertyOrderByMostRecentQuery } from '@dev/graphql'
import { PropertyCard } from './PropertyCard'
import { PropertySearchForm } from './PropertySearchForm'
import { CurrencySwitcher } from './CurrencySwitcher'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Select from 'react-select'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'
import WalletContext from 'src/context/walletContext'

export type FeatureTag = '' | 'GitHub' | 'Npmjs' | 'Creators'
interface Props {
  currentPage: number
  searchWord: string
  sortBy: string
  featureTag: FeatureTag
}

// TODO: use valid market list via other data source
const markets = {
  GitHub: '0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318',
  Npmjs: '0x88c7B1f41DdE50efFc25541a2E0769B887eB2ee7'
}

const Header = styled.h2`
  margin-bottom: 0;

  @media (min-width: 768px) {
    grid-column: 1;
  }
`

const PropertiesHeader = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 3fr 4fr;
  justify-content: center;
  align-items: center;
  padding-top: 10px;

  @media (min-width: 768px) {
    grid-template-rows: none;
    grid-template-columns: 2fr 2fr 1fr 1fr;
    column-gap: 48px;
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

const Wrap = styled.div`
  display: grid;
  column-gap: 2em;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  padding-top: 1rem;
`

const DEFAULT_PER_PAGE = 10

const FILTER_OPTIONS = [
  { label: 'Your properties', value: 'YOUR_PROPS' },
  { label: 'Most Staked', value: 'MOST_STAKED' },
  { label: 'Most recent', value: 'MOST_RECENT' }
]

const FeatureTags = ({ tag }: { tag: FeatureTag }) => {
  const tags = ['GitHub', 'Npmjs', 'Creators']

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
  const { web3 } = useContext(WalletContext)
  const { accountAddress } = useGetAccountAddress(web3)
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data, loading } = useListPropertyQuery({
    variables: {
      limit: perPage,
      offset: (currentPage - 1) * perPage,
      ilike: searchWord !== '' ? `%${searchWord}%` : undefined,
      market: featureTag === 'GitHub' || featureTag === 'Npmjs' ? markets[featureTag] : undefined,
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
      market: featureTag === 'GitHub' || featureTag === 'Npmjs' ? markets[featureTag] : undefined,
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
    <>
      <PropertiesHeader>
        <Header>Asset Pools</Header>
        <PropertySearchForm onSubmitSearchProperty={handleSearch} />
        <Select options={FILTER_OPTIONS} onChange={handleChangeSortBy} isClearable={true} />
        <CurrencySwitcher />
      </PropertiesHeader>

      <FeatureTags tag={featureTag} />

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
    </>
  )
}

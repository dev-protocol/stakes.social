// @L2 optimized
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Spin, Pagination } from 'antd'
import { useListProperty } from 'src/fixtures/graph'
import { PropertyCard } from './PropertyCard'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useProvider, useDetectChain } from 'src/fixtures/wallet/hooks'
import { Grid } from 'src/components/atoms/Grid'
import {
  useGetEnabledMarkets,
  useGetAssetsByProperties,
  useGetAuthenticatedProperties
} from 'src/fixtures/dev-kit/hooks'
import { reverse } from 'ramda'
import { getDenyList } from 'src/config/utils'

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

export const PropertyCardList = ({ currentPage, searchWord, sortBy, featureTag }: Props) => {
  const [perPage, setPerPage] = useState(DEFAULT_PER_PAGE)
  const { data } = useListProperty()
  const [pagenatedData, setPagenatedData] = useState<typeof data>()
  const start = (currentPage - 1) * perPage
  const end = currentPage * perPage
  console.log({ currentPage, start, end })

  useEffect(() => {
    setPagenatedData(data?.slice(start, end))
  }, [start, end, data])

  const router = useRouter()
  const handlePagination = useCallback(
    (page: number) => {
      const query = { page, word: searchWord, sortby: sortBy, tag: featureTag }
      router.push({ pathname: '/', query })
    },
    [router, searchWord, sortBy, featureTag]
  )
  const handleShowSizeChange = (_: number, pageSize: number) => setPerPage(pageSize)

  return (
    <div style={{ flexGrow: 1, maxWidth: '100vw' }}>
      {data === undefined && <Spin size="large" style={{ display: 'block', width: 'auto', padding: '100px' }} />}
      {pagenatedData && (
        <>
          <PropertyOverview>
            {pagenatedData.map(d => (
              <PropertyCard
                key={d.block_number}
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
              total={data?.length || 0}
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
  const { nonConnectedEthersProvider } = useProvider()
  const { name: network } = useDetectChain(nonConnectedEthersProvider)
  const denyList = useMemo(() => getDenyList(network), [network])
  const { data } = useGetAuthenticatedProperties(market)
  const list = data ? reverse(data) : undefined

  return (
    <>
      {list
        ? list
            .filter((property: string) => !denyList?.includes(property))
            .map((property, i) => <PropertyByMarketWithAssetsL2 key={i} propertyAddress={property as string} />)
        : ''}
    </>
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
          {enabledMarkets.map((market: string, i: number) => (
            <PropertyByMarketL2 key={i} market={market} />
          ))}
        </PropertyOverview>
      )}
    </div>
  )
}

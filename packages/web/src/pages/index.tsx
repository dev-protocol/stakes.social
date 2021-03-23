import React, { useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { Banner } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { useRouter } from 'next/router'

import { toNaturalNumber } from 'src/fixtures/utility'
import { useAPY, useAnnualSupplyGrowthRatio } from 'src/fixtures/dev-kit/hooks'
import { useGetPropertyBalanceQuery } from '@dev/graphql'
import { SupplySummary } from 'src/components/molecules/SupplySummaly'
import { Header } from 'src/components/organisms/Header'
import { FeatureTag } from 'src/components/organisms/PropertyCardList'
import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

type InitialProps = {}
type Props = {} & InitialProps

const StyledSupplySummary = styled(SupplySummary)`
  margin-top: 1rem;
`

const Index = (_: Props) => {
  const router = useRouter()
  const { apy, creators } = useAPY()
  const { annualSupplyGrowthRatio } = useAnnualSupplyGrowthRatio()
  const page = useMemo(() => {
    const { page: pageStr } = router.query
    if (typeof pageStr === 'string') {
      return parseInt(pageStr)
    }
    return 1
  }, [router])
  const word = useMemo(() => {
    const { word: wordStr } = router.query
    if (typeof wordStr === 'string') {
      return wordStr
    }
    return ''
  }, [router])
  const sortBy = useMemo(() => {
    const { sortby: sortByStr } = router.query
    if (typeof sortByStr === 'string') {
      return sortByStr
    }
    return 'MOST_RECENT'
  }, [router])
  const featureTag = useMemo(() => {
    const { tag: wordStr } = router.query
    if (typeof wordStr === 'string') {
      return wordStr as FeatureTag
    }
    return '' as FeatureTag
  }, [router])

  const { data } = useGetPropertyBalanceQuery({
    variables: {
      account_address: '0x8F9dc5C9CE6834D8C9897Faf5d44Ac36CA073595'
    }
  })
  if (data) {
    data.property_balance.forEach(d => {
      const b = new BigNumber(d.balance)
      console.log(d.property_address, toNaturalNumber(b).toFixed())
    })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Container>
        <StyledSupplySummary apy={apy} creators={creators} annualSupplyGrowthRatio={annualSupplyGrowthRatio} />
        <PropertyCardList currentPage={page} searchWord={word} sortBy={sortBy} featureTag={featureTag} />
      </Container>
      <Footer />
    </div>
  )
}

export default Index

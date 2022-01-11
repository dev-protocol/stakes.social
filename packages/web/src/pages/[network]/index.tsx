import React, { useMemo } from 'react'
import { PropertyCardList, PropertyCardListL2 } from 'src/components/organisms/PropertyCardList'
import { Footer } from 'src/components/organisms/Footer'
import { useRouter } from 'next/router'
import { ControlChain } from 'src/components/organisms/ControlChain'
import { useAPY, useAnnualSupplyGrowthRatio } from 'src/fixtures/dev-kit/hooks'
import { SupplySummary } from 'src/components/molecules/SupplySummaly'
import { Header } from 'src/components/organisms/Header'
import { FeatureTag } from 'src/components/organisms/PropertyCardList'
import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'
import { useDetectChain, useProvider } from 'src/fixtures/wallet/hooks'

type InitialProps = {}
type Props = {} & InitialProps

const StyledSupplySummary = styled(SupplySummary)`
  margin-top: 1rem;
`

const Index = (_: Props) => {
  const router = useRouter()
  const { ethersProvider, nonConnectedEthersProvider } = useProvider()
  const { name } = useDetectChain(ethersProvider || nonConnectedEthersProvider)
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
  const isL2 = useMemo(() => {
    return name === undefined
      ? undefined
      : name === 'arbitrum-one' || name === 'arbitrum-rinkeby' || name === 'polygon' || name === 'polygon-mumbai'
  }, [name])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Container>
        <StyledSupplySummary apy={apy} creators={creators} annualSupplyGrowthRatio={annualSupplyGrowthRatio} />
        {isL2 === undefined ? (
          <></>
        ) : isL2 ? (
          <PropertyCardListL2 />
        ) : (
          <PropertyCardList currentPage={page} searchWord={word} sortBy={sortBy} featureTag={featureTag} />
        )}
      </Container>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default Index

import React, { useMemo } from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { Banner } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { useRouter } from 'next/router'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { useAPY, useAnnualSupplyGrowthRatio } from 'src/fixtures/dev-kit/hooks'
import { SupplySummary } from 'src/components/molecules/SupplySummaly'
import { Header } from 'src/components/organisms/Header'

type InitialProps = {}
type Props = {} & InitialProps

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

  return (
    <div style={{ background: 'white' }}>
      <Header />
      <EarlyAccess />
      <Banner />
      <div style={{ padding: '1rem', maxWidth: '1200px', marginRight: 'auto', marginLeft: 'auto' }}>
        <SupplySummary apy={apy} creators={creators} annualSupplyGrowthRatio={annualSupplyGrowthRatio} />
        <PropertyCardList currentPage={page} searchWord={word} />
      </div>
      <Footer />
    </div>
  )
}

export default Index

import React, { useMemo } from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { useRouter } from 'next/router'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { useAPY, useAnnualSupplyGrowthRatio } from 'src/fixtures/dev-kit/hooks'
import { SupplySummaly } from 'src/components/molecules/SupplySummaly'

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

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <MainHeader />
      <div style={{ padding: '1rem', maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <SupplySummaly apy={apy} creators={creators} annualSupplyGrowthRatio={annualSupplyGrowthRatio}></SupplySummaly>
        <PropertyCardList currentPage={page} />
      </div>
      <Footer />
    </>
  )
}

export default Index

import React, { useMemo } from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { Button } from 'antd'
import { useRouter } from 'next/router'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const router = useRouter()
  const page = useMemo(() => {
    const { page: pageStr } = router.query
    if (typeof pageStr === 'string') {
      return parseInt(pageStr)
    }
    return 1
  }, [router])

  return (
    <>
      <MainHeader />
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Button style={{ display: 'block', margin: '32px 0 32px auto' }}>Create a new Property</Button>
        <PropertyCardList currentPage={page} />
      </div>
      <Footer />
    </>
  )
}

export default Index

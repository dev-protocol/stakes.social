import React, { useMemo } from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { Button } from 'antd'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'

type InitialProps = {}
type Props = {} & InitialProps

const StyledAuthButton = styled(Button)`
  float: right;
`

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
      <EarlyAccess></EarlyAccess>
      <MainHeader />
      <div style={{ padding: '1rem', maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Link href={'/auth'} as={'/auth'}>
          <StyledAuthButton>Create or Configure a Property</StyledAuthButton>
        </Link>
        <PropertyCardList currentPage={page} />
      </div>
      <Footer />
    </>
  )
}

export default Index

import React from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'
import { Footer } from 'src/components/organisms/Footer'
import { Button } from 'antd'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  return (
    <>
      <MainHeader />
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Button style={{ display: 'block', margin: '32px 0 32px auto' }}>Create a new Property</Button>
        <PropertyCardList />
      </div>
      <Footer />
    </>
  )
}

export default Index

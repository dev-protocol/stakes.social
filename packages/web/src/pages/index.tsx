import React from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'
import { MainHeader } from 'src/components/organisms/MainHeader'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  return (
    <div>
      <MainHeader />
      <PropertyCardList />
    </div>
  )
}

export default Index

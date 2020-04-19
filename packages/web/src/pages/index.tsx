import React from 'react'
import { PropertyCardList } from 'src/components/organisms/PropertyCardList'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  return (
    <div>
      <PropertyCardList />
    </div>
  )
}

export default Index

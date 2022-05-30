import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { useProvider } from 'src/fixtures/wallet/hooks'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const x = useProvider()
  console.log({ x })

  return <Header />
}

export default Index

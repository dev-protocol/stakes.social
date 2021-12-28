import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { ConvertToStokens } from 'src/components/organisms/ConvertToStokens'
import { Header } from 'src/components/organisms/Header'
import { Footer } from '../../components/organisms/Footer'

const Wrap = styled.div`
  margin: '12px 0';
`

const Index = () => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <>
      <Header />
      <Wrap>{propertyAddress && <ConvertToStokens propertyAddress={propertyAddress} />}</Wrap>
      <Footer />
    </>
  )
}

export default Index

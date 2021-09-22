import { useRouter } from 'next/router'
import React from 'react'
import { ConvertToStokens } from 'src/components/organisms/ConvertToStokens'
import { Header } from 'src/components/organisms/Header'
import { Footer } from '../../components/organisms/Footer'

const Index = () => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }
  return (
    <>
      <Header />
      <div style={{ margin: '12px 0' }}>
        <ConvertToStokens propertyAddress={propertyAddress} />
      </div>
      <Footer />
    </>
  )
}

export default Index

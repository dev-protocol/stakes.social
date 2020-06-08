import React from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { AssetOutline } from 'src/components/organisms/AssetOutline'
import { Footer } from 'src/components/organisms/Footer'
import Link from 'next/link'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import styled from 'styled-components'

type Props = {}

const Outlines = styled.div`
  display: grid;
  max-width: 1048px;
  width: 100%;
  margin: auto;
  padding: 1rem;
  grid-gap: 1rem;
`

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <PropertyHeader propertyAddress={propertyAddress} />
      <Link href="//github.com/dev-protocol/assets" passHref>
        <a target="_blank" style={{ margin: '1rem' }}>
          Change the cover image
        </a>
      </Link>
      <Outlines>
        <AssetOutline propertyAddress={propertyAddress} />
        <PossessionOutline propertyAddress={propertyAddress} />
        <TransactionForm propertyAddress={propertyAddress} />
      </Outlines>
      <Footer />
    </>
  )
}

export default PropertyAddressDetail

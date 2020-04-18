import React from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'

type Props = {}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <div>
      <PropertyHeader propertyAddress={propertyAddress} />
      <PossessionOutline propertyAddress={propertyAddress} />
      <TransactionForm propertyAddress={propertyAddress} />
    </div>
  )
}

export default PropertyAddressDetail

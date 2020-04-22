import React from 'react'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { AssetOutline } from 'src/components/organisms/AssetOutline'
import { Footer } from 'src/components/organisms/Footer'
import { Space } from 'antd'

type Props = {}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <>
      <PropertyHeader propertyAddress={propertyAddress} />
      <div style={{ maxWidth: '1048px', padding: '82px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Space size={80} direction="vertical">
          <AssetOutline propertyAddress={propertyAddress} />
          <PossessionOutline propertyAddress={propertyAddress} />
          <TransactionForm propertyAddress={propertyAddress} />
        </Space>
      </div>
      <Footer />
    </>
  )
}

export default PropertyAddressDetail

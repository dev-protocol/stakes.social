import React from 'react'
import { Row, Col } from 'antd'
import { useRouter } from 'next/router'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { AssetOutline } from 'src/components/organisms/AssetOutline'
import { Footer } from 'src/components/organisms/Footer'

type Props = {}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <>
      <PropertyHeader propertyAddress={propertyAddress} />
      <div style={{ maxWidth: '1048px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <AssetOutline propertyAddress={propertyAddress} />
          </Col>
        </Row>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <PossessionOutline propertyAddress={propertyAddress} />
          </Col>
        </Row>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <TransactionForm propertyAddress={propertyAddress} />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default PropertyAddressDetail

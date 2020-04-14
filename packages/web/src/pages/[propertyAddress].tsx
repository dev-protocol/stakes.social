import React from 'react'
import { Button } from 'antd'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'

const WalletConnectButton = dynamic(
  () => import('src/components/organisms/WalletConnectButton').then(mod => mod.WalletConnectButton) as any,
  { ssr: false }
)

type Props = {}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <div>
      <Button onClick={() => Router.push('/')}>please click here!</Button>
      <WalletConnectButton />
      <p>property address: {propertyAddress}</p>
      <PossessionOutline propertyAddress={propertyAddress} />
    </div>
  )
}

export default PropertyAddressDetail

import React from 'react'
import { Button } from 'antd'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { TotalStakingAmount } from 'src/components/organisms/TotalStakingAmount'

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
      <TotalStakingAmount propertyAddress={propertyAddress} />
    </div>
  )
}

export default PropertyAddressDetail

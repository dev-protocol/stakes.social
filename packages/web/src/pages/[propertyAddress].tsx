import React from 'react'
import { Button } from 'antd'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { PossessionOutline } from 'src/components/organisms/PossessionOutline'
import { WithdrawHolderCard } from 'src/components/organisms/WithdrawHolder'
import { PropertyHeader } from 'src/components/organisms/PropertyHeader'
import { WithdrawStakingCard } from 'src/components/organisms/WithdrawStaking'
import { StakeNow } from 'src/components/organisms/StakeNow'

const WalletConnectButton = dynamic(
  () => import('src/components/organisms/WalletConnectButton').then(mod => mod.WalletConnectButton) as any,
  { ssr: false }
)

type Props = {}

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  return (
    <div>
      <PropertyHeader propertyAddress={propertyAddress} />
      <Button onClick={() => Router.push('/')}>please click here!</Button>
      <WalletConnectButton />
      <p>property address: {propertyAddress}</p>
      <PossessionOutline propertyAddress={propertyAddress} />
      <WithdrawHolderCard propertyAddress={propertyAddress} />
      <WithdrawStakingCard propertyAddress={propertyAddress} />
      <StakeNow propertyAddress={propertyAddress} />
    </div>
  )
}

export default PropertyAddressDetail

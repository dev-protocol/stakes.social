import React from 'react'
import { Button } from 'antd'
import Router, { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useGetTotalStakingAmount } from 'src/fixtures/dev-kit/hooks'

const WalletConnectButton = dynamic(
  () => import('src/components/organisms/WalletConnectButton').then(mod => mod.WalletConnectButton) as any,
  { ssr: false }
)

type InitialProps = {}

type Props = {} & InitialProps

const PropertyAddressDetail = (_: Props) => {
  const { propertyAddress } = useRouter().query as { propertyAddress: string }

  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)

  return (
    <div>
      <Button onClick={() => Router.push('/')}>please click here!</Button>
      <WalletConnectButton />
      {totalStakingAmount && <div>total staking amount: {totalStakingAmount.dp(1).toNumber()}</div>}
    </div>
  )
}

export default PropertyAddressDetail

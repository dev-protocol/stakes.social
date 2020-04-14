import React from 'react'
import { useListPropertyQuery } from '@dev/graphql'
import { PropertyCard } from 'src/components/organisms/PropertyCard'
import dynamic from 'next/dynamic'

const WalletConnectButton = dynamic(
  () => import('src/components/organisms/WalletConnectButton').then(mod => mod.WalletConnectButton) as any,
  { ssr: false }
)

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const { data, loading } = useListPropertyQuery()

  return (
    <div>
      <WalletConnectButton />
      {loading && <div>loading.......</div>}
      {data && (
        <div>
          {data.property_factory_create.map(d => (
            <PropertyCard key={d.event_id} propertyAddress={d.property} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Index

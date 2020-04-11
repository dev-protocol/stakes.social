import React from 'react'
import { Button } from 'antd'
import { useListPropertyQuery } from '@dev/graphql'
import { useDetectWallet } from 'src/fixtures/wallet/hooks'
import { PropertyCard } from 'src/components/organisms/PropertyCard'
import Router from 'next/router'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const { data, loading } = useListPropertyQuery()

  const { isConnected } = useDetectWallet()

  return (
    <div>
      <Button onClick={() => Router.push('/about')}>please click here!</Button>
      {isConnected && <div>wallet connected</div>}
      {!isConnected && <div>no wallet connected</div>}
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

import React from 'react'
import { Button } from 'antd'
import { useListAllocatorAllocationResultsQuery } from '@dev/graphql'
import Router from 'next/router'
import dynamic from 'next/dynamic'

const WalletConnectButton = dynamic(
  () => import('src/components/organisms/WalletConnectButton').then(mod => mod.WalletConnectButton) as any,
  { ssr: false }
)

type InitialProps = {}

type Props = {} & InitialProps

const About = (_: Props) => {
  const { data, loading } = useListAllocatorAllocationResultsQuery({})

  return (
    <div>
      <Button onClick={() => Router.push('/')}>please click here!</Button>
      <WalletConnectButton />
      {loading && <div>loading.......</div>}
      {data && (
        <div>
          {data.allocator_allocation_result.map(d => (
            <li key={d.event_id}>{d.result}</li>
          ))}
        </div>
      )}
    </div>
  )
}

export default About

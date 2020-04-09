import React from 'react'
import { Button } from 'antd'
import { useListAllocatorAllocationResultsQuery } from '@dev/graphql'
import Router from 'next/router'

type InitialProps = {}
type Props = {} & InitialProps

const Index = (_: Props) => {
  const { data, loading } = useListAllocatorAllocationResultsQuery({})

  return (
    <div>
      <Button onClick={() => Router.push('/about')}>please click here!</Button>
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

export default Index

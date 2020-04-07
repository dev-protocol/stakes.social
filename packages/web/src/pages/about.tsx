import React from 'react'
import { Button } from '@material-ui/core'
import { useListUsersQuery } from '@dev/graphql'
import Router from 'next/router'

type InitialProps = {}

type Props = {} & InitialProps

const About = (_: Props) => {
  const { data, loading } = useListUsersQuery({})

  return (
    <div>
      <Button onClick={() => Router.push('/')}>please click here!</Button>
      {loading && <div>loading.......</div>}
      {data && (
        <div>
          {data.list.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </div>
      )}
    </div>
  )
}

export default About

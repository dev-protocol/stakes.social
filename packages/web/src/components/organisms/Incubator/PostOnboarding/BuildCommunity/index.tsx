import React from 'react'
import styled from 'styled-components'
import { Span } from '../../Typography'
import BuildCommunityAnimation from './Animations'

const Grid = styled.div`
  display: grid;
  padding-top: 3em;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
`

const BuildCommunity = () => {
  return (
    <Grid>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <BuildCommunityAnimation />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span fontSize="24px" fontWeight="bold">
          Build a community to stake DEV tokens for you
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Span>
      </div>
      <div style={{ height: '50px', gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}></div>
    </Grid>
  )
}

export default BuildCommunity

import React from 'react'
import { Span } from '../../Typography'
import BuildCommunityAnimation from './Animations'
import BoardingGrid from '../../molecules/BoardingGrid'
import AnimationContainer from '../../molecules/AnimationContainer'

const BuildCommunity = () => {
  return (
    <BoardingGrid>
      <AnimationContainer>
        <BuildCommunityAnimation />
      </AnimationContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span style={{ paddingTop: '3em' }} fontSize="24px" fontWeight="bold">
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
      <div style={{ paddingBottom: '5em', gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}>
        <div style={{ height: '50px' }} />
      </div>
    </BoardingGrid>
  )
}

export default BuildCommunity

import React from 'react'
import { Span } from '../../Typography'
import BuildCommunityAnimation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const BuildCommunity = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <Container>
      <AnimationContainer>
        <BuildCommunityAnimation />
      </AnimationContainer>
      <DescriptionContainer>
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
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(4)}
          forwardCallback={() => onActivePageChange(1)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default BuildCommunity

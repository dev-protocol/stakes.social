import React from 'react'
import { Span } from '../../Typography'
import AddTokenToMetamaskAnimation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const DevTokenExplanation = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <Container>
      <AnimationContainer>
        <AddTokenToMetamaskAnimation />
      </AnimationContainer>
      <DescriptionContainer>
        <Span fontSize="24px" fontWeight="bold">
          How your DEV token works
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </Span>
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(2)}
          forwardCallback={() => onActivePageChange(4)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default DevTokenExplanation

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
          The most successful projects build a community of Patrons to stake DEV tokens for them. Add the DEV badge to
          your Github so users know they can earn money by supporting your project!
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

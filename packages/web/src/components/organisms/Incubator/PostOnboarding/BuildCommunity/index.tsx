import React from 'react'
import { H1S, Text1M } from '../../Typography'
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
        <H1S>Build a community to stake DEV tokens for you</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          The most successful projects build a community of Patrons to stake DEV tokens for them. Add the DEV badge to
          your Github so users know they can earn money by supporting your project!
        </Text1M>
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(4)}
          forwardCallback={() => onActivePageChange(1)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default BuildCommunity

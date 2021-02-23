import React from 'react'
import { H1S, Text1M } from '../../Typography'
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
        <H1S>How your DEV token works</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          The DEV token is a governance token with utility that is minted via inflation. Patrons stake DEV tokens for
          OSS projects they want to support. OSS projects can choose to sell the DEV token to fund their projects or
          stake it for other OSS projects. The DEV token also gives you voting rights on protocol decisions.
        </Text1M>
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(2)}
          forwardCallback={() => onActivePageChange(4)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default DevTokenExplanation

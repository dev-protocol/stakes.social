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
          The DEV token is a governance token with utility that is minted via inflation. Patrons stake DEV tokens for
          OSS projects they want to support. OSS projects can choose to sell the DEV token to fund their projects or
          stake it for other OSS projects. The DEV token also gives you voting rights on protocol decisions.
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

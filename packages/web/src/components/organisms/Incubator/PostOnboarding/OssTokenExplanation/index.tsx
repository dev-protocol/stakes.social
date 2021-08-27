import React from 'react'
import { Text1M, H1S } from '../../Typography'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const OssTokenLogo = () => {
  return (
    <div>
      <svg width="320" height="320" viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0 160C0 71.6 71.6 0 160 0C248.4 0 320 71.6 320 160C320 248.4 248.4 320 160 320C71.6 320 0 248.4 0 160Z"
          fill="black"
        />
        <path d="M64 192H32V224H64V192Z" fill="#00D0FD" />
        <path d="M64 192V224H96V192V160H64V192Z" fill="#5B8BF5" />
        <path d="M160 160V192V224H192H224H256V192V160H288V128V96H256V128H224V160V192H192V160H160Z" fill="#FF3815" />
        <path d="M96 160V192H128H160V160V128H128H96V160Z" fill="#D500E6" />
      </svg>
    </div>
  )
}

const OssTokenExplanation = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <Container>
      <AnimationContainer>
        <OssTokenLogo />
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>How your OSS token works</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          OSS projects mint their own token when they join Dev Protocol. These tokens are named after your project. OSS
          token holder(s) receive a proportion of the inflationary funding awarded to the project. Therefore make sure
          to only share your token with trusted parties.
        </Text1M>
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(3)}
          forwardCallback={() => onActivePageChange(5)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default OssTokenExplanation

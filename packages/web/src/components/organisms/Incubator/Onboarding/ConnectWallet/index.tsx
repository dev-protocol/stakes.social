import React from 'react'

import { Span } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { Container, AnimationContainer, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type ConnectWalletType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const ConnectWallet = ({ onActivePartChange }: ConnectWalletType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Connect Wallet
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Click &quot;Connect Wallet&quot; in the top right corner of the website. This allows you to interact with our
          website to retrieve your funding.
        </Span>
      </DescriptionContainer>
      <BoardingNavigation
        backwardCallback={() => onActivePartChange(2)}
        forwardCallback={() => onActivePartChange(4)}
      />
    </Container>
  )
}

export default ConnectWallet

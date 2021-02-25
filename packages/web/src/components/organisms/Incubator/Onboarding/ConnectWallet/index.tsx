import React from 'react'

import { H1S, Text1M } from 'src/components/organisms/Incubator/Typography'
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
        <H1S>Connect Wallet</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          Click &quot;Connect Wallet&quot; in the top right corner of the website. This allows you to interact with our
          website to retrieve your funding.
        </Text1M>
        <BoardingNavigation
          backwardCallback={() => onActivePartChange(2)}
          forwardCallback={() => onActivePartChange(4)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default ConnectWallet

import React from 'react'

import { Span, H1S, Text1M } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type PurchaseEthereumType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const PurchaseEthereum = ({ onActivePartChange }: PurchaseEthereumType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>Purchase ETH in Metamask</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          In order to create your project some Ethereum is needed. Open MetaMask by clicking on the icon in the top
          right corner of your browser. Once opened, click the buy button and select “Buy ETH” on Wyre. Follow the
          required steps and your ETH will be sent to your wallet once your purchase is successful.
        </Text1M>

        <BoardingNavigation
          backwardCallback={() => onActivePartChange(1)}
          forwardCallback={() => onActivePartChange(3)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default PurchaseEthereum

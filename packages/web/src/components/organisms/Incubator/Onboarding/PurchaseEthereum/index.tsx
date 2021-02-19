import React from 'react'

import { Span } from 'src/components/organisms/Incubator/Typography'
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
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Purchase ETH in Metamask
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          In order to create your project some Ethereum is needed. Open MetaMask by clicking on the icon in the top
          right corner of your browser. Once opened, click the buy button and select “Buy ETH” on Wyre. Follow the
          required steps and your ETH will be sent to your wallet once your purchase is successful.
        </Span>
      </DescriptionContainer>
      <BoardingNavigation
        backwardCallback={() => onActivePartChange(1)}
        forwardCallback={() => onActivePartChange(3)}
      />
    </Container>
  )
}

export default PurchaseEthereum

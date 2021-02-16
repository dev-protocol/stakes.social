import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import Animation from './Animations'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 3em;

  padding-top: 2em;
`

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  padding-bottom: 5em;
`

type PurchaseEthereumType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const PurchaseEthereum = ({ onActivePartChange }: PurchaseEthereumType) => {
  return (
    <Container>
      <div style={{ width: '550px', height: '460px' }}>
        <Animation />
      </div>
      <DescriptionContainer>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Purchase ETH in Metamask
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          In order to create your project some Ethereum is needed. Open MetaMask by clicking on the icon in the top
          right corner of your browser. Once opened, click the buy button and select the Buy ETH with Wyre option.
          Follow the steps to buy Ethereum with your creditcard.
        </Span>
      </DescriptionContainer>
      <NextButtonContainer>
        <Button onClick={() => onActivePartChange(3)}>Next</Button>
      </NextButtonContainer>
    </Container>
  )
}

export default PurchaseEthereum

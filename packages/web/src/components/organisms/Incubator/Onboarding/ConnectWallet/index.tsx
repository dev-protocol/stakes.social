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

type ConnectWalletType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const ConnectWallet = ({ onActivePartChange }: ConnectWalletType) => {
  return (
    <Container>
      <div style={{ width: '550px', height: '460px' }}>
        <Animation />
      </div>
      <DescriptionContainer>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Connect Wallet
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Click the &quot;Connect Wallet&quot; option in the top right corner of the website. This allows us to retrieve
          your wallet address and verify your identity before authenticating.
        </Span>
      </DescriptionContainer>
      <NextButtonContainer>
        <Button onClick={() => onActivePartChange(4)}>Next</Button>
      </NextButtonContainer>
    </Container>
  )
}

export default ConnectWallet

import React from 'react'

import { Span, LinkB } from 'src/components/organisms/Incubator/Typography'
import DownloadMetamaskAnimation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type DownloadMetamaskType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const DownloadMetamask = ({ onActivePartChange }: DownloadMetamaskType) => {
  return (
    <Container>
      <AnimationContainer>
        <DownloadMetamaskAnimation />
      </AnimationContainer>
      <DescriptionContainer>
        <Span fontWeight="bold" fontSize="24px">
          Download MetaMask
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          MetaMask is a blockchain wallet used to interact with the Ethereum blockchain. It allows users to store and
          manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and
          securely connect to decentralized applications through a compatible web browser or the mobile {"app's"}{' '}
          built-in browser.
        </Span>
        <LinkB
          target="_blank"
          rel="noopener noreferrer"
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          style={{ paddingTop: '1em' }}
        >
          Download MetaMask Browser Extension for Chrome
        </LinkB>
        <BoardingNavigation
          backwardCallback={() => onActivePartChange(5)}
          forwardCallback={() => onActivePartChange(2)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default DownloadMetamask

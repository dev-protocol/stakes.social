import React from 'react'

import { LinkB, H1S, Text1M } from 'src/components/organisms/Incubator/Typography'
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
        <H1S>Download MetaMask</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          MetaMask is a blockchain wallet used to interact with the Ethereum blockchain. It allows users to store and
          manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and
          securely connect to decentralized applications through a compatible web browser or the mobile {"app's"}{' '}
          built-in browser.
        </Text1M>
        <LinkB
          target="_blank"
          rel="noopener noreferrer"
          href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
          style={{ paddingTop: '1.5em' }}
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

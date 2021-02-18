import React from 'react'
import styled from 'styled-components'

import { Span, LinkB } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import DownloadMetamaskAnimation from './Animations'
import AnimationContainer from '../../molecules/AnimationContainer'

const DownloadMetamaskContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 3em;

  padding-top: 2em;
`

const DownloadMetamaskDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const NextButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  grid-column: 1/-1;
  padding-bottom: 5em;
`

type DownloadMetamaskType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const DownloadMetamask = ({ onActivePartChange }: DownloadMetamaskType) => {
  return (
    <DownloadMetamaskContainer>
      <AnimationContainer>
        <DownloadMetamaskAnimation />
      </AnimationContainer>
      <DownloadMetamaskDescription>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
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
          style={{ paddingTop: '4em' }}
        >
          Download MetaMask Browser Extension for Chrome
        </LinkB>
      </DownloadMetamaskDescription>
      <NextButtonContainer>
        <Button onClick={() => onActivePartChange(2)}>Next</Button>
      </NextButtonContainer>
    </DownloadMetamaskContainer>
  )
}

export default DownloadMetamask

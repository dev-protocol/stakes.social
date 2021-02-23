import React from 'react'

import { Span, LinkB, H1S, Text1M } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type CopyPatType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const CopyPat = ({ onActivePartChange }: CopyPatType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>Enter Personal Access token</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          In order to authenticate your ownership of the project you’re attempting to claim we require you to submit
          your Github Personal Access Token (PAT). If you like you can create a new PAT with no permissions. Our Khaos
          oracle confidentially authenticates your PAT so it remains secure!
        </Text1M>
        <LinkB
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/settings/tokens/new"
          style={{ paddingTop: '1.5em' }}
        >
          Create PAT
        </LinkB>
        <BoardingNavigation
          backwardCallback={() => onActivePartChange(3)}
          forwardCallback={() => onActivePartChange(5)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default CopyPat

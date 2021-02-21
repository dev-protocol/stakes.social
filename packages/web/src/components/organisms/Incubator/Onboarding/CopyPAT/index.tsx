import React from 'react'

import { Span, LinkB } from 'src/components/organisms/Incubator/Typography'
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
        <Span fontWeight="bold" fontSize="24px">
          Enter Personal Access token
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          In order to authenticate your ownership of the project you’re attempting to claim we require you to submit
          your Github Personal Access Token (PAT). If you like you can create a new PAT with no permissions. Our Khaos
          oracle confidentially authenticates your PAT so it remains secure!
        </Span>
        <LinkB
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/settings/tokens/new"
          style={{ paddingTop: '1em' }}
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

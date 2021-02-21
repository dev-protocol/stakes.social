import React from 'react'

import { Span } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { Container, AnimationContainer, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'

type SubmitTranscriptType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
}

const SubmitTransaction = ({ onActivePartChange }: SubmitTranscriptType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <Span fontWeight="bold" fontSize="24px">
          Share the News on Twitter
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          The last step to redeem your funding is to share the news on Twitter! We generate a message for each project
          announcing their arrival on Stakes Social. After you publish the tweet copy and paste the link and the Khaos
          oracle will authenticate if it was successfully completed.
        </Span>
        <BoardingNavigation
          backwardCallback={() => onActivePartChange(4)}
          forwardCallback={() => onActivePartChange(1)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default SubmitTransaction

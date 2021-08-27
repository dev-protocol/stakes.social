import React from 'react'

import { H1S, Text1M } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { Container, AnimationContainer, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'
import { SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'

type SubmitTranscriptType = {
  onActivePartChange: React.Dispatch<React.SetStateAction<number>>
  onStateChange?: SetOnboardingPageStatus
  onClick: React.MouseEventHandler<HTMLElement>
}

const SubmitTransaction = ({ onActivePartChange, onClick }: SubmitTranscriptType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>Share the News on Twitter</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          The last step to redeem your funding is to share the news on Twitter! We generate a message for each project
          announcing their arrival on Stakes Social. After you publish the tweet copy and paste the link and the Khaos
          oracle will authenticate if it was successfully completed.
        </Text1M>
        <BoardingNavigation backwardCallback={() => onActivePartChange(4)} forwardCallback={onClick as any} />
      </DescriptionContainer>
    </Container>
  )
}

export default SubmitTransaction

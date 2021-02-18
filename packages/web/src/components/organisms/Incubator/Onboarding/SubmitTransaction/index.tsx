import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'
import { Button } from '../../molecules/Button'
import AnimationContainer from '../../molecules/AnimationContainer'

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

type SubmitTranscriptType = {
  onStateChange: React.Dispatch<React.SetStateAction<string>>
  isModal?: boolean
}

const SubmitTransaction = ({ onStateChange, isModal }: SubmitTranscriptType) => {
  return (
    <Container>
      <AnimationContainer>
        <Animation />
      </AnimationContainer>
      <DescriptionContainer>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Share the News on Twitter
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          The last step to redeem your funding is to share the news on Twitter! We generate a message for each project
          announcing their arrival on Stakes Social. After you publish the tweet copy and paste the link and the Khaos
          oracle will authenticate if it was successfully completed.
        </Span>
      </DescriptionContainer>
      <NextButtonContainer>
        {isModal && <Button onClick={() => onStateChange('authentication')}>Next</Button>}
        {!isModal && <div style={{ height: '50px' }}></div>}
      </NextButtonContainer>
    </Container>
  )
}

export default SubmitTransaction

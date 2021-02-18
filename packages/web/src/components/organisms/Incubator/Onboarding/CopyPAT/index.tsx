import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import Animation from './Animations'
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
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Enter Personal Access token
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          In order to authenticate your ownership of the project you’re attempting to claim we require you to submit
          your Github Personal Access Token (PAT). If you like you can create a new PAT with no permissions. Our Khaos
          oracle confidentially authenticates your PAT so it remains secure!
        </Span>
      </DescriptionContainer>
      <NextButtonContainer>
        <Button onClick={() => onActivePartChange(5)}>Next</Button>
      </NextButtonContainer>
    </Container>
  )
}

export default CopyPat

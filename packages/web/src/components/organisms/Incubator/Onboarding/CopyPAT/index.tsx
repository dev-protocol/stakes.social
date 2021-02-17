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
          Copy an PAT from github and paste it into the incubator field. We recommend you to create a new PAT with no
          permissions for this. By following this step we can authenticate you and connect the incubated project to your
          account.
        </Span>
      </DescriptionContainer>
      <NextButtonContainer>
        <Button onClick={() => onActivePartChange(5)}>Next</Button>
      </NextButtonContainer>
    </Container>
  )
}

export default CopyPat

import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import Animation from './Animations'

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

const SubmitTransaction = () => {
  return (
    <Container>
      <div style={{ width: '550px', height: '460px' }}>
        <Animation />
      </div>
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
      <div style={{ gridColumn: '1/-1', height: '130px', paddingBottom: '5em' }} />
    </Container>
  )
}

export default SubmitTransaction

import React from 'react'

import styled from 'styled-components'
import { LinkB } from '../../Typography'
import { Button } from '../Button'

export const AnimationContainer = styled.div`
  display: flex;
  grid-area: animation;
  justify-content: center;
  align-items: center;
  height: 500px;
`

export const NextButtonContainer = styled.div`
  display: flex;
  grid-area: navigation;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 5em;
`

export const DescriptionContainer = styled.div`
  grid-area: description;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'animation description'
    '. navigation';
  grid-gap: 1em 3em;

  padding-top: 2em;
`

type BoardingNavigationType = {
  forwardCallback: () => void
  backwardCallback: () => void
}

export const BoardingNavigation = ({ backwardCallback, forwardCallback }: BoardingNavigationType) => {
  return (
    <NextButtonContainer>
      <LinkB style={{ fontSize: '20px' }} onClick={backwardCallback}>
        Back
      </LinkB>
      <Button onClick={forwardCallback}>Next</Button>
    </NextButtonContainer>
  )
}

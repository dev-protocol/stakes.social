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
  padding-bottom: 3em;
  width: 100%;
  height: fit-content;
  display: flex;
  grid-area: navigation;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: 2em; */
`

export const DescriptionContainer = styled.div`
  padding-top: 3em;
  grid-area: description;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'animation description';
  grid-gap: 1em 3em;

  padding-top: 2em;
`

type BoardingNavigationType = {
  forwardCallback: () => void
  backwardCallback: () => void
}

export const BoardingNavigation = ({ backwardCallback, forwardCallback }: BoardingNavigationType) => {
  return (
    <div style={{ display: 'flex', flexGrow: 1, width: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <NextButtonContainer>
        <LinkB style={{ fontSize: '16px' }} onClick={backwardCallback}>
          Back
        </LinkB>
        <Button onClick={forwardCallback}>Next</Button>
      </NextButtonContainer>
    </div>
  )
}

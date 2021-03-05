import React from 'react'

import styled from 'styled-components'
import { LinkB } from '../../Typography'
import { Button } from '../Button'

export const AnimationContainer = styled.div`
  display: flex;
  grid-area: animation;
  justify-content: center;
  align-items: center;
  width: 552px;
  height: 456px;
`

export const NextButtonContainer = styled.div`
  padding-bottom: 1em;
  width: 100%;
  height: fit-content;
  display: flex;
  grid-area: navigation;
  justify-content: space-between;
  align-items: center;
`

export const DescriptionContainer = styled.div`
  padding-top: 36px;
  grid-area: description;
  display: flex;
  flex-direction: column;
`

export const Container = styled.div<{ isOverview?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'animation description';
  column-gap: 24px;
  margin-bottom: ${props => (props.isOverview ? '184px' : '74px')};
`

type BoardingNavigationType = {
  forwardCallback?: () => void
  backwardCallback?: () => void
}

export const BoardingNavigation = ({ backwardCallback, forwardCallback }: BoardingNavigationType) => {
  return (
    <div style={{ display: 'flex', flexGrow: 1, width: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}>
      <NextButtonContainer style={{ justifyContent: !backwardCallback ? 'flex-end' : 'space-between' }}>
        {backwardCallback && <LinkB onClick={backwardCallback}>Back</LinkB>}
        {forwardCallback && <Button onClick={forwardCallback}>Next</Button>}
      </NextButtonContainer>
    </div>
  )
}

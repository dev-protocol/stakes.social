import React from 'react'
import { Span } from '../../Typography'
import { Button } from '../../molecules/Button'
import BoardingGrid from '../../molecules/BoardingGrid'
import AnimationContainer from '../../molecules/AnimationContainer'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
}

const WhatsDEV = ({ onActivePageChange }: PostOnboardType) => {
  return (
    <BoardingGrid>
      <AnimationContainer>
        <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613359877/dev_cube_v4t3jq.png" />
      </AnimationContainer>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span fontSize="24px" fontWeight="bold">
          What is DEV protocol?
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          Stakes Social is Dev Protocol’s user facing application where OSS projects and patrons connect. OSS projects
          use Stakes Social to tokenize, obtain patrons, build communities, and incentive stakeholders in order to grow
          their project. Patrons use Stakes Social to stake the DEV token for OSS projects they support.
        </Span>
      </div>
      <div style={{ paddingBottom: '5em', gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}>
        <Button onClick={() => onActivePageChange(2)}>Next</Button>
      </div>
    </BoardingGrid>
  )
}

export default WhatsDEV

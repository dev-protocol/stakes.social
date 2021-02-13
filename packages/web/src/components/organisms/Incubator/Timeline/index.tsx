import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import TopArrow from '../molecules/TopArrow'

type TimelineSectionType = {
  part: number
  currentPart: number
  isFirst?: boolean
  isLast?: boolean
}

const Timepoint = styled.div<{ isFinished?: boolean }>`
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 90px;
  background: ${props => (props.isFinished ? '#5B8BF5' : '#dddddd')};
  align-items: center;
  align-content: center;
`

const TimepointContainer = styled.div<{ isFirst?: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 180px;

  transform: ${props => (props.isFirst ? 'translate(0)' : 'translateX(-50%)')};
`

const Timeline = styled.div<{ isFinished?: boolean; isLast?: boolean }>`
  /* align-self: flex-end; */
  display: ${props => props.isLast && 'none'};
  z-index: -1;
  border-top: ${props => (props.isFinished ? '4px solid #5B8BF5' : '4px solid #dddddd')};
  width: 200px;
  transform: translate(-5%, 47.5%);
`

const StepSpan = styled(Span)<{ isActive?: boolean }>`
  position: absolute;
  bottom: 50px;
  width: 50px;
  color: ${props => (props.isActive ? '#5B8BF5' : '#dddddd')};
`

const TopArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
`

const TimelineSection = ({ part, currentPart, isFirst, isLast }: TimelineSectionType) => {
  const isPointActive = currentPart >= part
  const isPartFinished = currentPart > part
  const isArrowActive = currentPart === part
  return (
    <>
      <TimepointContainer isFirst={isFirst}>
        <Timepoint isFinished={isPointActive} />
        <StepSpan fontSize="16px" isActive={isPointActive}>
          Step {part}
        </StepSpan>
        {isArrowActive && (
          <TopArrowContainer>
            <TopArrow />
          </TopArrowContainer>
        )}
      </TimepointContainer>
      <Timeline isLast={isLast} isFinished={isPartFinished} />
    </>
  )
}

export default TimelineSection

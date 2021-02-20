import React from 'react'
import styled from 'styled-components'

import { Span } from 'src/components/organisms/Incubator/Typography'
import TopArrow from '../molecules/TopArrow'

export const StepSpan = styled(Span)<{
  data?: any
  isActive?: boolean
  currentColor?: string
  isCurrent?: boolean
  isFinished?: boolean
  finishedColor?: string
}>`
  position: absolute;
  bottom: 50px;
  width: 55px;
  color: ${({ isCurrent, isFinished, currentColor, finishedColor }) => {
    if (isCurrent) {
      return currentColor || '#5B8BF5'
    }
    if (!isFinished) {
      return '#dddddd'
    }
    return finishedColor || '#5B8BF5'
  }};
`

type TimelineSectionType = {
  part: number
  currentPart: number
  isFirst?: boolean
  isLast?: boolean
  currentColor?: string
  finishedColor?: string
  pointerText?: string
  StepSpanComponent?: (input: any) => React.ReactNode
  onActivePartChange?: React.Dispatch<React.SetStateAction<number>>
}

const Timepoint = styled.div<{
  isFinished?: boolean
  finishedColor?: string
  currentColor?: string
  isCurrent?: boolean
  hasClick: boolean
}>`
  cursor: ${props => (props.hasClick ? 'pointer' : 'auto')};
  z-index: 1;
  width: 20px;
  height: 20px;
  border-radius: 90px;
  background: ${({ isCurrent, isFinished, currentColor, finishedColor }) => {
    if (isCurrent) {
      return currentColor || '#5B8BF5'
    }
    if (!isFinished) {
      return '#dddddd'
    }
    return finishedColor || '#5B8BF5'
  }};
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

const Timeline = styled.div<{ isFinished?: boolean; isLast?: boolean; finishedColor?: string }>`
  display: ${props => props.isLast && 'none'};
  z-index: -1;
  border-top: ${props => {
    if (!props.isFinished) {
      return '4px solid #dddddd'
    }
    return props.finishedColor ? `4px solid ${props.finishedColor}` : '4px solid #5B8BF5'
  }};
  width: 120px;
  transform: translate(-10px, 49%);
`
const TopArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
`

type StepProps = {
  width: string
  fontSize: string
  isActive: boolean
  finishedColor: string
  isFinished: boolean
  currentColor: string
  isCurrent: boolean
  onActivePartChange?: React.Dispatch<React.SetStateAction<number>>
}

export const Step = ({ info, children }: { info: StepProps; children: any }) => {
  const { currentColor, finishedColor, isActive, isCurrent, isFinished, fontSize, width } = info
  return (
    <StepSpan
      style={{ width: width }}
      fontSize={fontSize}
      currentColor={currentColor}
      finishedColor={finishedColor}
      isActive={isActive}
      isCurrent={isCurrent}
      isFinished={isFinished}
    >
      {children}
    </StepSpan>
  )
}

const TimelineSection = ({
  part,
  currentPart,
  isFirst,
  isLast,
  currentColor,
  finishedColor,
  pointerText,
  StepSpanComponent,
  onActivePartChange
}: TimelineSectionType) => {
  const isFinished = currentPart > part
  const isPartFinished = currentPart > part
  const isArrowActive = currentPart === part
  const info = {
    isActive: isFinished,
    finishedColor,
    isFinished,
    currentColor,
    isCurrent: isArrowActive
  }

  return (
    <>
      <TimepointContainer isFirst={isFirst}>
        <Timepoint
          hasClick={typeof onActivePartChange !== 'undefined'}
          onClick={() => onActivePartChange && onActivePartChange(part)}
          finishedColor={finishedColor}
          isFinished={isFinished}
          currentColor={currentColor}
          isCurrent={isArrowActive}
        />
        {StepSpanComponent ? (
          StepSpanComponent(info)
        ) : (
          <StepSpan
            fontSize="16px"
            isActive={isFinished}
            finishedColor={finishedColor}
            isFinished={isFinished}
            currentColor={currentColor}
            isCurrent={isArrowActive}
          >
            {pointerText || 'Step'} {part}
          </StepSpan>
        )}

        {isArrowActive && (
          <TopArrowContainer>
            <TopArrow color={currentColor} />
          </TopArrowContainer>
        )}
      </TimepointContainer>
      <Timeline isLast={isLast} finishedColor={finishedColor} isFinished={isPartFinished} />
    </>
  )
}

export default TimelineSection

import React, { useState } from 'react'
import styled from 'styled-components'
import { Span, LinkB } from '../Typography'
import TimelineSection, { Step } from '../Timeline'
import WhatsDEV from './WhatsDEV'
import WhatsStakesSocial from './WhatsStakeSocial'
import DevTokenExplanation from './DevTokenExplanation'
import OssTokenExplanation from './OssTokenExplanation'
import BuildCommunity from './BuildCommunity'
import Link from 'next/link'

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimelineContainer = styled.div`
  display: flex;
`

type WhatsNextType = {
  isOverview?: boolean
}

const PostOnboarding = ({ isOverview }: WhatsNextType) => {
  const [activePart, setActivePart] = useState(1)
  return (
    <>
      {!isOverview && (
        <SpaceBetween style={{ paddingTop: '1em' }}>
          <Span fontSize="20px">{"What's next?"}</Span>
          <Link href="/incubator">
            <LinkB>{activePart === 5 ? 'Back to overview' : 'Skip'}</LinkB>
          </Link>
        </SpaceBetween>
      )}

      <TimelineContainer style={{ alignSelf: 'center' }}>
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 1</Step>}
          isFirst={true}
          part={1}
          onActivePartChange={setActivePart}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 2</Step>}
          part={2}
          onActivePartChange={setActivePart}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 3</Step>}
          part={3}
          onActivePartChange={setActivePart}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 4</Step>}
          part={4}
          onActivePartChange={setActivePart}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 5</Step>}
          isLast={true}
          part={5}
          onActivePartChange={setActivePart}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
      </TimelineContainer>

      {activePart === 1 && <WhatsDEV onActivePageChange={setActivePart} />}

      {activePart === 2 && <WhatsStakesSocial onActivePageChange={setActivePart} />}

      {activePart === 3 && <DevTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 4 && <OssTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 5 && <BuildCommunity />}
    </>
  )
}

export default PostOnboarding

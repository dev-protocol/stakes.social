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
import { OnboardSwitch } from 'src/pages/incubator/project/[project]'

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimelineContainer = styled.div`
  display: flex;
`

type WhatsNextType = {
  isOverview?: boolean
  isOnboarding: boolean
  onBoardChange: React.Dispatch<React.SetStateAction<boolean>>
}

const PostOnboarding = ({ isOverview, isOnboarding, onBoardChange }: WhatsNextType) => {
  const [activePart, setActivePart] = useState(1)
  const { projectId } = { projectId: '0xF6899a1536E6474f0a6Aa2b36714e9632FB97D40' }
  return (
    <>
      <SpaceBetween style={{ alignItems: 'center', paddingTop: '1em' }}>
        <Span fontSize="16px">{"What's next?"}</Span>
        <TimelineContainer style={{ alignSelf: 'center' }}>
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 1</Step>}
            isFirst={true}
            part={1}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            currentColor="#D500E6"
            finishedColor="black"
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 2</Step>}
            part={2}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            currentColor="#D500E6"
            finishedColor="black"
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 3</Step>}
            part={3}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            currentColor="#D500E6"
            finishedColor="black"
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 4</Step>}
            part={4}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            currentColor="#D500E6"
            finishedColor="black"
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 5</Step>}
            isLast={true}
            part={5}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            currentColor="#D500E6"
            finishedColor="black"
          />
        </TimelineContainer>
        {isOverview ? (
          <OnboardSwitch isOnboarding={isOnboarding} onOnboardChange={onBoardChange} />
        ) : (
          <Link href="/[propertyAddress]" as={`/${projectId}`} passHref>
            <LinkB>Skip</LinkB>
          </Link>
        )}
      </SpaceBetween>

      {activePart === 1 && <WhatsDEV onActivePageChange={setActivePart} />}

      {activePart === 2 && <WhatsStakesSocial onActivePageChange={setActivePart} />}

      {activePart === 3 && <DevTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 4 && <OssTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 5 && <BuildCommunity onActivePageChange={setActivePart} />}
    </>
  )
}

export default PostOnboarding

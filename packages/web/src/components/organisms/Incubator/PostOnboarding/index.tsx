import React, { useState } from 'react'
import styled from 'styled-components'
import { LinkB, H3Xs } from '../Typography'
import TimelineSection, { Step } from '../Timeline'
import WhatsDEV from './WhatsDEV'
import WhatsStakesSocial from './WhatsStakeSocial'
import DevTokenExplanation from './DevTokenExplanation'
import OssTokenExplanation from './OssTokenExplanation'
import BuildCommunity from './BuildCommunity'
import Link from 'next/link'
import { OnboardSwitch } from 'src/pages/incubator/project/[project]'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'

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
  project: Incubator
}

const PostOnboarding = ({ isOverview, isOnboarding, onBoardChange, project }: WhatsNextType) => {
  const [activePart, setActivePart] = useState(1)

  return (
    <>
      <SpaceBetween style={{ paddingTop: isOverview ? '64px' : '72px', alignItems: 'center', paddingBottom: '1em' }}>
        <H3Xs>{"What's next?"}</H3Xs>
        <TimelineContainer style={{ alignSelf: 'center' }}>
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 1</Step>}
            isFirst={true}
            part={1}
            onActivePartChange={setActivePart}
            currentPart={activePart}
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 2</Step>}
            part={2}
            onActivePartChange={setActivePart}
            currentPart={activePart}
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 3</Step>}
            part={3}
            onActivePartChange={setActivePart}
            currentPart={activePart}
            pendingColor="red"
            isRecommended={true}
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 4</Step>}
            part={4}
            onActivePartChange={setActivePart}
            currentPart={activePart}
          />
          <TimelineSection
            StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '12px' }}>Tip 5</Step>}
            isLast={true}
            part={5}
            onActivePartChange={setActivePart}
            currentPart={activePart}
          />
        </TimelineContainer>
        {isOverview ? (
          <OnboardSwitch isOnboarding={isOnboarding} onOnboardChange={onBoardChange} />
        ) : (
          <Link href="/[propertyAddress]" as={`/${project.property?.address}`} passHref>
            <LinkB>Skip</LinkB>
          </Link>
        )}
      </SpaceBetween>

      {activePart === 1 && <WhatsDEV onActivePageChange={setActivePart} />}

      {activePart === 2 && <WhatsStakesSocial onActivePageChange={setActivePart} />}

      {activePart === 3 && <DevTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 4 && <OssTokenExplanation onActivePageChange={setActivePart} />}

      {activePart === 5 && project.property?.address && (
        <BuildCommunity projectAddress={project.property.address} onActivePageChange={setActivePart} />
      )}
    </>
  )
}

export default PostOnboarding

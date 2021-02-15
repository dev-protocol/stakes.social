import React, { useState } from 'react'
import styled from 'styled-components'
import { Span, LinkB } from '../../Typography'
import TimelineSection, { Step } from '../../Timeline'
import { Button } from '../../molecules/Button'

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimelineContainer = styled.div`
  display: flex;
`

const WhatsNextGrid = styled.div`
  display: grid;
  padding-top: 3em;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
`

const WhatsNext = () => {
  const [activePart, setActivePart] = useState(3)
  return (
    <>
      <SpaceBetween style={{ paddingTop: '1em' }}>
        <Span fontSize="20px">What's next?</Span>
        <LinkB>Skip</LinkB>
      </SpaceBetween>
      <TimelineContainer style={{ alignSelf: 'center' }}>
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 1</Step>}
          isFirst={true}
          part={1}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 2</Step>}
          part={2}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 3</Step>}
          part={3}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
        <TimelineSection
          StepSpanComponent={(info: any) => <Step info={{ ...info, width: '40px', fontSize: '16px' }}>Tip 4</Step>}
          isLast={true}
          part={4}
          currentPart={activePart}
          currentColor="#D500E6"
          finishedColor="black"
        />
      </TimelineContainer>
      {activePart === 3 && (
        <WhatsNextGrid>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613359877/dev_cube_v4t3jq.png" />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Span fontSize="24px" fontWeight="bold">
              How your OSS token works
            </Span>
            <Span style={{ paddingTop: '3em' }} fontSize="16px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </Span>
          </div>
          <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => setActivePart(activePart + 1)}>Next</Button>
          </div>
        </WhatsNextGrid>
      )}
    </>
  )
}

export default WhatsNext

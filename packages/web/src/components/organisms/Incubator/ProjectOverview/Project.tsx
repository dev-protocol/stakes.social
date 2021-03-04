import React from 'react'
import styled from 'styled-components'
import * as lorem from 'lorem-ipsum'

import { H1S, H3S, Text1S } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import Link from 'next/link'
import DevCurrencySymbol from '../molecules/DevCurrency'
import { useGetReward } from 'src/fixtures/_pages/incubator/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'

const ipsum = new lorem.LoremIpsum({
  sentencesPerParagraph: { min: 1, max: 3 },
  wordsPerSentence: { min: 6, max: 10 }
})

type ProjectProps = {
  project: Incubator
}

const ProjectContainer = styled.div`
  display: grid;
  background: white;
  border-radius: 16px;
  height: 456px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.5fr 1fr 1fr;
  row-gap: 2em;
  padding: 2em 1.5em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
`

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 10px;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DescriptionContainer = styled.div`
  grid-column: 1/1;
  font-family: Whyte;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4; /* number of lines to show */
  -webkit-box-orient: vertical;
`

const FundingSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-column: 1/1;
`

const ClaimButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const Name = styled(H3S)`
  /* These are technically the same, but use both */
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  /* This is the dangerous one in WebKit, as it breaks things wherever */
  word-break: break-all;
  /* Instead use this non-standard one: */
  word-break: break-word;

  /* Adds a hyphen where the word breaks, if supported (No Blink) */
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
`

const ProjectEntry = ({ project }: ProjectProps) => {
  // Probably fetch data per project async here
  const { currency, reward } = useGetReward(project.verifier_id)
  const convertedFunding = reward ? reward.dp(0).toNumber().toLocaleString() : 0
  const CLAIMED = false
  return (
    <ProjectContainer>
      <TitleContainer>
        <Name>{project.name}</Name>
        <IconContainer>
          {project.property?.avatar && <img src={project.property?.avatar.url} width="64px" height="64px" />}
        </IconContainer>
      </TitleContainer>
      <DescriptionContainer>{project.property?.description || ipsum.generateSentences(3)}</DescriptionContainer>
      <FundingSection>
        <Text1S color="#CCCCCC">Funding received</Text1S>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {currency === 'DEV' && <DevCurrencySymbol />}
          <H1S style={{ marginLeft: currency === 'DEV' ? '10px' : '0' }}>
            {currency === 'USD' && '$ '}
            {convertedFunding} {currency}
          </H1S>
        </div>
      </FundingSection>
      <ClaimButtonContainer>
        <Link href={'/incubator/project/[project]'} as={`/incubator/project/${project.property?.address}`} passHref>
          <Button disabled={CLAIMED}>{CLAIMED ? 'Claimed' : 'Claim'}</Button>
        </Link>
      </ClaimButtonContainer>
    </ProjectContainer>
  )
}

export default ProjectEntry

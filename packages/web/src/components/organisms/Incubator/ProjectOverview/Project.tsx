import React from 'react'
import styled from 'styled-components'
import * as lorem from 'lorem-ipsum'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import Link from 'next/link'
import { useCurrency } from 'src/fixtures/currency/hooks'

const ipsum = new lorem.LoremIpsum({
  sentencesPerParagraph: { min: 1, max: 3 },
  wordsPerSentence: { min: 6, max: 10 }
})

type ProjectProps = {
  title: string
  funding: number
  url: string
  claimed?: boolean
}

const ProjectContainer = styled.div`
  display: grid;
  background: white;
  border-radius: 16px;
  height: 455px;
  width: 100%;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  row-gap: 2em;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
`

const TitleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const DescriptionContainer = styled.div`
  grid-column: 1/1;
  line-clamp: 4;
  box-orient: vertical;
  overflow: hidden;
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
`

const ProjectEntry = ({ funding, title, url, claimed }: ProjectProps) => {
  const { currency, toCurrency } = useCurrency()
  const convertedFunding = toCurrency(funding).dp(0).toNumber().toLocaleString()
  // Probably fetch data per project async here
  return (
    <ProjectContainer>
      <TitleContainer>
        <Span fontSize="24px">{title}</Span>
        <IconContainer>
          <img src={url} width="64px" height="64px" />
        </IconContainer>
      </TitleContainer>
      <DescriptionContainer>{ipsum.generateSentences(3)}</DescriptionContainer>
      <FundingSection>
        <Span fontSize="16px" color="#CCCCCC">
          Funding received
        </Span>
        <Span fontSize="24px" fontWeight="bold">
          {currency === 'USD' && '$ '}
          {convertedFunding} {currency}
        </Span>
      </FundingSection>
      <ClaimButtonContainer>
        <Link href={'/incubator/project/[project]'} as={`/incubator/project/${title}`} passHref>
          <Button disabled={claimed}>{claimed ? 'Claimed' : 'Claim'}</Button>
        </Link>
      </ClaimButtonContainer>
    </ProjectContainer>
  )
}

export default ProjectEntry

import React from 'react'
import styled from 'styled-components'
import AuthenticationForm from './AuthenticationForm'
import { H1Large, H1S, Text1L, LinkB } from '../../Typography'
import MintedTokens from './MintedTokens'
import TweetForm from './TweetForm'
import Hr from '../../molecules/Hr'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { useIsFinished } from 'src/fixtures/_pages/incubator/hooks'
import { SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'
import GitHubLink from './GitHubLink'
import { Button } from '../../molecules/Button'
import Link from 'next/link'
import { useState } from 'react'

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 115px;
  padding-top: 90px;
  height: 535px;
  margin-bottom: 84px;
`

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`

const LogoContainer = styled.div`
  img,
  svg {
    width: 72px;
    height: auto;
  }
`

const ErrorScreenContainer = styled.div`
  max-width: 560px;
  margin: 0 auto;
  grid-column: 1/-1;
  display: flex;
  flex-direction: column;
`

const ErrorLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 80px;
  align-items: center;
`

type ErrorScreenProps = {
  metrics?: string
  onIsWrongChange: React.Dispatch<React.SetStateAction<boolean>>
}

const ErrorScreen = ({ onIsWrongChange }: ErrorScreenProps) => {
  return (
    <ErrorScreenContainer>
      <H1S style={{ color: '#FF3815' }}>Oops! Something went wrong...</H1S>
      <Text1L style={{ paddingTop: '1.5em' }}>
        Ensure the URL you submitted is correct. Try Again or Go back to homepage.
      </Text1L>
      <ErrorLinkContainer>
        <Link href="/incubator">
          <LinkB>Homepage</LinkB>
        </Link>
        <Button onClick={() => onIsWrongChange(false)}>Try again</Button>
        <LinkB href="mailto:hi@devprotocol.xyz">Contact us</LinkB>
      </ErrorLinkContainer>
    </ErrorScreenContainer>
  )
}

type AuthenticationProps = {
  onStateChange: SetOnboardingPageStatus
  project: Incubator
  metrics?: string
  onMetricsCreated: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Authentication = ({ onStateChange, project, metrics, onMetricsCreated }: AuthenticationProps) => {
  const { data: isSucces } = useIsFinished(project.property?.address)
  const [isWrong, setIsWrong] = useState(true)

  return (
    <DetailsContainer>
      {!isWrong && (
        <div>
          <SpaceBetween style={{ paddingBottom: '70px' }}>
            <Contact>
              <H1Large>{project.name}</H1Large>
              <GitHubLink project={project} />
            </Contact>
            {project.property?.avatar?.url && (
              <LogoContainer>
                <img src={project.property?.avatar?.url} />
              </LogoContainer>
            )}
          </SpaceBetween>
          <Hr color="#CCCCCC" />
          <MintedTokens project={project} isSucces={isSucces} />
        </div>
      )}

      {isWrong && <ErrorScreen onIsWrongChange={setIsWrong} />}

      {!metrics && !isWrong && (
        <AuthenticationForm
          project={project}
          onStateChange={onStateChange}
          onMetricsCreated={onMetricsCreated}
          onIsWrongChange={setIsWrong}
        />
      )}

      {metrics && !isWrong && (
        <TweetForm
          project={project}
          metricsAddress={metrics}
          onStateChange={onStateChange}
          onIsWrongChange={setIsWrong}
        />
      )}
    </DetailsContainer>
  )
}

export default Authentication

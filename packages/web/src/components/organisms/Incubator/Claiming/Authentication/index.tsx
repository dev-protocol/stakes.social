import React from 'react'
import styled from 'styled-components'
import AuthenticationForm from './AuthenticationForm'
import { H1Large } from '../../Typography'
import MintedTokens from './MintedTokens'
import TweetForm from './TweetForm'
import Hr from '../../molecules/Hr'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { useIsFinished } from 'src/fixtures/_pages/incubator/hooks'
import { SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'
import GitHubLink from './GitHubLink'

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

type AuthenticationProps = {
  onStateChange: SetOnboardingPageStatus
  project: Incubator
  metrics?: string
  onMetricsCreated: React.Dispatch<React.SetStateAction<string | undefined>>
}

const Authentication = ({ onStateChange, project, metrics, onMetricsCreated }: AuthenticationProps) => {
  const { data: isSucces } = useIsFinished(project.property?.address)

  return (
    <DetailsContainer>
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

      {!metrics && (
        <AuthenticationForm project={project} onStateChange={onStateChange} onMetricsCreated={onMetricsCreated} />
      )}

      {metrics && <TweetForm project={project} metricsAddress={metrics} onStateChange={onStateChange} />}
    </DetailsContainer>
  )
}

export default Authentication

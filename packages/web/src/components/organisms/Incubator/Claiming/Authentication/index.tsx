import React from 'react'
import styled from 'styled-components'
import AuthenticationForm from './AuthenticationForm'
import { LinkB, H1Large } from '../../Typography'
import MintedTokens from './MintedTokens'
import TweetForm from './TweetForm'
import Hr from '../../molecules/Hr'

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
  onStateChange: React.Dispatch<React.SetStateAction<string>>
  progress: number
  project: {
    name: string
    address: string
    avatar: {
      url: string
    }
    description: string
    links: {
      github?: string
      website?: string
      twitter?: string
    }
  }
}

const Authentication = ({ onStateChange, progress, project }: AuthenticationProps) => {
  // FIXME: Need content in hook
  const ticker = 'SIGP'
  const githubUrl = 'sigp/lighthouse'

  return (
    <DetailsContainer>
      <div>
        <SpaceBetween style={{ paddingBottom: '70px' }}>
          <Contact>
            <H1Large>{project.name}</H1Large>
            {project.links?.github && (
              <div style={{ display: 'flex', paddingTop: '11px' }}>
                <div style={{ marginRight: '5px', width: '24px', height: '24px' }}>
                  <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111071/github_rg8ngo.png" />
                </div>
                <LinkB href={project.links.github} rel="noopener noreferrer" target="_blank">
                  {githubUrl}
                </LinkB>
              </div>
            )}
          </Contact>
          {project.avatar?.url && (
            <LogoContainer>
              <img src={project.avatar?.url} />
            </LogoContainer>
          )}
        </SpaceBetween>
        <Hr color="#CCCCCC" />
        <MintedTokens address={project.address} ticker={ticker} />
      </div>

      {progress === 1 && <AuthenticationForm onStateChange={onStateChange} />}

      {progress === 2 && <TweetForm projectName={project.name} onStateChange={onStateChange} />}
    </DetailsContainer>
  )
}

export default Authentication

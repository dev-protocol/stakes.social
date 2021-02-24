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
  margin-bottom: 159px;
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
}

const Authentication = ({ onStateChange, progress }: AuthenticationProps) => {
  const githubUrl = 'sigp/lighthouse'
  const logo = 'https://res.cloudinary.com/haas-storage/image/upload/v1614068316/sigma_2x_aibcyi.png'
  const name = 'Sigma'

  return (
    <DetailsContainer>
      <div>
        <SpaceBetween style={{ paddingBottom: '70px' }}>
          <Contact>
            <H1Large>{name}</H1Large>
            <div style={{ display: 'flex', paddingTop: '11px' }}>
              <div style={{ marginRight: '5px', width: '24px', height: '24px' }}>
                <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111071/github_rg8ngo.png" />
              </div>
              <LinkB>{githubUrl}</LinkB>
            </div>
          </Contact>

          <LogoContainer>
            <img src={logo} />
          </LogoContainer>
        </SpaceBetween>
        <Hr color="#CCCCCC" />
        <MintedTokens />
      </div>

      {progress === 1 && <AuthenticationForm onStateChange={onStateChange} />}

      {progress === 2 && <TweetForm onStateChange={onStateChange} />}
    </DetailsContainer>
  )
}

export default Authentication

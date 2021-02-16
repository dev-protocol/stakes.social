import React from 'react'
import styled from 'styled-components'
import AuthenticationForm from './AuthenticationForm'
import { Span, LinkB } from '../../Typography'
import MintedTokens from './MintedTokens'

const DetailsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5em;
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
}

const Authentication = ({ onStateChange }: AuthenticationProps) => {
  const githubUrl = 'sigp/lighthouse'
  const logo = 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png'
  const name = 'Sigma'

  return (
    <DetailsContainer>
      <div>
        <SpaceBetween style={{ paddingBottom: '4.5em' }}>
          <Contact>
            <Span fontSize="40px" fontWeight="bold">
              {name}
            </Span>
            <div style={{ display: 'flex' }}>
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
        <hr color="#CCCCCC" />
        <MintedTokens />
      </div>

      <AuthenticationForm onStateChange={onStateChange} />
    </DetailsContainer>
  )
}

export default Authentication

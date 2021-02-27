import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { useClipboard } from 'use-clipboard-copy'

import { H1S, Text1M, Text2M } from '../../Typography'
import { AnimationContainer, Container, DescriptionContainer, BoardingNavigation } from '../../molecules/Onboarding'
import { GithubIcon } from '../../Icons'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
  projectAddress: string
}

const LinkWithIcon = styled.button`
  display: flex;
  align-self: flex-end;
  align-items: center;
  cursor: pointer;
  width: fit-content;
  padding-left: 0;
  padding-right: 0;

  border: none;
  background: none;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};

  abbr {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  }

  img,
  svg {
    margin-right: 5px;
  }
`

export const CopyLink = styled(Text2M)`
  height: fit-content;
  cursor: pointer;
  color: black;
  border-bottom: 1px solid black;
  max-width: fit-content;

  :hover {
    color: #5b8bf5;
    border-bottom: 1px solid #5b8bf5;
  }
`

const MarkdownConatiner = styled.div`
  margin-right: 5px;
  p {
    margin: 0;
  }
`

export const CopyBadge = ({ propertyAddress }: { propertyAddress: string }) => {
  const badge = `[![Stake to support us](https://badge.devprotocol.xyz/${propertyAddress}/descriptive)](https://stakes.social/${propertyAddress})`
  const { copy } = useClipboard({
    copiedTimeout: 1000
  })
  const handleCopy = () => {
    copy(badge)
  }

  return (
    <LinkWithIcon style={{ marginTop: '1.5em' }} onClick={handleCopy}>
      <MarkdownConatiner>
        <ReactMarkdown>{badge}</ReactMarkdown>
      </MarkdownConatiner>
      <CopyLink>Copy badge</CopyLink>
    </LinkWithIcon>
  )
}

const IconContainer = styled.div`
  svg {
    width: 320px;
    height: auto;
  }
`

const BuildCommunity = ({ onActivePageChange, projectAddress }: PostOnboardType) => {
  return (
    <Container>
      <AnimationContainer>
        <IconContainer>
          <GithubIcon />
        </IconContainer>
      </AnimationContainer>
      <DescriptionContainer>
        <H1S>Build a community to stake DEV tokens for you</H1S>
        <Text1M style={{ paddingTop: '1.5em' }}>
          The most successful projects build a community of Patrons to stake DEV tokens for them. Add the DEV badge to
          your Github so users know they can earn money by supporting your project!
        </Text1M>
        <CopyBadge propertyAddress={projectAddress} />
        <BoardingNavigation
          backwardCallback={() => onActivePageChange(4)}
          forwardCallback={() => onActivePageChange(1)}
        />
      </DescriptionContainer>
    </Container>
  )
}

export default BuildCommunity

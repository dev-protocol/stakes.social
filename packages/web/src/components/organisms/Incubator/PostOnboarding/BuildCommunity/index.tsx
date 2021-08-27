import React from 'react'
import styled from 'styled-components'
import ReactMarkdown from 'react-markdown'
import { useClipboard } from 'use-clipboard-copy'

import { H1S, Text1M, Text2M, LinkB } from '../../Typography'
import { AnimationContainer, Container, DescriptionContainer } from '../../molecules/Onboarding'
import { GithubIcon } from '../../Icons'
import Link from 'next/link'
import { Button } from '../../molecules/Button'

type PostOnboardType = {
  onActivePageChange: React.Dispatch<React.SetStateAction<number>>
  projectAddress: string
  isOverview?: boolean
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

export const NextButtonContainer = styled.div`
  padding-bottom: 1em;
  width: 100%;
  height: fit-content;
  display: flex;
  grid-area: navigation;
  justify-content: space-between;
  align-items: center;
`

const BuildCommunity = ({ onActivePageChange, projectAddress, isOverview }: PostOnboardType) => {
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
        <div
          style={{ display: 'flex', flexGrow: 1, width: '100%', flexDirection: 'column', justifyContent: 'flex-end' }}
        >
          <NextButtonContainer style={{ justifyContent: 'space-between' }}>
            <LinkB onClick={() => onActivePageChange(4)}>Back</LinkB>
            {!isOverview && (
              <Link href="/[propertyAddress]" as={`/${projectAddress}`}>
                <Button>Next</Button>
              </Link>
            )}
          </NextButtonContainer>
        </div>
      </DescriptionContainer>
    </Container>
  )
}

export default BuildCommunity

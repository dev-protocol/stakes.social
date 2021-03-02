import React from 'react'
import styled from 'styled-components'
import Confetti from 'react-confetti'

import useWindowDimensions from 'src/fixtures/utility/useWindowDimensions'
import { LinkB, H1Large, Text1L } from '../../Typography'
import { Button } from '../../molecules/Button'
import MintedTokens from '../Authentication/MintedTokens'
import Hr from '../../molecules/Hr'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'
import GitHubLink from '../Authentication/GitHubLink'
import Link from 'next/link'

const SuccessMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailsContainer = styled.div`
  display: grid;
  padding-top: 120px;
  grid-template-columns: 1fr 1fr;
  column-gap: 120px;
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

type ClaimSuccesfulProps = {
  onStateChange: SetOnboardingPageStatus
  project: Incubator
}

const ClaimSuccesful = ({ onStateChange, project }: ClaimSuccesfulProps) => {
  const { width, height } = useWindowDimensions()

  return (
    <>
      <DetailsContainer>
        <div>
          <SpaceBetween style={{ paddingBottom: '70px' }}>
            <Contact>
              <H1Large>{project.property?.name}</H1Large>
              <GitHubLink project={project} />
            </Contact>
            {project.property?.avatar?.url && (
              <LogoContainer>
                <img src={project.property?.avatar?.url} />
              </LogoContainer>
            )}
          </SpaceBetween>
          <Hr color="#CCCCCC" />
          {project.property?.address && <MintedTokens isSucces={true} project={project} />}
        </div>
        <SuccessMessageContainer>
          <H1Large color="#1FED33">Success!</H1Large>
          <Text1L style={{ paddingTop: '40px' }}>
            Congratulations! {name} has sucessfully joined Stakes Social. The Incubator funding has been sent to your
            Metamask wallet. Please continue to the next steps to learn how to maximize your experience on Stakes
            Social.
          </Text1L>
          <SpaceBetween style={{ paddingTop: '48px', alignItems: 'center' }}>
            <div style={{ display: 'flex', height: 'fit-content' }}>
              <LinkB
                target="_blank"
                rel="noopener noreferrer"
                href={`https://etherscan.io/address/${project.property?.address}`}
              >
                Receipt
              </LinkB>
              <div style={{ paddingRight: '1em', marginRight: '1em', borderRight: '1px solid black' }} />
              <Link href="/[propertyAddress]" as={`/${project.property?.address}`}>
                <LinkB>Stakes.Social</LinkB>
              </Link>
            </div>
            <Button onClick={() => onStateChange('whatsnext')} style={{ width: '168px', height: '48px' }}>
              Next steps
            </Button>
          </SpaceBetween>
        </SuccessMessageContainer>
      </DetailsContainer>
      <Confetti width={width - 20} height={height} recycle={false} />
    </>
  )
}

export default ClaimSuccesful

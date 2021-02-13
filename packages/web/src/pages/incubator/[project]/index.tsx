import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import * as lorem from 'lorem-ipsum'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
// import { getPath } from 'src/fixtures/utility/route'
// import { useRouter } from 'next/router'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import DevCurrencySymbol from 'src/components/organisms/Incubator/molecules/DevCurrency'
import Hr from 'src/components/organisms/Incubator/molecules/Hr'
import TimelineSection from 'src/components/organisms/Incubator/Timeline'
import TopArrow from 'src/components/organisms/Incubator/molecules/TopArrow'
import DownloadMetamaskAnimation from 'src/components/organisms/Incubator/molecules/Animations/MetaMaskDownload'

const LABEL_PLACEHOLDERS = ['Crypto OSS', 'Women that Code']

const ipsum = new lorem.LoremIpsum({
  sentencesPerParagraph: { min: 1, max: 3 },
  wordsPerSentence: { min: 6, max: 10 }
})

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`

const BackArrowContainer = styled.div`
  display: flex;
  padding: 1em 0 3em 0;

  > svg {
    cursor: pointer;
  }
`

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
const LinkB = styled.a`
  text-decoration: none;

  padding: 2px;
  color: black;
  border-bottom: 1px solid black;
  max-width: fit-content;

  :hover {
    color: #5b8bf5;
    border-bottom: 1px solid #5b8bf5;
  }
`

const SocialMediaContainer = styled.div`
  display: flex;
`

const IconContainer = styled.div`
  cursor: pointer;
  padding: 7.5px;

  > a {
    text-decoration: none;
  }
`

const LogoContainer = styled.div`
  img,
  svg {
    width: 72px;
    height: auto;
  }
`

const FundingContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1em;
  width: 100%;
`

const DevCurrencyContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 28px;
    height: auto;
  }
`

const LabelContainer = styled.div`
  display: flex;
  padding-top: 3em;

  > div {
    margin-right: 15px;
  }
`

const FilterOption = styled.div`
  padding: 10px 25px;
  border-radius: 24px;
  border: 1px solid #999999;
  color: #999999;
  font-size: 20px;
`

type ProjectDetailsProps = {
  website: string
  twitter: string
  github: string
  logo: string
  fundingDEV: string
  name: string
  fundingUSD: string
}

const ProjectDetails = ({ fundingDEV, fundingUSD, github, logo, twitter, website, name }: ProjectDetailsProps) => {
  return (
    <DetailsContainer>
      <div>
        <SpaceBetween style={{ paddingBottom: '3em' }}>
          <Contact>
            <Span fontSize="40px" fontWeight="bold">
              {name}
            </Span>
            <LinkB>{website}</LinkB>
            <SocialMediaContainer>
              <IconContainer style={{ paddingLeft: 0 }}>
                <a target="_blank" rel="noopener noreferrer" href={twitter}>
                  <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111072/twitter_kggvre.png" />
                </a>
              </IconContainer>
              <IconContainer>
                <a target="_blank" rel="noopener noreferrer" href={github}>
                  <img src="https://res.cloudinary.com/haas-storage/image/upload/v1613111071/github_rg8ngo.png" />
                </a>
              </IconContainer>
            </SocialMediaContainer>
          </Contact>
          <LogoContainer>
            <img src={logo} />
          </LogoContainer>
        </SpaceBetween>
        <hr color="#CCCCCC" />
        <SpaceBetween style={{ alignItems: 'center' }}>
          <FundingContainer>
            <Span fontSize="14px" color="#CCCCCC">
              Funding received
            </Span>
            <SpaceBetween>
              <DevCurrencyContainer>
                <DevCurrencySymbol />
                <Span style={{ marginLeft: '5px', transform: 'translateY(-2px)' }} fontWeight="bold" fontSize="32px">
                  {fundingDEV} DEV
                </Span>
              </DevCurrencyContainer>
              <Button>Claim</Button>
            </SpaceBetween>

            <Span fontSize="14px" color="#999999">
              $ {fundingUSD} USD
            </Span>
          </FundingContainer>
        </SpaceBetween>
      </div>

      <DescriptionContainer>
        <Span fontSize="20px">{ipsum.generateSentences(9)}</Span>
        <LabelContainer>
          {LABEL_PLACEHOLDERS.map((label, index) => {
            return <FilterOption key={index}>{label}</FilterOption>
          })}
        </LabelContainer>
      </DescriptionContainer>
    </DetailsContainer>
  )
}

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const OnboardSwitchContainer = styled.div`
  display: flex;
  padding: 10px;
`

const OnboardEntry = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: 20px;
  color: ${props => (props?.isActive ? '#00D0FD' : 'black')};

  padding-bottom: ${props => (!props.isActive ? '2px' : 'none')};
  border-bottom: ${props => (!props.isActive ? '1px solid black' : 'none')};
`

const OnboardSwitch = () => {
  const [isOnboarding, setIsOnboarding] = useState(true)
  return (
    <OnboardSwitchContainer>
      <OnboardEntry onClick={() => setIsOnboarding(true)} isActive={isOnboarding}>
        Onboarding
      </OnboardEntry>
      <div style={{ paddingRight: '3em', marginRight: '3em', borderRight: '1px solid black' }} />
      <OnboardEntry onClick={() => setIsOnboarding(false)} isActive={!isOnboarding}>
        Post-Onboarding
      </OnboardEntry>
    </OnboardSwitchContainer>
  )
}

const TimelineContainer = styled.div`
  display: flex;
`

const DownloadMetamaskContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1em 3em;

  padding-top: 2em;
`

const DownloadMetamaskDescription = styled.div`
  display: flex;
  flex-direction: column;
`

const DownloadMetamask = () => {
  return (
    <DownloadMetamaskContainer>
      <div style={{ width: '550px', height: '460px' }}>
        <DownloadMetamaskAnimation />
      </div>
      <DownloadMetamaskDescription>
        <Span style={{ paddingTop: '3em' }} fontWeight="bold" fontSize="24px">
          Download MetaMask
        </Span>
        <Span style={{ paddingTop: '3em' }} fontSize="16px">
          MetaMask is a blockchain wallet used to interact with the Ethereum blockchain. It allows users to store and
          manage account keys, broadcast transactions, send and receive Ethereum-based cryptocurrencies and tokens, and
          securely connect to decentralized applications through a compatible web browser or the mobile app's built-in
          browser.
        </Span>
        <LinkB style={{ paddingTop: '4em' }}>Download MetaMask Browser Extension for Chrome</LinkB>
      </DownloadMetamaskDescription>
    </DownloadMetamaskContainer>
  )
}

const OnboardingSection = () => {
  const [activePart] = useState(1)

  return (
    <>
      <SpaceBetween style={{ paddingTop: '1em' }}>
        <Span fontSize="20px">How to get your reward?</Span>
        <OnboardSwitch />
      </SpaceBetween>
      <TimelineContainer style={{ alignSelf: 'center' }}>
        <TimelineSection isFirst={true} part={1} currentPart={activePart} />
        <TimelineSection part={2} currentPart={activePart} />
        <TimelineSection part={3} currentPart={activePart} />
        <TimelineSection part={4} currentPart={activePart} />
        <TimelineSection isLast={true} part={5} currentPart={activePart} />
      </TimelineContainer>
      {activePart === 1 && <DownloadMetamask />}
    </>
  )
}

const OnboardingPage = () => {
  // const [, project] = getPath(useRouter().asPath)
  // TODO: Fetch data from strapi based on project
  const { name, fundingDEV, fundingUSD, github, logo, twitter, website } = {
    name: 'Sigma',
    website: 'sigmaprime.io',
    twitter: '',
    github: '',
    fundingUSD: '26,000',
    fundingDEV: '71,000',
    logo: 'https://res.cloudinary.com/haas-storage/image/upload/v1613044939/sigma_tye6kg.png'
  }
  return (
    <>
      <IncubatorHeader />
      <Container style={{ paddingBottom: '6em' }}>
        <BackArrowContainer>
          <Link href="/incubator" as="/incubator" passHref>
            <div style={{ cursor: 'pointer' }}>
              <BackArrow />
            </div>
          </Link>
        </BackArrowContainer>
        <ProjectDetails
          name={name}
          fundingDEV={fundingDEV}
          fundingUSD={fundingUSD}
          github={github}
          logo={logo}
          twitter={twitter}
          website={website}
        />
      </Container>

      <Container>
        <Hr />
        <OnboardingSection />
      </Container>

      <Footer />
    </>
  )
}

export default OnboardingPage

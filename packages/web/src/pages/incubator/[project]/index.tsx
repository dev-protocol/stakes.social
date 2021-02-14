import React, { useState } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import * as lorem from 'lorem-ipsum'
import { Form } from 'antd'

import { Span } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
// import { getPath } from 'src/fixtures/utility/route'
// import { useRouter } from 'next/router'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import DevCurrencySymbol, { DecCurrencySmall } from 'src/components/organisms/Incubator/molecules/DevCurrency'
import Hr from 'src/components/organisms/Incubator/molecules/Hr'
import TimelineSection from 'src/components/organisms/Incubator/Timeline'
import TopArrow from 'src/components/organisms/Incubator/molecules/TopArrow'
import DownloadMetamaskAnimation from 'src/components/organisms/Incubator/Onboarding/DownloadMetamask/Animations/'
import DownloadMetamask from 'src/components/organisms/Incubator/Onboarding/DownloadMetamask'
import { LoadingPlaceholder, InfoIcon } from 'src/components/organisms/Incubator/Icons'
import { Input } from 'src/components/organisms/Incubator/Form'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'

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
  onStateChange: React.Dispatch<React.SetStateAction<string>>
  website: string
  twitter: string
  github: string
  logo: string
  fundingDEV: string
  name: string
  fundingUSD: string
}

const MintedTokensContainer = styled.div`
  padding-top: 1em;
  display: flex;
  flex-direction: column;

  > div {
    padding-bottom: 0.5em;
  }

`

const InfoIconContainer = styled.div`
  cursor: pointer;
  margin-left: 2px;
  transform: translateY(-2.5px);
`

const MintedTokens = () => {
  const { ticker } = { ticker: 'SIGP' }
  return (
    <MintedTokensContainer>
      <SpaceBetween>
        <div style={{ display: 'flex' }}>
          <Span fontSize="16px">{ticker} tokens Minted</Span>
          <InfoIconContainer>
            <InfoIcon fill={"#5B8BF5"} />
          </InfoIconContainer>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-1px)' }}>
            <DecCurrencySmall />
          </div>
          <Span fontWeight="bold" fontSize="16px">
            10,000,000 {ticker}
          </Span>
        </div>
      </SpaceBetween>
      <SpaceBetween>
        <div style={{ display: 'flex' }}>
          <Span fontSize="16px">Dev Protocol Treasury Fee</Span>
          <InfoIconContainer>
            <InfoIcon fill={"#D500E6"} />
          </InfoIconContainer>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-1px)' }}>
            <DecCurrencySmall />
          </div>
          <Span fontWeight="bold" fontSize="16px">
            500,000 {ticker}
          </Span>
        </div>
      </SpaceBetween>
      <SpaceBetween>
        <Span fontSize="16px">You'll receive</Span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-1px)' }}>
            <DecCurrencySmall />
          </div>
          <Span fontWeight="bold" fontSize="16px">
            9,500,000 {ticker}
          </Span>
        </div>
      </SpaceBetween>
      <SpaceBetween>
        <Span fontSize="16px">Funding received</Span>
        <Span fontWeight="bold" fontSize="16px">$ 20,000</Span>
      </SpaceBetween>

    </MintedTokensContainer>
  )
}

const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  grid-gap: 1rem;
`

const OurDocsLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #5B8BF5;
  padding-bottom: 1px;
  border-bottom: 1px solid #5B8BF5;

  :hover {
    color: #5B8BF5;
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

const AuthenticationForm = ({ onStateChange }: AuthenticationProps) => {

  const onSubmit = (data: any) => {
    console.log('data: ', data)
    onStateChange('loading')
  }

  return (
    <AuthenticationContainer>
      <Span fontSize="40px" fontWeight="bold">
        Authentication
      </Span>
      <Span style={{ paddingTop: '3em' }} fontSize="14px">Repository’s Personal Access Token</Span>
      <FormContainer style={{ paddingTop: '0.4em' }}>
        <Form initialValues={{ remember: true }} onFinish={onSubmit}>
          <div style={{ display: 'grid', gridGap: '1.5em' }}>
            <div>
              <Form.Item
                noStyle
                name="personalAccessToken"
                rules={[{ required: true, message: 'Please input PAT.' }]}
                key="personalAccessToken"
              >
                <Input value="" name="personalAccessToken" />
              </Form.Item>
            </div>

            <Span fontSize="14px" color="#5B8BF5">
              The Khaos Oracle confidentially authenticates your Github Personal Access Token.
              Please see
              <OurDocsLink rel="noopener noreferrer" target="_blank" href="https://github.com/dev-protocol/khaos">
                {' '}our docs
              </OurDocsLink> for more details.
          </Span>
          </div>

          <div style={{ paddingTop: '2.5em' }}>
            <SpaceBetween style={{ alignItems: 'center' }}>
              <div style={{ height: 'fit-content' }}>
                <LinkB
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://github.com/settings/tokens/new" >
                  Create a PAT
                </LinkB>
              </div>

              <Button type="submit">Submit</Button>
            </SpaceBetween>

          </div>
        </Form>
      </FormContainer>

    </AuthenticationContainer>
  )
}

const ProjectDetails = ({ fundingDEV, fundingUSD, github, logo, twitter, website, name, onStateChange }: ProjectDetailsProps) => {
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
              <Button onClick={() => onStateChange('authentication')}>Claim</Button>
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

const AuthenticateLoadingContainer = styled.div`
  display: grid;
  padding-top: 3em;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
`

const LoadingContainer = styled.div`
  padding-top: 2em;
  width: 336px;
  height: 168px;
`

const LinkWithIcon = styled.div`
  display: flex;
  align-items: center;

  img,
  svg {
    margin-right: 5px;
  }
`

const AuthenticateLoading = () => {
  return (
    <AuthenticateLoadingContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingContainer>
          <LoadingPlaceholder />
        </LoadingContainer>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span fontSize="40px" fontWeight="bold">One moment, please...</Span>
        <Span style={{ paddingTop: "2em" }} fontSize="20px">
          Authenticating your ownership of the designated Github repository.
          This could take 2 minutes. Please add the following tokens to your wallet by clicking the link below.
        </Span>
        <SpaceBetween style={{ paddingTop: '3em' }}>
          <LinkWithIcon>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>DEV on MetaMask</LinkB>
          </LinkWithIcon>
          <LinkWithIcon>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>SIG on MetaMask</LinkB>
          </LinkWithIcon>
        </SpaceBetween>
      </div>
    </AuthenticateLoadingContainer>
  )
}

const OnboardingSection = () => {
  const [activePart, setActivePart] = useState(1)

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
      {activePart === 1 && <DownloadMetamask onActivePartChange={setActivePart} />}
      {activePart === 2 && <AuthenticateLoading />}
    </>
  )
}

const OnboardingPage = () => {
  // const [, project] = getPath(useRouter().asPath)
  // TODO: Fetch data from strapi based on project

  const [currentState, setCurrentState] = useState<string>('overview')
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
          {currentState === 'overview' && (
            <Link href="/incubator" as="/incubator" passHref>
              <div style={{ cursor: 'pointer' }}>
                <BackArrow />
              </div>
            </Link>
          )}

          {currentState === 'authentication' && (
            <div onClick={() => setCurrentState('overview')} style={{ cursor: 'pointer' }}>
              <BackArrow />
            </div>
          )}

        </BackArrowContainer>
        {currentState === 'overview' && (
          <ProjectDetails
            onStateChange={setCurrentState}
            name={name}
            fundingDEV={fundingDEV}
            fundingUSD={fundingUSD}
            github={github}
            logo={logo}
            twitter={twitter}
            website={website}
          />
        )}

        {currentState === 'authentication' && (
          <Authentication onStateChange={setCurrentState} />
        )}

        {currentState === 'loading' && (
          <AuthenticateLoading />
        )}

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

import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { H1Large, Text1S, H1M, Text1L, H3Xs, ButtonM, LinkB } from 'src/components/organisms/Incubator/Typography'
import { Button } from 'src/components/organisms/Incubator/molecules/Button'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import DevCurrencySymbol from 'src/components/organisms/Incubator/molecules/DevCurrency'
import Hr from 'src/components/organisms/Incubator/molecules/Hr'
import TimelineSection from 'src/components/organisms/Incubator/Timeline'
import DownloadMetamask from 'src/components/organisms/Incubator/Onboarding/DownloadMetamask'
import AuthenticateLoading from 'src/components/organisms/Incubator/Claiming/AuthenticateLoading'
import ClaimSuccesful from 'src/components/organisms/Incubator/Claiming/ClaimSuccesful'
import WhatsNext from 'src/components/organisms/Incubator/PostOnboarding'
import Authentication from 'src/components/organisms/Incubator/Claiming/Authentication'
import PurchaseEthereum from 'src/components/organisms/Incubator/Onboarding/PurchaseEthereum'
import ConnectWallet from 'src/components/organisms/Incubator/Onboarding/ConnectWallet'
import CopyPat from 'src/components/organisms/Incubator/Onboarding/CopyPAT'
import SubmitTransaction from 'src/components/organisms/Incubator/Onboarding/SubmitTransaction'
import { TwitterBlackWhite, GithubIcon } from 'src/components/organisms/Incubator/Icons'
import { useGetIncubators } from 'src/fixtures/dev-for-apps/hooks'
import { getPath } from 'src/fixtures/utility/route'
import LoadingAnimation from 'src/components/organisms/Incubator/Claiming/AuthenticateLoading/Animations'
import { useGetReward, useIsFinished } from 'src/fixtures/_pages/incubator/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { whenDefined } from 'src/fixtures/utility'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1128px;
`

const BackArrowContainer = styled.div`
  display: flex;
  height: 30px;

  > svg {
    cursor: pointer;
  }
`

const DetailsContainer = styled.div`
  display: grid;
  padding-top: 95px;
  grid-template-columns: 1fr 1fr;
  column-gap: 120px;
  margin-bottom: 5em;
`

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const Contact = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 54px;
`

const SocialMediaContainer = styled.div`
  display: flex;
  padding-top: 1em;
`

const IconContainer = styled.div`
  cursor: pointer;
  padding-left: 8px;
  padding-right: 8px;
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
  padding-top: 21px;
  width: 100%;
`

const DevCurrencyContainer = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 24px;
    height: auto;
  }
`

type ProjectDetailsProps = {
  onStateChange: SetOnboardingPageStatus
  claimed: boolean
  project: Incubator
}

const ProjectDetails = ({ claimed, onStateChange, project }: ProjectDetailsProps) => {
  const { inDEV, inUSD } = useGetReward(project.verifier_id)
  const fundingDEV = inDEV ? inDEV.dp(0).toNumber().toLocaleString() : 0
  const fundingUSD = inUSD ? inUSD.dp(0).toNumber().toLocaleString() : 0

  return (
    <DetailsContainer>
      <div>
        <SpaceBetween>
          <Contact>
            <H1Large>{project?.name}</H1Large>
            {project.property?.links?.website && (
              <LinkB
                target="_blank"
                rel="noopener noreferrer"
                href={project.property?.links?.website}
                style={{ paddingTop: '11px' }}
              >
                {project.property?.links?.website}
              </LinkB>
            )}

            <SocialMediaContainer>
              {project.property?.links?.twitter && (
                <IconContainer style={{ paddingLeft: 0 }}>
                  <a target="_blank" rel="noopener noreferrer" href={project.property?.links?.twitter}>
                    <TwitterBlackWhite />
                  </a>
                </IconContainer>
              )}

              {project.property?.links?.github && (
                <IconContainer>
                  <a target="_blank" rel="noopener noreferrer" href={project.property?.links?.github}>
                    <GithubIcon />
                  </a>
                </IconContainer>
              )}
            </SocialMediaContainer>
          </Contact>
          {project.property?.avatar && (
            <LogoContainer>
              <img src={project.property?.avatar?.url} />
            </LogoContainer>
          )}
        </SpaceBetween>
        <hr color="#CCCCCC" />

        <SpaceBetween style={{ alignItems: 'center' }}>
          <FundingContainer>
            <Text1S color="#CCCCCC">Funding received</Text1S>
            <SpaceBetween>
              <DevCurrencyContainer>
                <DevCurrencySymbol />
                <H1M style={{ marginLeft: '5px', transform: 'translateY(-2px)' }}>{fundingDEV} DEV</H1M>
              </DevCurrencyContainer>
              <Button disabled={claimed} onClick={() => onStateChange('onboarding')}>
                {claimed ? 'Claimed' : 'Claim'}
              </Button>
            </SpaceBetween>

            <Text1S color="#999999">$ {fundingUSD} USD</Text1S>
          </FundingContainer>
        </SpaceBetween>
      </div>
      <DescriptionContainer>
        <Text1L>{project.property?.description || 'No description available for this project.'}</Text1L>
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
  width: fit-content;
`

const OnboardEntry = styled.div<{ isActive?: boolean }>`
  cursor: pointer;
  font-size: 16px;
  width: fit-content;
  color: ${props => (props?.isActive ? '#00D0FD' : 'black')};

  padding-bottom: ${props => (!props.isActive ? '2px' : 'none')};
  border-bottom: ${props => (!props.isActive ? '1px solid black' : 'none')};
`

type OnboardSwitchType = {
  isOnboarding: boolean
  onOnboardChange: React.Dispatch<React.SetStateAction<boolean>>
}

export const OnboardSwitch = ({ isOnboarding, onOnboardChange }: OnboardSwitchType) => {
  return (
    <OnboardSwitchContainer>
      <OnboardEntry onClick={() => onOnboardChange(true)} isActive={isOnboarding}>
        <ButtonM fontSize="16px">Onboarding</ButtonM>
      </OnboardEntry>
      <div style={{ paddingRight: '1.5em', marginRight: '1.5em', borderRight: '1px solid black' }} />
      <OnboardEntry onClick={() => onOnboardChange(false)} isActive={!isOnboarding}>
        <ButtonM fontSize="16px">Post-Onboarding</ButtonM>
      </OnboardEntry>
    </OnboardSwitchContainer>
  )
}

const TimelineContainer = styled.div`
  display: flex;
`

type OnboardingSectionProps = {
  onBoardChange: React.Dispatch<React.SetStateAction<boolean>>
  isModal?: boolean
  onStateChange: SetOnboardingPageStatus
  isOnboarding: boolean
}

const OnboardingSection = ({ isModal, onStateChange, onBoardChange, isOnboarding }: OnboardingSectionProps) => {
  const [activePart, setActivePart] = useState(1)

  return (
    <>
      <SpaceBetween style={{ paddingTop: isModal ? '43px' : '64px', alignItems: 'center', paddingBottom: '1em' }}>
        <H3Xs>{'How to receive your funding?'}</H3Xs>

        <TimelineContainer style={{ alignSelf: 'center' }}>
          <TimelineSection isFirst={true} onActivePartChange={setActivePart} part={1} currentPart={activePart} />
          <TimelineSection part={2} onActivePartChange={setActivePart} currentPart={activePart} />
          <TimelineSection part={3} onActivePartChange={setActivePart} currentPart={activePart} />
          <TimelineSection part={4} onActivePartChange={setActivePart} currentPart={activePart} />
          <TimelineSection part={5} onActivePartChange={setActivePart} currentPart={activePart} isLast={true} />
        </TimelineContainer>

        {isModal ? (
          <LinkB onClick={() => onStateChange('authentication')}>Skip</LinkB>
        ) : (
          <OnboardSwitch isOnboarding={isOnboarding} onOnboardChange={onBoardChange} />
        )}
      </SpaceBetween>
      {activePart === 1 && <DownloadMetamask onActivePartChange={setActivePart} />}
      {activePart === 2 && <PurchaseEthereum onActivePartChange={setActivePart} />}
      {activePart === 3 && <ConnectWallet onActivePartChange={setActivePart} />}
      {activePart === 4 && <CopyPat onActivePartChange={setActivePart} />}
      {activePart === 5 && <SubmitTransaction onStateChange={onStateChange} onActivePartChange={setActivePart} />}
    </>
  )
}

const GatherOnboardingContentPage = () => {
  const [, , propertyAddress] = getPath(useRouter().asPath)
  const { data } = useGetIncubators()
  const project = whenDefined(data, x => x.find(y => y.property?.address === propertyAddress))

  if (!project) {
    return (
      <div style={{ display: 'flex', width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: '300px', height: 'auto' }}>
          <LoadingAnimation />
        </div>
      </div>
    )
  }

  return <OnboardingPage project={project} />
}

type OnboardingPageProps = {
  project: Incubator
}

export type OnboardingPageStatus = 'overview' | 'onboarding' | 'loading' | 'success' | 'authentication' | 'whatsnext'
export type SetOnboardingPageStatus = React.Dispatch<React.SetStateAction<OnboardingPageStatus>>

const OnboardingPage = ({ project }: OnboardingPageProps) => {
  const { data: claimed } = useIsFinished(project.property?.address)
  const [currentState, setCurrentState] = useState<OnboardingPageStatus>('overview')
  const [createdMetrics, setCreatedMetrics] = useState<string | undefined>()
  const [isOnboarding, setIsOnboarding] = useState(true)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentState])

  return (
    <div style={{ position: 'relative', display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <IncubatorHeader />
      <Container style={{ flexGrow: 1, height: currentState === 'overview' ? '600px' : '850px' }}>
        <BackArrowContainer>
          {currentState === 'overview' && (
            <Link href="/incubator" as="/incubator" passHref>
              <div style={{ cursor: 'pointer' }}>
                <BackArrow />
              </div>
            </Link>
          )}

          {((currentState === 'authentication' && !createdMetrics) || currentState === 'onboarding') && (
            <div onClick={() => setCurrentState('overview')} style={{ cursor: 'pointer' }}>
              <BackArrow />
            </div>
          )}
        </BackArrowContainer>
        {currentState === 'overview' && (
          <ProjectDetails project={project} claimed={Boolean(claimed)} onStateChange={setCurrentState} />
        )}

        {currentState === 'onboarding' && (
          <OnboardingSection
            isOnboarding={isOnboarding}
            onBoardChange={setIsOnboarding}
            onStateChange={setCurrentState}
            isModal={true}
          />
        )}

        {currentState === 'authentication' && (
          <Authentication
            project={project}
            onStateChange={setCurrentState}
            metrics={createdMetrics}
            onMetricsCreated={setCreatedMetrics}
          />
        )}

        {currentState === 'loading' && <AuthenticateLoading project={project} />}

        {currentState === 'success' && <ClaimSuccesful project={project} onStateChange={setCurrentState} />}

        {currentState === 'whatsnext' && (
          <WhatsNext project={project} isOverview={false} onBoardChange={setIsOnboarding} isOnboarding={false} />
        )}
      </Container>

      {currentState === 'overview' && isOnboarding && (
        <Container>
          <Hr />
          <OnboardingSection
            isOnboarding={isOnboarding}
            onBoardChange={setIsOnboarding}
            onStateChange={setCurrentState}
          />
        </Container>
      )}

      {currentState === 'overview' && !isOnboarding && (
        <Container>
          <Hr />
          <WhatsNext project={project} isOverview={true} isOnboarding={isOnboarding} onBoardChange={setIsOnboarding} />
        </Container>
      )}

      <Footer />
    </div>
  )
}

export default GatherOnboardingContentPage

import React from 'react'
import styled from 'styled-components'
import Countdown, { CountdownRenderProps } from 'react-countdown'

import { H3Xs, H1M, Text1L } from 'src/components/organisms/Incubator/Typography'
import { useGetEntireRewards } from 'src/fixtures/_pages/incubator/hooks'
import IncubatorAnimation from './animation'

const JumboContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 190px 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
  flex-grow: 1;
  padding-top: 140px;
  padding-bottom: 80px;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
`

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
`

const RoundRewardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;
  z-index: 1;
`

const Round = styled.div`
  display: flex;
  flex-direction: column;
`

const RewardCollected = styled.div`
  display: flex;
  flex-direction: column;
`

const Completionist = () => <H1M color="#0A0A0A">Round 1 of incubator has finished</H1M>

// Renderer callback with condition
const renderer = ({ formatted, completed }: CountdownRenderProps) => {
  if (completed) {
    return <Completionist />
  } else {
    return (
      <H1M>
        {formatted.days}d:{formatted.hours}h:{formatted.minutes}m:{formatted.seconds}s
      </H1M>
    )
  }
}

const AnimationContainer = styled.div`
  position: absolute;
  width: 620px;
  height: 620px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
`

const Announcement = styled.a`
  font-family: 'WhyteInktrap';
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  padding-top: 5px;
  text-decoration: none;
  color: #5b8bf5;
`

const Jumbo = () => {
  const { currency, reward } = useGetEntireRewards()
  const convertedFunding = reward ? reward.dp(0).toNumber().toLocaleString() : 0

  return (
    <div style={{ background: '#fafafa', zIndex: -1 }}>
      <JumboContainer>
        <AnimationContainer>
          <IncubatorAnimation />
        </AnimationContainer>
        <TitleContainer>
          <H1M>{"It's Time to Fund"}</H1M>
          <H1M>Open Source Software.</H1M>
          <Announcement href="https://docs.devprtcl.com" target="_blank" rel="noreferrer">
            Announcement
          </Announcement>
        </TitleContainer>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', zIndex: 1 }}>
          <SubTitleContainer>
            <Text1L>
              {
                "Dev Protocol's Incubator provides funding to Open source software projects tackling large problems with inadequate resources."
              }
            </Text1L>
          </SubTitleContainer>
        </div>
        <RoundRewardContainer>
          <Round>
            <H3Xs color="#999999">Round 1 ends in</H3Xs>
            <Countdown date={Date.now() + 5400000000} renderer={renderer} />
          </Round>
          <RewardCollected>
            <H3Xs style={{ alignSelf: 'flex-end' }} color="#999999">
              Total funding granted
            </H3Xs>
            <H1M>
              {currency === 'USD' && '$ '} {convertedFunding} {currency}
            </H1M>
          </RewardCollected>
        </RoundRewardContainer>
      </JumboContainer>
    </div>
  )
}

export default Jumbo

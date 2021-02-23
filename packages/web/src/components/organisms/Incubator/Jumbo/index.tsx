import React from 'react'
import styled from 'styled-components'
import Countdown, { CountdownRenderProps } from 'react-countdown'

import { Span, LinkB, H1Large, Text1Xl, H3Xs, H1M } from 'src/components/organisms/Incubator/Typography'
import { useCurrency } from 'src/fixtures/currency/hooks'

const JumboContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 111px 30px;
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
  flex-grow: 1;
  padding-top: 4em;
  padding-bottom: 3em;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const QualificationMethodologyContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 1.5em;

  > a {
    font-size: 16px;
    border-bottom: 1px solid black;
    padding-bottom: 3px;
    color: black;
    :hover {
      color: #5b8bf5;
      border-bottom: 1px solid #5b8bf5;
    }
  }
`

const RoundRewardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;
`

const Round = styled.div`
  display: flex;
  flex-direction: column;
`

const RewardCollected = styled.div`
  display: flex;
  flex-direction: column;
`

const Completionist = () => (
  <Span fontWeight="bold" fontSize="32px" color="#0A0A0A">
    Round 1 of incubator has finished
  </Span>
)

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

const Jumbo = () => {
  const { currency, toCurrency } = useCurrency()
  const convertedFunding = toCurrency(12000).dp(0).toNumber().toLocaleString()
  return (
    <JumboContainer>
      <TitleContainer>
        <H1Large>Funding the World’s</H1Large>
        <H1Large>Technological</H1Large>
        <H1Large>Infrastructure</H1Large>
      </TitleContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <SubTitleContainer>
          <Text1Xl>
            {
              "Dev Protocol's Incubator provides funding to Open source software projects tackling large problems with inadequate resources."
            }
          </Text1Xl>
        </SubTitleContainer>
        <QualificationMethodologyContainer>
          <LinkB href="https://docs.devprtcl.com" target="_blank" rel="noreferrer">
            Qualification Methodology
          </LinkB>
        </QualificationMethodologyContainer>
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
  )
}

export default Jumbo

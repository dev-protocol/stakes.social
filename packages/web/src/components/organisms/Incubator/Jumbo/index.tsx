import React from 'react'
import styled from 'styled-components'
import Countdown, { CountdownRenderProps } from 'react-countdown'

import { Span, LinkB } from 'src/components/organisms/Incubator/Typography'
import { useCurrency } from 'src/fixtures/currency/hooks'

const JumboContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6rem 8rem;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
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

  > a {
    font-size: 20px;
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
      <Span fontWeight="bold" fontSize="32px" color="#0A0A0A">
        {formatted.days}d : {formatted.hours}h : {formatted.minutes}m : {formatted.seconds}s
      </Span>
    )
  }
}

const Jumbo = () => {
  const { currency, toCurrency } = useCurrency()
  const convertedFunding = toCurrency(12000000).dp(0).toNumber().toLocaleString()
  return (
    <JumboContainer>
      <TitleContainer>
        <Span fontSize="40px" fontWeight="bold">
          Funding the World’s
        </Span>
        <Span fontSize="40px" fontWeight="bold">
          Technological
        </Span>
        <Span fontSize="40px" fontWeight="bold">
          Infrastructure
        </Span>
      </TitleContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}>
        <SubTitleContainer>
          <Span fontSize="24px">
            {
              "Dev Protocol's Incubator provides funding to Open source software projects tackling large problems with inadequate resources."
            }
          </Span>
        </SubTitleContainer>
        <QualificationMethodologyContainer>
          <LinkB href="https://docs.devprtcl.com" target="_blank" rel="noreferrer">
            Qualification Methodology
          </LinkB>
        </QualificationMethodologyContainer>
      </div>
      <RoundRewardContainer>
        <Round>
          <Span color="#999999" fontSize="20px">
            Round 1 ends in
          </Span>
          <Countdown date={Date.now() + 5400000000} renderer={renderer} />
        </Round>
        <RewardCollected>
          <Span color="#999999" fontSize="20px">
            Total rewards collected
          </Span>
          <Span fontWeight="bold" fontSize="32px" color="#0A0A0A">
            {currency === 'USD' && '$ '} {convertedFunding} {currency}
          </Span>
        </RewardCollected>
      </RoundRewardContainer>
    </JumboContainer>
  )
}

export default Jumbo

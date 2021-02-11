import React from 'react'
import styled from 'styled-components'

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

const Span = styled.span<{ fontSize: string; fontWeight?: string; color?: string }>`
  font-size: ${props => props.fontSize || 'auto'};
  font-weight: ${props => props?.fontWeight || 'auto'};
  color: ${props => props.color || 'auto'};
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
      color: black;
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

const Jumbo = () => {
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
          <Span fontSize="24px">{"Dev Protocol's Incubator provides funding to the"}</Span>
          <Span fontSize="24px">most critical Open Source projects.</Span>
        </SubTitleContainer>
        <QualificationMethodologyContainer>
          <a href="https://docs.devprtcl.com" target="_blank" rel="noreferrer">
            Qualification Methodology
          </a>
        </QualificationMethodologyContainer>
      </div>
      <RoundRewardContainer>
        <Round>
          <Span color="#999999" fontSize="20px">
            Round 1 ends in
          </Span>
          <Span fontWeight="bold" fontSize="32px" color="#0A0A0A">
            62d : 11h : 56m : 11s
          </Span>
        </Round>
        <RewardCollected>
          <Span color="#999999" fontSize="20px">
            Total rewards collected
          </Span>
          <Span fontWeight="bold" fontSize="32px" color="#0A0A0A">
            $ 12,000 USD
          </Span>
        </RewardCollected>
      </RoundRewardContainer>
    </JumboContainer>
  )
}

export default Jumbo

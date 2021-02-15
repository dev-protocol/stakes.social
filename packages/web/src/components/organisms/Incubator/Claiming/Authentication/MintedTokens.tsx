import React from 'react'
import styled from 'styled-components'
import { Span } from '../../Typography'
import { InfoIcon } from '../../Icons'
import { DecCurrencySmall } from '../../molecules/DevCurrency'

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
            <InfoIcon fill={'#5B8BF5'} />
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
            <InfoIcon fill={'#D500E6'} />
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
        <Span fontWeight="bold" fontSize="16px">
          $ 20,000
        </Span>
      </SpaceBetween>
    </MintedTokensContainer>
  )
}

export default MintedTokens

import React from 'react'
import styled from 'styled-components'
import { Span, Text2M, H1Xss } from '../../Typography'
import { InfoIcon } from '../../Icons'
import { DecCurrencySmall } from '../../molecules/DevCurrency'
import { AbstractProvider } from 'web3-core'
import { useProvider } from 'src/fixtures/wallet/hooks'

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const MintedTokensContainer = styled.div`
  padding-top: 22px;
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

type MintedTokensType = {
  isSucces?: boolean
}

const AddToMetaMask = styled.button`
  cursor: pointer;
  padding: none;
  border: none;
  background: transparent;
  padding-bottom: 4px;
  transform: translateY(-1px);
`

const MintedTokenGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr auto auto;
  column-gap: 0.5em;
  row-gap: 8px;
`

type MintedProps = {
  ticker: string
  isSucces?: boolean
  onHandleClick: () => void
}

const TotalMinted = ({ ticker, isSucces, onHandleClick }: MintedProps) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Text2M>{ticker} tokens Minted</Text2M>
        <InfoIconContainer>
          <div title="The 'shares' of your OSS project">
            <InfoIcon fill={'#5B8BF5'} />
          </div>
        </InfoIconContainer>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-3px)' }}>
          <DecCurrencySmall />
        </div>
        <H1Xss>10,000,000</H1Xss>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <H1Xss>{ticker}</H1Xss>
        {isSucces && (
          <AddToMetaMask onClick={onHandleClick}>
            <img width="16px" height="16px" src="/images/img_0.png" />
          </AddToMetaMask>
        )}
      </div>
    </>
  )
}

const TreasuryFee = ({ onHandleClick, ticker, isSucces }: MintedProps) => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Text2M>Dev Protocol Treasury Fee</Text2M>
        <InfoIconContainer>
          <div title="The amount of tokens sent to the DEV treasury">
            <InfoIcon fill={'#D500E6'} />
          </div>
        </InfoIconContainer>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-3px)' }}>
          <DecCurrencySmall />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <H1Xss style={{ width: 'fit-content', alignSelf: 'flex-end' }}>500,000</H1Xss>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <H1Xss>{ticker}</H1Xss>
        {isSucces && (
          <AddToMetaMask onClick={onHandleClick}>
            <img width="16px" height="16px" src="/images/img_0.png" />
          </AddToMetaMask>
        )}
      </div>
    </>
  )
}

const YouReceive = ({ ticker }: { ticker: string }) => {
  return (
    <>
      <Text2M>{"You'll receive"}</Text2M>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-3px)' }}>
          <DecCurrencySmall />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <H1Xss style={{ width: 'fit-content', alignSelf: 'flex-end' }}>9,500,000</H1Xss>
        </div>
      </div>
      <H1Xss>{ticker}</H1Xss>
    </>
  )
}

const FundingReceived = ({ funding }: { funding: string }) => {
  return (
    <>
      <Text2M>Funding received</Text2M>
      <SpaceBetween>
        <H1Xss style={{ marginLeft: '3.5px' }}>$</H1Xss>
        <H1Xss>{funding}</H1Xss>
      </SpaceBetween>

      <H1Xss>USD</H1Xss>
    </>
  )
}

const MintedTokens = ({ isSucces }: MintedTokensType) => {
  const { web3 } = useProvider()
  const { ticker, address } = { ticker: 'SIGP', address: '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26' }

  const TOKEN_DECIMALS = 18
  const handleAddClick = () => {
    const ethereum = web3?.currentProvider as AbstractProvider
    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded =
        typeof ethereum.request === 'function' &&
        ethereum
          .request({
            method: 'wallet_watchAsset',
            params: {
              type: 'ERC20', // Initially only supports ERC20, but eventually more!
              options: {
                address: address, // The address that the token is at.
                symbol: ticker, // A ticker symbol or shorthand, up to 5 chars.
                decimals: TOKEN_DECIMALS // The number of decimals in the token
              }
            }
          })
          .catch(e => console.log('SOMETHING HAPPENED: ', e))

      if (wasAdded) {
        console.log('Thanks for your interest!')
      } else {
        console.log('Your loss!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <MintedTokensContainer>
      <MintedTokenGrid>
        <TotalMinted isSucces={isSucces} onHandleClick={handleAddClick} ticker={ticker} />
        <TreasuryFee onHandleClick={handleAddClick} ticker={ticker} isSucces={isSucces} />
        <YouReceive ticker={ticker} />
        <FundingReceived funding="12,000" />
      </MintedTokenGrid>
    </MintedTokensContainer>
  )
}

export default MintedTokens

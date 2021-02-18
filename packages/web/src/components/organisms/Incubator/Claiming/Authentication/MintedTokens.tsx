import React from 'react'
import styled from 'styled-components'
import { Span } from '../../Typography'
import { InfoIcon } from '../../Icons'
import { DecCurrencySmall } from '../../molecules/DevCurrency'
import { AbstractProvider } from 'web3-core'
import { useProvider } from 'src/fixtures/wallet/hooks'

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
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

type MintedTokensType = {
  isSucces?: boolean
}

const AddToMetaMask = styled.button`
  cursor: pointer;
  padding: none;
  border: none;
  background: transparent;
  padding-bottom: 4px;
`

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
      <SpaceBetween>
        <div style={{ display: 'flex' }}>
          <Span fontSize="16px">{ticker} tokens Minted</Span>
          <InfoIconContainer>
            <div title="The 'shares' of your OSS project">
              <InfoIcon fill={'#5B8BF5'} />
            </div>
          </InfoIconContainer>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-1px)' }}>
            <DecCurrencySmall />
          </div>
          <Span fontWeight="bold" fontSize="16px">
            10,000,000 {ticker}
          </Span>
          {isSucces && (
            <AddToMetaMask onClick={handleAddClick}>
              <img width="16px" height="16px" src="/images/img_0.png" />
            </AddToMetaMask>
          )}
        </div>
      </SpaceBetween>
      <SpaceBetween>
        <div style={{ display: 'flex' }}>
          <Span fontSize="16px">Dev Protocol Treasury Fee</Span>
          <InfoIconContainer>
            <div title="The amount of tokens sent to the DEV treasury">
              <InfoIcon fill={'#D500E6'} />
            </div>
          </InfoIconContainer>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '16px', height: '16px', marginRight: '5px', transform: 'translateY(-1px)' }}>
            <DecCurrencySmall />
          </div>
          <Span fontWeight="bold" fontSize="16px">
            500,000 {ticker}
          </Span>
          {isSucces && (
            <AddToMetaMask onClick={handleAddClick}>
              <img width="16px" height="16px" src="/images/img_0.png" />
            </AddToMetaMask>
          )}
        </div>
      </SpaceBetween>
      <SpaceBetween>
        <Span fontSize="16px">{"You'll receive"}</Span>
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

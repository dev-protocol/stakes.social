import React from 'react'
import styled from 'styled-components'
import { Text2M, H1Xss } from '../../Typography'
import { InfoIcon } from '../../Icons'
import { DecCurrencySmall } from '../../molecules/DevCurrency'
import { AbstractProvider } from 'web3-core'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { usePropertySymbol } from 'src/fixtures/dev-kit/hooks'
import { useGetReward } from 'src/fixtures/_pages/incubator/hooks'
import { whenDefined } from 'src/fixtures/utility'

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
  project: Incubator
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
  address?: string
  isSucces?: boolean
  onHandleClick: () => void
}

const TotalMinted = ({ address, isSucces, onHandleClick }: MintedProps) => {
  const { symbol } = usePropertySymbol(address)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <Text2M>{symbol} tokens Minted</Text2M>
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
        <H1Xss>{symbol}</H1Xss>
        {isSucces && (
          <AddToMetaMask onClick={onHandleClick}>
            <img width="16px" height="16px" src="/images/img_0.png" />
          </AddToMetaMask>
        )}
      </div>
    </>
  )
}

const TreasuryFee = ({ onHandleClick, address, isSucces }: MintedProps) => {
  const { symbol } = usePropertySymbol(address)

  return (
    <>
      <div style={{ display: 'flex' }}>
        <div style={{ width: 'fit-content', display: 'flex', position: 'relative' }}>
          <Text2M>Treasury Fee</Text2M>
          <InfoIconContainer style={{ position: 'absolute', top: '0px', right: '-16px' }}>
            <div title="The amount of tokens sent to the DEV treasury">
              <InfoIcon fill={'#D500E6'} />
            </div>
          </InfoIconContainer>
        </div>
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
        <H1Xss>{symbol}</H1Xss>
        {isSucces && (
          <AddToMetaMask onClick={onHandleClick}>
            <img width="16px" height="16px" src="/images/img_0.png" />
          </AddToMetaMask>
        )}
      </div>
    </>
  )
}

const YouReceive = ({ address }: { address?: string }) => {
  const { symbol } = usePropertySymbol(address)

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
      <H1Xss>{symbol}</H1Xss>
    </>
  )
}

const FundingReceived = ({ funding }: { funding?: number }) => {
  return (
    <>
      <Text2M>Funding received</Text2M>
      <SpaceBetween>
        <H1Xss style={{ marginLeft: '3.5px' }}>$</H1Xss>
        <H1Xss>{funding ? funding.toLocaleString() : 'N/A'}</H1Xss>
      </SpaceBetween>

      <H1Xss>USD</H1Xss>
    </>
  )
}

const MintedTokens = ({ isSucces, project }: MintedTokensType) => {
  const { symbol } = usePropertySymbol(project.property?.address)
  const { reward } = useGetReward(project.verifier_id)
  const { web3 } = useProvider()
  const funding = whenDefined(reward, x => x.dp(0).toNumber())

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
                symbol, // A ticker symbol or shorthand, up to 5 chars.
                address: project.property?.address, // The address that the token is at.
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
        <TotalMinted isSucces={isSucces} onHandleClick={handleAddClick} address={project.property?.address} />
        <TreasuryFee onHandleClick={handleAddClick} address={project.property?.address} isSucces={isSucces} />
        <YouReceive address={project.property?.address} />
        <FundingReceived funding={funding} />
      </MintedTokenGrid>
    </MintedTokensContainer>
  )
}

export default MintedTokens

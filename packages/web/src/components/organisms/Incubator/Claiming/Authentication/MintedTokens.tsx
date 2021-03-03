import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Text2M, H1Xss } from '../../Typography'
import { InfoIcon } from '../../Icons'
import { DecCurrencySmall } from '../../molecules/DevCurrency'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { usePropertySymbol } from 'src/fixtures/dev-kit/hooks'
import { useGetReward } from 'src/fixtures/_pages/incubator/hooks'
import { whenDefined } from 'src/fixtures/utility'
import { createHandleAddClick } from 'src/fixtures/wallet/utility'

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
  position: absolute;
  top: 0;
  left: 175px;
  cursor: pointer;
  margin-left: 2px;
  transform: translateY(4px);
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
  onHandleClick?: () => void
}

const TotalMinted = ({ address, isSucces, onHandleClick }: MintedProps) => {
  const { symbol } = usePropertySymbol(address)

  return (
    <>
      <div style={{ position: 'relative', display: 'flex' }}>
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
      <div style={{ position: 'relative', display: 'flex' }}>
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
          <H1Xss style={{ width: 'fit-content', alignSelf: 'flex-end' }}>750,000</H1Xss>
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
          <H1Xss style={{ width: 'fit-content', alignSelf: 'flex-end' }}>9,250,000</H1Xss>
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

  const addCreatorToken = useMemo(
    () =>
      symbol &&
      web3?.currentProvider &&
      project?.property?.address &&
      createHandleAddClick({
        provider: web3.currentProvider,
        tokenAddress: project.property.address,
        tokenSymbol: symbol,
        tokenImage: project.property?.avatar?.url
      }),
    [web3?.currentProvider, project, symbol]
  )

  return (
    <MintedTokensContainer>
      <MintedTokenGrid>
        <TotalMinted
          isSucces={isSucces}
          onHandleClick={addCreatorToken ? addCreatorToken : undefined}
          address={project.property?.address}
        />
        <TreasuryFee
          onHandleClick={addCreatorToken ? addCreatorToken : undefined}
          address={project.property?.address}
          isSucces={isSucces}
        />
        <YouReceive address={project.property?.address} />
        <FundingReceived funding={funding} />
      </MintedTokenGrid>
    </MintedTokensContainer>
  )
}

export default MintedTokens

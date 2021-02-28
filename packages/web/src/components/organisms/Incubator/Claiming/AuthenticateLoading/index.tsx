import React, { useMemo } from 'react'
import styled from 'styled-components'
import { LinkB, H1S, Text1L } from '../../Typography'
import { useProvider } from 'src/fixtures/wallet/hooks'
import LoadingAnimation from './Animations'
import { usePropertySymbol } from 'src/fixtures/dev-kit/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { createHandleAddClick } from 'src/fixtures/wallet/utility'

const AuthenticateLoadingContainer = styled.div`
  display: grid;
  padding-top: 140px;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
  height: 535px;
  margin-bottom: 113px;
`

const LoadingContainer = styled.div`
  width: 400px;
  height: auto;
`

const LinkWithIcon = styled.button`
  align-items: center;

  border: none;
  background: none;

  cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};

  abbr {
    cursor: ${props => (props.disabled ? 'not-allowed' : 'auto')};
  }

  img,
  svg {
    margin-right: 5px;
  }
`

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

const AuthenticateLoading = ({ project }: { project?: Incubator }) => {
  const { web3, accountAddress } = useProvider() // accountAddress
  const { symbol } = usePropertySymbol(project?.property?.address)

  const tokenImageDev = 'https://res.cloudinary.com/haas-storage/image/upload/v1613533437/OSS_Token_qj3yrn.png'
  const tokenImageProperty = project?.property?.avatar?.url

  const addDevToken = useMemo(
    () =>
      web3?.currentProvider &&
      createHandleAddClick({
        provider: web3.currentProvider,
        tokenAddress: '0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26',
        tokenSymbol: 'DEV',
        tokenImage: tokenImageDev
      }),
    [web3?.currentProvider]
  )
  const addCreatorToken = useMemo(
    () =>
      symbol &&
      web3?.currentProvider &&
      project?.property?.address &&
      createHandleAddClick({
        provider: web3.currentProvider,
        tokenAddress: project.property.address,
        tokenSymbol: symbol,
        tokenImage: tokenImageProperty
      }),
    [web3?.currentProvider, project, symbol, tokenImageProperty]
  )

  return (
    <AuthenticateLoadingContainer>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <LoadingContainer>
          <LoadingAnimation />
        </LoadingContainer>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <H1S>One moment, please...</H1S>
        <Text1L style={{ paddingTop: '24px' }}>
          Authenticating your ownership of the designated Github repository. This could take 2 minutes. Please add the
          following tokens to your wallet by clicking the link below.
        </Text1L>
        <SpaceBetween style={{ paddingTop: '67px' }}>
          <LinkWithIcon disabled={!accountAddress} onClick={addDevToken ? addDevToken : undefined}>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>
              {accountAddress ? (
                'DEV on MetaMask'
              ) : (
                <abbr title="Please connect your wallet" style={{ textDecoration: 'none' }}>
                  DEV on MetaMask
                </abbr>
              )}
            </LinkB>
          </LinkWithIcon>
          <LinkWithIcon disabled={!accountAddress} onClick={addCreatorToken ? addCreatorToken : undefined}>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>
              {accountAddress ? (
                `${symbol} on MetaMask`
              ) : (
                <abbr title="Please connect your wallet" style={{ textDecoration: 'none' }}>
                  {symbol} on MetaMask
                </abbr>
              )}
            </LinkB>
          </LinkWithIcon>
        </SpaceBetween>
      </div>
    </AuthenticateLoadingContainer>
  )
}

export default AuthenticateLoading

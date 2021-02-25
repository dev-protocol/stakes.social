import React from 'react'
import styled from 'styled-components'
import { LinkB, H1S, Text1L } from '../../Typography'
import { AbstractProvider } from 'web3-core'
import { useProvider } from 'src/fixtures/wallet/hooks'
import LoadingAnimation from './Animations'

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
  display: flex;
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

const AuthenticateLoading = () => {
  const { web3, accountAddress } = useProvider() // accountAddress

  const tokenAddress = '0x5caf454ba92e6f2c929df14667ee360ed9fd5b26'
  const tokenSymbol = 'DEV'
  const tokenDecimals = 18
  const tokenImage = 'https://res.cloudinary.com/haas-storage/image/upload/v1613533437/OSS_Token_qj3yrn.png'
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
                address: tokenAddress, // The address that the token is at.
                symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
                decimals: tokenDecimals, // The number of decimals in the token
                image: tokenImage // A string url of the token logo
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
          <LinkWithIcon disabled={!accountAddress} onClick={handleAddClick}>
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
          <LinkWithIcon>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>
              {accountAddress ? (
                'SIG on MetaMask'
              ) : (
                <abbr title="Please connect your wallet" style={{ textDecoration: 'none' }}>
                  SIG on MetaMask
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

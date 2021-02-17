import React from 'react'
import styled from 'styled-components'
import { Span, LinkB } from '../../Typography'
import { LoadingPlaceholder } from 'src/components/organisms/Incubator/Icons'
import { AbstractProvider } from 'web3-core'
import { useProvider } from 'src/fixtures/wallet/hooks'

const AuthenticateLoadingContainer = styled.div`
  display: grid;
  padding-top: 3em;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1em;
`

const LoadingContainer = styled.div`
  padding-top: 2em;
  width: 336px;
  height: 168px;
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
          <LoadingPlaceholder />
        </LoadingContainer>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Span fontSize="40px" fontWeight="bold">
          One moment, please...
        </Span>
        <Span style={{ paddingTop: '2em' }} fontSize="20px">
          Authenticating your ownership of the designated Github repository. This could take 2 minutes. Please add the
          following tokens to your wallet by clicking the link below.
        </Span>
        <SpaceBetween style={{ paddingTop: '3em' }}>
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
            <LinkB>SIG on MetaMask</LinkB>
          </LinkWithIcon>
        </SpaceBetween>
      </div>
    </AuthenticateLoadingContainer>
  )
}

export default AuthenticateLoading

import React from 'react'
import styled from 'styled-components'
import { Span, LinkB } from '../../Typography'
import { LoadingPlaceholder } from 'src/components/organisms/Incubator/Icons'

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

const LinkWithIcon = styled.div`
  display: flex;
  align-items: center;

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
          <LinkWithIcon>
            <img width="16px" height="16px" src="/images/img_0.png" />
            <LinkB>DEV on MetaMask</LinkB>
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

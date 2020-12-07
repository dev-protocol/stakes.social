import React from 'react'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { useGetAuthorInformation } from 'src/fixtures/devprtcl/hooks'
import { WithGradient } from 'src/components/atoms/WithGradient'

const ResponsivePropertyAddressFrame = styled.div`
  margin: 1rem auto;
`

const Header = styled.h1`
  margin: 0;
  word-break: break-all;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const StyledDivider = styled.div`
  padding: 0;
  margin-left: 2px;
  margin-right: 2px;

  @media (max-width: 768px) {
    display: none;
  }
`

const ResponsiveSubheaderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const ApyContainer = styled.div`
  display: flex;
  width: 95%;
  margin-top: 10px;
  margin-bottom: 0;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: 80%;
    justify-content: flex-start;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    a {
      display: flex;
      justify-content: center;
      width: 100%;
    }
  }
`

interface Props {
  propertyAddress: string
  apy?: BigNumber
  creators?: BigNumber
}

export const PropertyHeader = ({ propertyAddress, apy, creators }: Props) => {
  const { data } = useGetPropertyAuthenticationQuery({
    variables: {
      propertyAddress
    }
  })
  const { data: dataAuthor } = useGetAuthorInformation(data?.property_authentication?.[0]?.property_meta?.author)

  return (
    <ResponsivePropertyAddressFrame>
      <Header>{`${data?.property_authentication?.[0]?.authentication_id}'s Pool` || `${propertyAddress} Pool`}</Header>
      <SubHeader>
        <ApyContainer>
          <ResponsiveSubheaderSection>
            <WithGradient>{apy?.dp(0).toNumber() || 'N/A'}%</WithGradient>
            <StyledDivider />
            <span>APY Stakers</span>
          </ResponsiveSubheaderSection>
          <StyledDivider>|</StyledDivider>
          <ResponsiveSubheaderSection>
            <WithGradient> {creators?.dp(0).toNumber() || 'N/A'}%</WithGradient>
            <StyledDivider />
            <span>APY Creators</span>
          </ResponsiveSubheaderSection>
          <StyledDivider>|</StyledDivider>
          <ResponsiveSubheaderSection>
            <WithGradient> {dataAuthor?.karma.toLocaleString() || 'N/A'}</WithGradient>
            <StyledDivider />
            <span>Karma</span>
          </ResponsiveSubheaderSection>
        </ApyContainer>
        <ButtonContainer>
          <BuyDevButton />
        </ButtonContainer>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

import React from 'react'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { Divider } from 'antd'
import { useGetAuthorInformation } from 'src/fixtures/devprtcl/hooks'

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
`

const Number = styled.span`
  background: -webkit-linear-gradient(#00c4ff, #004eff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`

const StyledDivider = styled(Divider)`
  border-left: 1px solid black;
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
        <div style={{ marginBottom: 0 }}>
          <Number>{apy?.dp(0).toNumber() || 'N/A'}%</Number> APY Stakers
          <StyledDivider type="vertical" />
          <Number> {creators?.dp(0).toNumber() || 'N/A'}%</Number> APY Creators
          <StyledDivider type="vertical" />
          <Number> {dataAuthor?.karma.toLocaleString() || 'N/A'}</Number> Karma
        </div>
        <BuyDevButton>Buy DEV</BuyDevButton>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

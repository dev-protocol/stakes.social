import React from 'react'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { Divider } from 'antd'
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
          <WithGradient>{apy?.dp(0).toNumber() || 'N/A'}%</WithGradient> APY Stakers
          <StyledDivider type="vertical" />
          <WithGradient> {creators?.dp(0).toNumber() || 'N/A'}%</WithGradient> APY Creators
          <StyledDivider type="vertical" />
          <WithGradient> {dataAuthor?.karma.toLocaleString() || 'N/A'}</WithGradient> Karma
        </div>
        <BuyDevButton />
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

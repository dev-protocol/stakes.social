import React from 'react'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'

const ResponsivePropertyAddressFrame = styled.div`
  margin: 2rem auto;
  .address {
    word-break: break-all;
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) {
    margin: 1.5rem auto;
  }
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ApyDetails = styled.span``

const BuyButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  background-color: #2f80ed;
  color: white;

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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

  return (
    <ResponsivePropertyAddressFrame>
      <div className="address">
        {`${data?.property_authentication?.[0]?.authentication_id}'s Pool` || `${propertyAddress} Pool`}
      </div>
      <SubHeader>
        <ApyDetails>
          <span>{`${apy?.dp(0).toNumber() || 'N/A'}% APY Stakers | 
          ${creators?.dp(0).toNumber() || 'N/A'}% APY Creators`}</span>
        </ApyDetails>
        <BuyButton>Buy DEV</BuyButton>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

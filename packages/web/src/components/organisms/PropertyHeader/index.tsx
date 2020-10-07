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
        <p style={{ marginBottom: 0 }}>
          <span style={{ color: '#1AC9FC' }}>{apy?.dp(0).toNumber() || 'N/A'}%</span> APY Stakers |{' '}
          <span style={{ color: '#1AC9FC' }}> {creators?.dp(0).toNumber() || 'N/A'}%</span> APY Creators
        </p>
        <BuyButton>Buy DEV</BuyButton>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

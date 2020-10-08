import React from 'react'
import styled from 'styled-components'
import { useGetPropertyAuthenticationQuery } from '@dev/graphql'
import BigNumber from 'bignumber.js'
import { BuyDevButton } from 'src/components/molecules/BuyButton'
import { Divider } from 'antd'

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
          <span style={{ color: '#1AC9FC' }}>{apy?.dp(0).toNumber() || 'N/A'}%</span> APY Stakers
          <Divider type="vertical" style={{ borderLeft: '1px solid black' }} />
          <span style={{ color: '#1AC9FC' }}> {creators?.dp(0).toNumber() || 'N/A'}%</span> APY Creators
        </p>
        <BuyDevButton>Buy DEV</BuyDevButton>
      </SubHeader>
    </ResponsivePropertyAddressFrame>
  )
}

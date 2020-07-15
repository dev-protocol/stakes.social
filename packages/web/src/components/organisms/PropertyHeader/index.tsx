import React from 'react'
import styled from 'styled-components'

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
    margin: 3rem auto;
  }
`

interface Props {
  propertyAddress: string
}

export const PropertyHeader = ({ propertyAddress }: Props) => {
  return (
    <ResponsivePropertyAddressFrame>
      <span className="heading">Property Address</span>
      <div className="address">{propertyAddress}</div>
    </ResponsivePropertyAddressFrame>
  )
}

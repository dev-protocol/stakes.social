import React from 'react'
import styled from 'styled-components'
import { Header } from '../Header'

const ResponsivePropertyFrame = styled.div`
  display: grid;
  @media (min-width: 768px) {
  }
`

const ResponsivePropertyAddressFrame = styled.div`
  max-width: 1048px;
  width: 100%;
  margin: 3rem auto;
  font-size: 0.9rem;
  color: white;
  padding: 0 1rem;
  .heading {
  }
  .address {
    font-size: 1rem;
    font-family: monospace;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }
  @media (min-width: 768px) {
    margin: 6rem auto;
  }
`

const assetsAsBackground = (address: string): string =>
  `url('//raw.githubusercontent.com/dev-protocol/assets/master/property/${address}/header.jpg')`

interface Props {
  propertyAddress: string
}

export const PropertyHeader = ({ propertyAddress }: Props) => {
  return (
    <ResponsivePropertyFrame
      style={{
        background: `${assetsAsBackground(
          propertyAddress
        )}, linear-gradient(134deg, #2f43ed 0%, #2F80ED 23%, #2faced 46%, #bed0e6 100%)`,
        backgroundSize: 'cover'
      }}
    >
      <Header colorSchema="white"></Header>
      <ResponsivePropertyAddressFrame>
        <span className="heading">Property Address</span>
        <div className="address">{propertyAddress}</div>
      </ResponsivePropertyAddressFrame>
    </ResponsivePropertyFrame>
  )
}

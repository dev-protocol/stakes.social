import * as React from 'react'
import styled from 'styled-components'

interface Props {
  propertyAddress: string
}

const CoverImage = styled.div`
  padding-top: 52.5%;
  border-radius: 6px;
`

const assetsAsBackground = (address: string): string =>
  `url('//raw.githubusercontent.com/dev-protocol/assets/main/property/${address}/header.jpg')`

export const PropertyCoverImage = ({ propertyAddress }: Props) => (
  <CoverImage
    style={{
      background: `${assetsAsBackground(
        propertyAddress
      )}, linear-gradient(134deg, #2f43ed 0%, #2F80ED 23%, #2faced 46%, #bed0e6 100%)`,
      backgroundSize: 'cover'
    }}
  ></CoverImage>
)

import React from 'react'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { CoverImageOrGradient } from 'src/components/atoms/CoverImageOrGradient'
import { usePropertyName, usePropertySymbol } from 'src/fixtures/dev-kit/hooks'
import { useGetProperty } from 'src/fixtures/dev-for-apps/hooks'

const ResponsivePropertyAddressFrame = styled.div`
  margin: 1rem auto;
  min-height: 300px;
  display: flex;
  align-items: center;
`

const RoundedCoverImageOrGradient = styled(CoverImageOrGradient)`
  border-radius: 5px;
`

const TokenName = styled.h1`
  margin: 0;
  margin-bottom: 1rem;
  word-break: break-all;
  font-size: 1.4rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`

const PropertySymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const SymbolName = styled.div`
  font-size: 2rem;
`

const TokenAddress = styled.div`
  color: grey;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 220px 1fr;
  column-gap: 50px;
`

interface Props {
  propertyAddress: string
  apy?: BigNumber
  creators?: BigNumber
}

export const PropertyHeader = ({ propertyAddress }: Props) => {
  const { name: propertyName } = usePropertyName(propertyAddress)
  const { symbol } = usePropertySymbol(propertyAddress)
  const { data: dataProperty } = useGetProperty(propertyAddress)

  return (
    <ResponsivePropertyAddressFrame>
      <HeaderContainer>
        <RoundedCoverImageOrGradient src={dataProperty?.cover_image?.url} />
        <PropertySymbolContainer>
          <TokenName>{propertyName ? `${propertyName}` : ''}</TokenName>
          <SymbolName>{`$${symbol}`}</SymbolName>
          <TokenAddress>{propertyAddress}</TokenAddress>
        </PropertySymbolContainer>
      </HeaderContainer>
    </ResponsivePropertyAddressFrame>
  )
}

import * as React from 'react'
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import styled from 'styled-components'

interface Props {
  className?: string
}

const BuyButton = styled.a`
  display: flex;
  justify-content: center;
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  ${blueGradient()}
  ${boxShahowWithOnHover()}
  &,
  :hover {
    color: white;
  }
`

export const BuyDevButton = ({ className }: Props) => (
  <BuyButton
    className={className}
    href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26&use=V2"
    rel="noreferrer"
    target="_blank"
  >
    <span style={{ color: 'white' }}>Buy DEV</span>
  </BuyButton>
)

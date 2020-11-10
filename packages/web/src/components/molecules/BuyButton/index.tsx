import * as React from 'react'
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import styled from 'styled-components'

interface Props {}

const BuyButton = styled.button<{ bgColor?: string }>`
  padding: 6px 24px;
  border-radius: 9px;
  border: none;
  color: white;
  cursor: pointer;
  ${blueGradient()}
  ${boxShahowWithOnHover()}
`

export const BuyDevButton = (_: Props) => (
  <a
    href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26"
    rel="noreferrer"
    target="_blank"
  >
    <BuyButton>Buy DEV</BuyButton>
  </a>
)

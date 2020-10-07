import * as React from 'react'
import styled from 'styled-components'

interface Props {}

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

export const BuyDevButton = (_: Props) => (
  <a
    href="https://app.uniswap.org/#/swap?outputCurrency=0x5caf454ba92e6f2c929df14667ee360ed9fd5b26"
    rel="noreferrer"
    target="_blank"
  >
    <BuyButton>Buy DEV</BuyButton>
  </a>
)

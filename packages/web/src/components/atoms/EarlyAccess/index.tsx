import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  font-size: 0.6rem;
  background: -moz-linear-gradient(top, #639fff 1%, #2187ed 100%);
  background: -webkit-linear-gradient(top, #639fff 1%, #2187ed 100%);
  background: linear-gradient(to bottom, #639fff 1%, #2187ed 100%);
  color: white;
  padding: 2px;
  text-align: center;
`

export const EarlyAccess = () => (
  <Wrap>
    <span style={{ fontSize: '16px' }}> Early Access Version </span>
  </Wrap>
)

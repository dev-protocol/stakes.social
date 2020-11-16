import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: -moz-linear-gradient(top, #639fff 1%, #2187ed 100%);
  background: -webkit-linear-gradient(top, #639fff 1%, #2187ed 100%);
  background: linear-gradient(to bottom, #639fff 1%, #2187ed 100%);
  color: white;
  padding-bottom: 2px;
  text-align: center;
  > span {
    font-size: 0.8em;
  }
`

export const EarlyAccess = () => <Wrap>Early Access Version</Wrap>

import React from 'react'
import styled from 'styled-components'

type Props = {
  onClick: () => void
}

const Btn = styled.button`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-left: 1em;
  text-transform: uppercase;
  font-size: 0.9em;
  background: none;
  color: black;
  border-radius: 12px;
  border: none;
  background-color: none;
  margin-right: 10px;
`

export const Max = ({ onClick }: Props) => {
  return <Btn onClick={onClick}>DEV</Btn>
}

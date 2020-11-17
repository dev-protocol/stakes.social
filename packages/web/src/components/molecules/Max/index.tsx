import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'

type Props = {
  onClick: () => void
}

const Btn = styled(Button)`
  display: flex;
  align-items: center;
  margin-left: 1em;
  text-transform: uppercase;
  border: 0;
  ${boxShahowWithOnHover()}
`

export const Max = ({ onClick }: Props) => {
  return (
    <Btn type="primary" size="small" onClick={onClick}>
      Max
    </Btn>
  )
}

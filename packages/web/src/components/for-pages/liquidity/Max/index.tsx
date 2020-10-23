import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

type Props = {
  onClick: () => void
}

const Btn = styled(Button)`
  margin-left: 1em;
  text-transform: uppercase;
`

export const Max = ({ onClick }: Props) => {
  return (
    <Btn type="primary" size="small" onClick={onClick}>
      Max
    </Btn>
  )
}

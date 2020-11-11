import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'

interface Props {
  className?: string
  onClickCancel: () => void
}

const Wrap = styled.div``

export const CancelForm = ({ className, onClickCancel }: Props) => {
  return (
    <Wrap className={className}>
      <p>Cancel Staking</p>
      <Button type="primary" size="large" onClick={onClickCancel}>
        Cancel
      </Button>
    </Wrap>
  )
}

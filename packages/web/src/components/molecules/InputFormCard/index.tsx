import * as React from 'react'
import { Card, Input, Row } from 'antd'
import styled from 'styled-components'

const { Search } = Input

interface Props {
  label: string
  suffix?: string
  onSubmitStake: (
    value: string,
    event?:
      | React.ChangeEvent<HTMLInputElement>
      | React.MouseEvent<HTMLElement, MouseEvent>
      | React.KeyboardEvent<HTMLInputElement>
      | undefined
  ) => void
}

const Heading = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
`

export const InputFormCard = ({ label, suffix, onSubmitStake }: Props) => {
  return (
    <Card>
      <Row>
        <Heading>{label}</Heading>
      </Row>
      <Row>
        <Search
          enterButton="Stake"
          size="large"
          onSearch={onSubmitStake}
          style={{ maxWidth: '578px' }}
          suffix={suffix}
          type="number"
        />
      </Row>
    </Card>
  )
}

import * as React from 'react'
import { Card, Input, Row } from 'antd'

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

export const InputFormCard = ({ label, suffix, onSubmitStake }: Props) => {
  return (
    <Card>
      <Row>
        <div style={{ fontSize: '24px', lineHeight: '32px', color: '#000', padding: '0 0 32px 0' }}>{label}</div>
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

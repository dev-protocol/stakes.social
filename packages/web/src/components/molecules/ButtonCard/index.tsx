import React from 'react'
import { Card, Button, Row, Col } from 'antd'
import styled from 'styled-components'

interface Props {
  label: string
  buttonLabel: string
  onClick: () => void
}

const Heading = styled.span`
  font-size: 1.4rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

export const ButtonCard = ({ label, onClick, buttonLabel }: Props) => {
  return (
    <Card>
      <Row>
        <Col flex="1 1 252px" style={{ display: 'flex', alignItems: 'center' }}>
          <Heading>{label}</Heading>
        </Col>
        <Col flex="1 1 252px">
          <Button type="primary" size="large" onClick={onClick}>
            {buttonLabel}
          </Button>
        </Col>
      </Row>
    </Card>
  )
}

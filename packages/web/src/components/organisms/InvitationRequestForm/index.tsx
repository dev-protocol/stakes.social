import React, { useState } from 'react'
import { Form, Input, Button, Result } from 'antd'
import styled from 'styled-components'
import { usePostInvitation } from 'src/fixtures/dev-invitation/hooks'

export interface Props {
  market: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
    & > *:first-child {
      text-align: right;
    }
  }
`

export const InvitationRequestForm = ({ market }: Props) => {
  const [metrics, setMetrics] = useState<boolean>(false)
  const { postInvitationHandler, isLoading } = usePostInvitation(market)
  const onFinish = async (values: any) => {
    const { asset, email, discord } = values
    const metrics = await postInvitationHandler(asset, email, discord)

    if (metrics.success) {
      setMetrics(metrics.success)
    }
  }

  return (
    <Wrap>
      <Row>
        <span>Associating Market:</span>
        <span>{market}</span>
      </Row>
      {metrics ? (
        <Result status="success" title="Successfully Invitation Request Your Asset!" subTitle="" />
      ) : (
        <Row>
          <span>Arguments:</span>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item
              name="asset"
              rules={[{ required: true, message: 'Please input asset name (e.g., your/awesome-repos)' }]}
              key="asset"
            >
              <Input placeholder="asset name" />
            </Form.Item>
            <Form.Item name="email" rules={[{ required: true, type: 'email' }]} key="email">
              <Input placeholder="email address" />
            </Form.Item>
            <Form.Item name="discord" rules={[{ required: true, type: 'string' }]} key="discord">
              <Input placeholder="discord profile name" />
            </Form.Item>
            <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
              Invitation Request
            </Button>
          </Form>
        </Row>
      )}
    </Wrap>
  )
}

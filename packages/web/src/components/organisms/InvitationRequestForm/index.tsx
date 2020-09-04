import React, { useState } from 'react'
import { Form, Input, Button, Result } from 'antd'
import styled from 'styled-components'
import { usePostInvitation } from 'src/fixtures/dev-invitation/hooks'
import TextArea from 'antd/lib/input/TextArea'

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
    grid-template-columns: 240px 1fr;
    & > *:first-child {
      text-align: right;
    }
  }
`

export const InvitationRequestForm = ({ market }: Props) => {
  const [metrics, setMetrics] = useState<boolean>(false)
  const { postInvitationHandler, isLoading } = usePostInvitation(market)
  const onFinish = async (values: any) => {
    const { asset, email, discord, name, role, url, useCase, ask } = values
    const metrics = await postInvitationHandler({
      asset,
      email,
      discord,
      market,
      name,
      role,
      url,
      useCase,
      ask
    })

    if (metrics.success) {
      setMetrics(metrics.success)
    }
  }

  return (
    <Wrap>
      {metrics ? (
        <Result status="success" title="Successfully Invitation Request Your Asset!" subTitle="" />
      ) : (
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          <Row>
            <span>Associating Market:</span>
            <p>{market}</p>
          </Row>
          <Row>
            <span>Your email:</span>
            <Form.Item name="email" rules={[{ required: true, type: 'email' }]} key="email">
              <Input placeholder="email" />
            </Form.Item>
          </Row>
          <Row>
            <span>Your name:</span>
            <Form.Item name="name" rules={[{ required: true, type: 'string' }]} key="email">
              <Input placeholder="name" />
            </Form.Item>
          </Row>
          <Row>
            <span>Your project:</span>
            <Form.Item name="asset" rules={[{ required: true, type: 'string' }]} key="asset">
              <Input placeholder="project (e.g., your/awesome-repos)" />
            </Form.Item>
          </Row>
          <Row>
            <span>Project{`'`}s use case:</span>
            <Form.Item name="useCase" rules={[{ required: true, type: 'string' }]} key="useCase">
              <TextArea placeholder="use case" />
            </Form.Item>
          </Row>
          <Row>
            <span>Your role:</span>
            <Form.Item name="role" rules={[{ required: true, type: 'string' }]} key="role">
              <Input placeholder="role" />
            </Form.Item>
          </Row>
          <Row>
            <span>Project website or social media:</span>
            <Form.Item name="url" rules={[{ required: true, type: 'string' }]} key="url">
              <Input placeholder="url" />
            </Form.Item>
          </Row>
          <Row>
            <span>
              Your <a href="https://discord.gg/WnQXqpQ">Dev Protocol Discord</a> name:
            </span>
            <Form.Item name="discord" rules={[{ required: true, type: 'string' }]} key="discord">
              <Input placeholder="discord name" />
            </Form.Item>
          </Row>
          <Row>
            <span>Is there anything else to know?:</span>
            <div>
              <Form.Item name="ask" rules={[{ type: 'string' }]} key="ask">
                <Input />
              </Form.Item>
              <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
                Submit
              </Button>
            </div>
          </Row>
        </Form>
      )}
    </Wrap>
  )
}

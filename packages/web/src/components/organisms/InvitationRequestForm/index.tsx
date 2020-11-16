import React, { useState } from 'react'
import { Form, Result } from 'antd'
import Input from 'src/components/molecules/Input'
import styled from 'styled-components'
import { usePostInvitation } from 'src/fixtures/dev-invitation/hooks'

import {
  MessageOutlined,
  UserOutlined,
  BranchesOutlined,
  CodeOutlined,
  MailOutlined,
  FontColorsOutlined,
  NotificationOutlined
} from '@ant-design/icons'

export interface Props {
  market: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: 760px;
`

const FormTitle = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1em;
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    & > *:first-child {
      text-align: left;
    }
  }
`
const Row = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    & > *:first-child {
      text-align: left;
    }
  }
`

const Span = styled.div`
  font-size: 1.2em;
  margin-top: 5px;
`

const ButtonContainer = styled.div`
  width: auto;
  align-self: flex-start;
`
const Submit = styled.button`
  padding: 10px 40px;
  border-radius: 6px;
  border: none;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  color: white;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  }
`

const TextArea = styled.textarea`
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 100%;
  padding-left: 10px;

  &:hover {
    transition: all 0.2s ease-in;
    border: 1px solid deeppink;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border: 1px solid black;
    box-shadow: 0 0 0 1px grey;
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

  const marketCaps = market.charAt(0).toUpperCase() + market.slice(1)

  return (
    <Wrap>
      {metrics ? (
        <Result status="success" title="Successfully requested verification of your Asset!" subTitle="" />
      ) : (
        <Form name="basic" style={{ padding: '0.75em' }} initialValues={{ remember: true }} onFinish={onFinish}>
          <FormTitle>
            <h2>Application</h2>
          </FormTitle>
          <Row>
            <Span>Your name:</Span>
            <Form.Item name="name" rules={[{ required: true, type: 'string' }]} key="name">
              <Input Icon={FontColorsOutlined} placeholder="name" label="name" />
            </Form.Item>
          </Row>
          <Row>
            <Span>Your email:</Span>
            <Form.Item name="email" rules={[{ required: true, type: 'email' }]} key="email">
              <Input Icon={MailOutlined} placeholder="email" label="email" />
            </Form.Item>
          </Row>
          <Row>
            <Span>Project name:</Span>
            <Form.Item name="asset" rules={[{ required: true, type: 'string' }]} key="asset">
              <Input Icon={CodeOutlined} placeholder="project (e.g., your/awesome-repos)" label="asset" />
            </Form.Item>
          </Row>
          <Row>
            <Span>Description:</Span>
            <Form.Item name="useCase" rules={[{ required: true, type: 'string' }]} key="useCase">
              <TextArea rows={4} placeholder="Our project aims to..." />
            </Form.Item>
          </Row>
          <Row>
            <Span>Your role:</Span>
            <Form.Item name="role" rules={[{ required: true, type: 'string' }]} key="role">
              <Input Icon={UserOutlined} placeholder="role" label="role" />
            </Form.Item>
          </Row>
          <Row>
            <Span>{marketCaps} repo:</Span>
            <Form.Item name="url" rules={[{ required: true, type: 'string' }]} key="url">
              <Input Icon={BranchesOutlined} placeholder="url" label="url" />
            </Form.Item>
          </Row>
          <Row>
            <div>
              <Span style={{ marginTop: 0, fontSize: '1.1em' }}>
                <a href="https://discord.gg/WnQXqpQ">Dev Protocol</a>
              </Span>
              <span style={{ fontSize: '1.1em' }}>Discord name:</span>
            </div>
            <Form.Item name="discord" rules={[{ required: true, type: 'string' }]} key="discord">
              <Input Icon={MessageOutlined} placeholder="discord name" label="discord" />
            </Form.Item>
          </Row>
          <Row>
            <Span>Additional info:</Span>
            <Form.Item name="ask" rules={[{ type: 'string' }]} key="ask">
              <Input Icon={NotificationOutlined} placeholder="I'd like to say..." label="ask" />
            </Form.Item>
          </Row>
          <Row>
            <div style={{ display: 'flex', gridColumn: '1/-1', justifyContent: 'center' }}>
              <ButtonContainer>
                <Submit type="submit" disabled={isLoading}>
                  Submit
                </Submit>
              </ButtonContainer>
            </div>
          </Row>
        </Form>
      )}
    </Wrap>
  )
}

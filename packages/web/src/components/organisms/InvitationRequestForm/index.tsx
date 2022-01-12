import React, { useState } from 'react'
import { Form, Checkbox } from 'antd'
import Input from 'src/components/molecules/Input'
import styled, { css } from 'styled-components'
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
import { blueGradient } from 'src/styles/gradient'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import SuccessLogo from 'src/components/atoms/Success'

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

const FlatRow = styled.div`
  display: flex;
`

const Span = styled.div`
  font-size: 1.2em;
  margin-top: 5px;
`

const ButtonContainer = styled.div`
  width: auto;
  align-self: flex-end;
`
const Submit = styled.button`
  padding: 10px 40px;
  border-radius: 6px;
  border: none;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  cursor: pointer;
  color: white;
  ${blueGradient()}
  ${boxShahowWithOnHover()}
  ${({ disabled }) => css`
    ${disabled &&
    css`
      background: #cccccc;
    `}
  `}
`

const TextArea = styled.textarea`
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 100%;
  padding-left: 10px;

  &:hover {
    transition: all 0.2s ease-in;
    border: 1px solid grey;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border: 1px solid black;
    box-shadow: 0 0 0 1px grey;
  }
`

const Capitalize = styled.span`
  text-transform: capitalize;
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  justify-content: center;
  align-items: center;
`

const SuccessContainer = styled.div`
  svg {
    width: 150px;
    height: auto;
  }
`

export const InvitationRequestForm = ({ market }: Props) => {
  const [metrics, setMetrics] = useState<boolean>(false)
  const [isAgreeTerms, setIsAgreeTerms] = useState<boolean>(false)
  const [isSubscribeNewsletter, setIsSubscribeNewsletter] = useState<boolean>(false)
  const { postInvitationHandler, isLoading } = usePostInvitation()
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
      ask,
      newsletter: isSubscribeNewsletter
    })

    if (metrics.success) {
      setMetrics(metrics.success)
    }
  }

  const onChangeCheckboxForTerms = () => {
    setIsAgreeTerms(!isAgreeTerms)
  }
  const onChangeCheckboxForNewsletter = () => {
    setIsSubscribeNewsletter(!isSubscribeNewsletter)
  }

  return (
    <Wrap>
      {metrics ? (
        <ResultContainer>
          <SuccessContainer>
            <SuccessLogo />
          </SuccessContainer>
          <h2 style={{ textAlign: 'center', wordBreak: 'normal' }}>
            Successfully requested verification of your project.
          </h2>
          <h3 style={{ textAlign: 'center', wordBreak: 'normal' }}>
            We kindly ask you to wait for about a week for screening process.
            <br />
            We’ll let you know the result via <span style={{ fontWeight: 'bold' }}>email</span>, so please change the
            filtering setup for your mail box to receive an email from “@devprotocol.xyz”.
          </h3>
        </ResultContainer>
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
            <Span>
              <Capitalize>{market}</Capitalize> repo:
            </Span>
            <Form.Item name="url" rules={[{ required: true, type: 'string' }]} key="url">
              <Input Icon={BranchesOutlined} placeholder="url" label="url" />
            </Form.Item>
          </Row>
          <Row>
            <div>
              <Span style={{ marginTop: 0, fontSize: '1.1em' }}>
                <a href="https://discord.gg/VwJp4KM">Dev Protocol</a>
              </Span>
              <span style={{ fontSize: '1.1em' }}>Discord username:</span>
            </div>
            <Form.Item name="discord" rules={[{ required: true, type: 'string' }]} key="discord">
              <Input Icon={MessageOutlined} placeholder="discord username" label="discord" />
            </Form.Item>
          </Row>
          <Row>
            <Span>Additional info:</Span>
            <Form.Item name="ask" rules={[{ type: 'string' }]} key="ask">
              <Input Icon={NotificationOutlined} placeholder="I'd like to say..." label="ask" />
            </Form.Item>
          </Row>
          <FlatRow>
            <Checkbox onChange={onChangeCheckboxForTerms}>
              Agreement to&nbsp;
              <a href="/terms-of-use" target="_blank" rel="noreferrer">
                terms of use
              </a>
              &nbsp;and&nbsp;
              <a
                href="https://github.com/dev-protocol/community/blob/main/CODE_OF_CONDUCT.md"
                target="_blank"
                rel="noreferrer"
              >
                code of conduct
              </a>
              .
            </Checkbox>
          </FlatRow>
          <FlatRow>
            <Checkbox onChange={onChangeCheckboxForNewsletter}>Subscribe to our Newsletter</Checkbox>
          </FlatRow>
          <Row>
            <div style={{ display: 'flex', gridColumn: '1/-1', justifyContent: 'flex-end' }}>
              <ButtonContainer>
                <Submit type="submit" disabled={isLoading || !isAgreeTerms}>
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

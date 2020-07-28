import React, { useCallback } from 'react'
import { Button, Form, Input, Col, Row, Space } from 'antd'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'
import { useGetUser, usePostUser } from 'src/fixtures/dev-for-apps/hooks'
import styled from 'styled-components'

interface Props {}

const Container = styled.div`
  display: grid;
  padding: 1rem;
  max-width: 1120px;
  margin: auto;
  grid-gap: 1rem;
`
const Section = styled.section`
  display: grid;
  padding: 1rem;
  grid-gap: 0.5rem;
`
const Title = styled.div`
  font-size: 1rem;
`
const Text = styled.div`
  font-size: 2rem;
`
const formLayout = {
  wrapperCol: { span: 22 }
}

export const ProfileUpdateForm = ({ accountAddress }: { accountAddress?: string }) => {
  const address = accountAddress || ''
  const { postUserHandler: postUser, isLoading } = usePostUser(address)
  const handleSubmitDisplayName = useCallback(
    async (name: string) => {
      postUser(name)
    },
    [postUser]
  )

  return (
    <Form {...formLayout} onFinish={({ name }) => handleSubmitDisplayName(name)}>
      <Row>
        <Col flex="1 1 252px">
          <Form.Item
            name="name"
            rules={[
              { required: true, message: 'Please input display name.' },
              () => ({
                validator() {
                  if (address !== '') {
                    return Promise.resolve()
                  }
                  return Promise.reject('Please connect to a wallet')
                }
              })
            ]}
          >
            <Input placeholder="Enter the new display name" />
          </Form.Item>
        </Col>
        <Col flex="1 1 252px">
          <Space direction="vertical" size="small">
            <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
              Sign to Save
            </Button>
          </Space>
        </Col>
      </Row>
    </Form>
  )
}

export const UserProfile = (_: Props) => {
  const { accountAddress } = useGetAccountAddress()
  const { data: user } = useGetUser(accountAddress || '')

  return (
    <Container>
      <Section>
        <Title>Your Address</Title>
        <Text>{accountAddress || '-'}</Text>
      </Section>

      <Section>
        <Title>Display name</Title>
        <Text>{user?.displayName || '(Not set)'}</Text>
      </Section>

      <Section>
        <ProfileUpdateForm accountAddress={accountAddress} />
      </Section>
    </Container>
  )
}

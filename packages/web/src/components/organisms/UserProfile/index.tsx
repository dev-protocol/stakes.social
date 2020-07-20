import React, { useCallback, useState } from 'react'
import { Button, Form, Input, Col, Row, Space } from 'antd'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { useEffectAsync } from 'src/fixtures/utility'
import { getUser, postUser } from 'src/fixtures/dev-for-apps/utility'
import { sign } from 'src/fixtures/wallet/utility'
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

export const UserProfile = (_: Props) => {
  const [author, setAuthor] = useState<string>('')
  const [isComplete, setIsComplete] = useState<boolean>(true)
  const [displayName, setDisplayName] = useState<string>('(Not set)')
  useEffectAsync(async () => {
    const accountAddress = (await getAccountAddress()) || ''
    setAuthor(accountAddress)
    if (accountAddress !== '') {
      const data = await getUser(accountAddress)
      setDisplayName(data.displayName)
    }
  }, [])
  const handleSubmitDisplayName = useCallback(
    async (name: string) => {
      setIsComplete(false)
      const message = `submit display name: ${name}`
      const signature = (await sign(message)) || ''
      const data = await postUser(name, message, signature, author)
      setDisplayName(data?.displayName)
      setIsComplete(true)
    },
    [author]
  )

  return (
    <Container>
      <Section>
        <Title>Your Address</Title>
        <Text>{author}</Text>
      </Section>

      <Section>
        <Title>Display name</Title>
        <Text>{displayName}</Text>
      </Section>

      <Section>
        <Form {...formLayout} onFinish={({ name }) => handleSubmitDisplayName(name)}>
          <Row>
            <Col flex="1 1 252px">
              <Form.Item name="name" rules={[{ required: true, message: 'Please input display name.' }]}>
                <Input placeholder="Enter the new display name" />
              </Form.Item>
            </Col>
            <Col flex="1 1 252px">
              <Space direction="vertical" size="small">
                <Button type="primary" htmlType="submit" loading={!isComplete} disabled={!isComplete}>
                  Sign to Save
                </Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Section>
    </Container>
  )
}

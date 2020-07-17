import React, { useState } from 'react'
import { Button, Form, Input, Col, Row, Space } from 'antd'
import { getAccountAddress } from 'src/fixtures/wallet/utility'
import { useEffectAsync } from 'src/fixtures/utility'
import { useGetUser } from 'src/fixtures/backend/hooks'
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

const Contents = ({ address }: { address: string }) => {
  const { data } = useGetUser(address)
  const displayName = data?.addressName || '(Not set)'
  return !data ? (
    <Container>
      <Section>
        <Title>Your Address</Title>
        <Text>{address}</Text>
      </Section>

      <Section>
        <Title>Display name</Title>
        <Text>{displayName}</Text>
      </Section>

      <Section>
        <Form {...formLayout}>
          <Row>
            <Col flex="1 1 252px">
              <Form.Item name="name" rules={[{ required: true, message: 'Enter the new display name' }]}>
                <Input placeholder="Enter the new display name" />
              </Form.Item>
            </Col>
            <Col flex="1 1 252px">
              <Space direction="vertical" size="small">
                <Button type="primary">Sign to Save</Button>
              </Space>
            </Col>
          </Row>
        </Form>
      </Section>
    </Container>
  ) : (
    <></>
  )
}

export const UserProfile = (_: Props) => {
  const [author, setAuthor] = useState<string>('')
  useEffectAsync(async () => {
    const accountAddress = await getAccountAddress()
    const defaultValue = process.env.NODE_ENV === 'development' ? '0x69Cc2C86aeB26f52F6645a2DFdec1051DD5584C0' : ''
    setAuthor(accountAddress || defaultValue)
  }, [])
  return (
    <div>
      <Contents address={author} />
    </div>
  )
}

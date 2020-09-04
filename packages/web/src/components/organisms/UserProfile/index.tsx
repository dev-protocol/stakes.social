import React, { useCallback } from 'react'
import { Button, Form, Input } from 'antd'
import { useGetAccountAddress } from 'src/fixtures/wallet/hooks'
import { useGetUser, usePostUser } from 'src/fixtures/dev-for-apps/hooks'
import { Container } from 'src/components/atoms/Container'
import styled from 'styled-components'

interface Props {}

const Section = styled.section`
  display: grid;
  padding: 1rem;
  grid-gap: 0.5rem;
`
const Title = styled.div`
  font-size: 1rem;
`
const Text = styled.div`
  font-size: 1.3rem;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`
const StyledForm = styled(Form)`
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  justify-content: flex-start;
`

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
    <StyledForm onFinish={({ name }) => handleSubmitDisplayName(name)}>
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
      <Button type="primary" htmlType="submit" loading={isLoading} disabled={isLoading}>
        Save
      </Button>
    </StyledForm>
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

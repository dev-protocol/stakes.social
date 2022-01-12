import React, { useCallback, useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'
import { Body1 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'

interface Props {
  author: string
  onSubmit: (createdPropertyAddress: string) => void
}

const Container = styled.div`
  display: grid;
`
const FormRow = styled(Form.Item)`
  display: grid;
  @media (min-width: 768px) {
    grid-gap: 1rem;
    grid-template-columns: 150px 1fr;
  }
`
const ButtonRow = styled(FormRow)`
  @media (min-width: 768px) {
    grid-template-areas: 'empty button';
    & > * {
      grid-area: button;
    }
  }
`
const Results = styled.div`
  word-break: break-all;
`

export const PropertyCreateForm = ({ author, onSubmit }: Props) => {
  const [form] = Form.useForm()
  const [createdPropertyAddress, setCreatedPropertyAddress] = useState<string>('')
  const { createProperty } = useCreateProperty()
  useEffect(() => {
    form.setFieldsValue({ author })
  }, [form, author])

  const handleCreateProperty = useCallback(
    async (name: string, symbol: string, author: string) => {
      const property = await createProperty(name, symbol, author)
      setCreatedPropertyAddress(property)
      onSubmit(property)
    },
    [createProperty, onSubmit]
  )

  return (
    <Container>
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={({ name, symbol, author }) => handleCreateProperty(name, symbol, author)}
      >
        <FormRow label="Name" name="name" rules={[{ required: true, message: 'Please input name.' }]}>
          <Input placeholder="Name" />
        </FormRow>
        <FormRow label="Symbol" name="symbol" rules={[{ required: true, message: 'Please input symbol.' }]}>
          <Input placeholder="Symbol" />
        </FormRow>
        <FormRow label="Author" name="author">
          <Input type="text" />
        </FormRow>
        <ButtonRow>
          <Button type="primary" htmlType="submit">
            Create a new Property
          </Button>
        </ButtonRow>
      </Form>
      {createdPropertyAddress && (
        <Results>
          <p>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <Body1>{createdPropertyAddress}</Body1>
          </p>
          <p>Share the following address with your friends :)</p>
          <p>
            <LinkWithNetwork href={'/[property]'} as={`/${createdPropertyAddress}`} passHref>
              <a>https://stakes.social/{createdPropertyAddress}</a>
            </LinkWithNetwork>
          </p>
        </Results>
      )}
    </Container>
  )
}

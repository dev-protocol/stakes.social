import React, { useCallback, useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'
import { Body1 } from 'src/components/atoms/Typography'
import Link from 'next/link'

interface Props {
  author: string
  onSubmit: (createdPropertyAddress: string) => void
}

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
    <div style={{ marginTop: '18px' }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={({ name, symbol, author }) => handleCreateProperty(name, symbol, author)}
      >
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input name.' }]}>
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Symbol" name="symbol" rules={[{ required: true, message: 'Please input symbol.' }]}>
          <Input placeholder="Symbol" />
        </Form.Item>
        <Form.Item label="Author" name="author">
          <Input type="text" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
      {createdPropertyAddress && (
        <>
          <p>
            <CheckCircleTwoTone twoToneColor="#52c41a" />
            <Body1 style={{ marginLeft: '10px' }}>{createdPropertyAddress}</Body1>
          </p>
          <p>Share the following address with your friends :)</p>
          <p>
            <Link href={'/[property]'} as={`/${createdPropertyAddress}`} passHref>
              <a>https://stakes.social/{createdPropertyAddress}</a>
            </Link>
          </p>
        </>
      )}
    </div>
  )
}

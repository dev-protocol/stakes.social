import React, { useCallback, useState, useEffect } from 'react'
import { Form, Input, Button } from 'antd'
import { CheckCircleTwoTone } from '@ant-design/icons'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'
import { Body1 } from 'src/components/atoms/Typography'

interface Props {
  author: string
}

export const PropertyCreateForm = ({ author }: Props) => {
  const [form] = Form.useForm()
  const [createdPropertyAddress, setCreatedPropertyAddress] = useState<string>('aaaaaa')
  const { createProperty } = useCreateProperty()
  useEffect(() => {
    form.setFieldsValue({ author })
  }, [form, author])

  const handleCreateProperty = useCallback(
    async (name: string, symbol: string, author: string) =>
      setCreatedPropertyAddress(await createProperty(name, symbol, author)),
    [createProperty]
  )

  return (
    <div style={{ marginTop: '18px' }}>
      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={({ name, symbol, author }) => {
          handleCreateProperty(name, symbol, author)
        }}
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
        <span>
          <CheckCircleTwoTone twoToneColor="#52c41a" />
          <Body1 style={{ marginLeft: '10px' }}>{createdPropertyAddress}</Body1>
        </span>
      )}
    </div>
  )
}

import React, { useEffect, useCallback } from 'react'
import { Form, Input, Button } from 'antd'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'

interface Props {
  author: string
}

export const PropertyCreateForm = ({ author }: Props) => {
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      author: author
    })
  }, [form, author])
  const { createProperty } = useCreateProperty()
  const handleCreateProperty = useCallback(
    (name: string, symbol: string, author: string) => createProperty(name, symbol, author),
    [createProperty]
  )

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

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
        onFinishFailed={onFinishFailed}
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

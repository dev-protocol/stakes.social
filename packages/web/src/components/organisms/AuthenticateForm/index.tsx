import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { Form, Input, Button } from 'antd'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'
import { AuthorSelector } from './AuthorSelector'

interface Props {
  author: string
}

const PropertyCreateForm = ({ author }: Props) => {
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

export const AuthenticateForm = ({ market }: { market: string }) => {
  const [isOpen, setIsOpen] = useState(false)
  // @k3nt0w FIXME: This is dummy hash. We must fetch author hash from hooks.
  const author = '0x69Cc2C86aeB26f52F6645a2DFdec1051DD5584C0'
  const [property, setProperty] = useState<string>()
  const [query, setQuery] = useState<string>('')
  const onChange = (value: string) => setProperty(value)
  const onSearch = (query: string) => setQuery(query)
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <span style={{ marginRight: '54px' }}>Associating Property:</span>
      <AuthorSelector query={query} author={author} onChange={onChange} onSearch={onSearch} />
      <div style={{ paddingLeft: '212px', marginTop: '18px' }}>
        <Button type="link" onClick={() => setIsOpen(!isOpen)}>
          Or create one
        </Button>
        {isOpen && <PropertyCreateForm author={author} />}
      </div>
      <Link href={'/auth/[market]/[property]'} as={`/auth/${market}/${property}`}>
        <Button type="primary">Next</Button>
      </Link>
    </div>
  )
}

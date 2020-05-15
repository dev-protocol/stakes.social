import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Select } from 'antd'
import { Form, Input, Button } from 'antd'
import { useCreateProperty } from 'src/fixtures/dev-kit/hooks'

interface Props {
  walletAddress: string
}

const { Option } = Select

const PropertyCreateForm = ({ walletAddress }: Props) => {
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      author: walletAddress
    })
  }, [form, walletAddress])
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
          <Input type="text"></Input>
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

export const AuthenticateForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  const walletAddress = 'wallet-address'
  const { market } = useRouter().query as { market: string }
  const [associatingProperty, setAssociatingProperty] = useState<string>()

  const onChange = (value: string) => setAssociatingProperty(value)

  const onSearch = (val: string) => console.log('search:', val)

  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <span style={{ marginRight: '54px' }}>Associating Property:</span>
      <Select
        showSearch
        style={{ width: '267px' }}
        placeholder="Please select"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
        filterOption={(input, option: any) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        <Option value="test1">test1</Option>
        <Option value="test2">test2</Option>
      </Select>
      <div style={{ paddingLeft: '212px', marginTop: '18px' }}>
        <Button type="link" onClick={() => setIsOpen(!isOpen)}>
          Or create one
        </Button>
        {isOpen && <PropertyCreateForm walletAddress={walletAddress} />}
      </div>
      <Link href={'/auth/[market]/[property]'} as={`/auth/${market}/${associatingProperty}`}>
        <Button type="primary">Next</Button>
      </Link>
    </div>
  )
}

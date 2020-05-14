import React, { useState, useEffect } from 'react'
import { Select } from 'antd'
import { Form, Input, Button } from 'antd'

interface Props {
  marketAddress: string
}

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 }
}

const { Option } = Select

function onChange(value: string) {
  console.log(`selected ${value}`)
}

function onBlur() {
  console.log('blur')
}

function onFocus() {
  console.log('focus')
}

function onSearch(val: string) {
  console.log('search:', val)
}

const onFinish = (values: any) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo)
}

const CreateForm = ({ marketAddress }: Props) => {
  const [form] = Form.useForm()
  useEffect(() => {
    form.setFieldsValue({
      author: marketAddress
    })
  }, [form, marketAddress])
  return (
    <div style={{ marginTop: '18px' }}>
      <Form
        {...layout}
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
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

export const AuthenticateForm = ({ marketAddress }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
      <span style={{ marginRight: '54px' }}>Associating Property:</span>
      <Select
        showSearch
        style={{ width: 267 }}
        placeholder="Please select"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
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
        {isOpen && <CreateForm marketAddress={marketAddress} />}
      </div>
      <Button type="primary">Next</Button>
    </div>
  )
}

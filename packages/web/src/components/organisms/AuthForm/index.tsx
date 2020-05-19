import React from 'react'
import { Row, Col, Form, Input, Button } from 'antd'

export const AuthForm = ({ property }: { property: string }) => {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <div style={{ marginTop: '18px' }}>
      <div style={{ maxWidth: '980px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Row style={{ marginBottom: '32px' }}>
          <Col span={6}>
            <span>Associating Property:</span>
          </Col>
          <Col span={18}>
            <span>{property}</span>
          </Col>
        </Row>
        <Row>
          <Col span={6}>
            <span>Arguments:</span>
          </Col>
          <Col span={18}>
            <Form
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 18 }}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item name="name" rules={[{ required: true, message: 'Please input name.' }]}>
                <Input placeholder="Your npm package name" />
              </Form.Item>
              <Form.Item name="token" rules={[{ required: true, message: 'Please input symbol.' }]}>
                <Input placeholder="Your npm read-only token" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Authenticate
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  )
}

import React, { useState } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { useMarketScheme, useAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { useEffectAsync } from 'src/fixtures/utility'

export const AuthForm = ({ property }: { property: string }) => {
  const [schemeList, setSchemeList] = useState<string[]>([])
  const { marketScheme } = useMarketScheme()
  const { authenticate } = useAuthenticate()
  const onFinish = (values: any) => authenticate(property, Object.values(values))

  useEffectAsync(async () => {
    const schemeList = await marketScheme()
    setSchemeList(schemeList || [])
  }, [])

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
            >
              {schemeList.map(scheme => (
                <Form.Item name={scheme} rules={[{ required: true, message: 'Please input name.' }]} key={scheme}>
                  <Input placeholder={scheme} />
                </Form.Item>
              ))}
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

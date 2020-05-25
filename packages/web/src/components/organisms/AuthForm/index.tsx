import React, { useState } from 'react'
import { Row, Col, Form, Input, Button, Result } from 'antd'
import { useMarketScheme, useAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { useEffectAsync } from 'src/fixtures/utility'

export interface Props {
  market: string
  property: string
}

export const AuthForm = ({ market, property }: Props) => {
  const [schemeList, setSchemeList] = useState<string[]>([])
  const [metrics, setMetrics] = useState<string>('')
  const { marketScheme } = useMarketScheme()
  const { authenticate } = useAuthenticate()
  const onFinish = async (values: any) => {
    const metrics = await authenticate(market, property, Object.values(values))
    if (metrics) {
      setMetrics(metrics)
    }
  }

  useEffectAsync(async () => {
    const schemeList = await marketScheme(market)
    setSchemeList([...(schemeList || [])])
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
        {metrics ? (
          <Result
            status="success"
            title="Successfully Authenticated Your Asset!"
            subTitle="Viewing a new asset will take dozens of minutes, but you can also check it out right away on Etherscan."
            extra={[
              <Button key="etherscan" href={`https://etherscan.io/address/${metrics}`}>
                Etherscan
              </Button>,
              <Button key="property" href={`/${property}`} type="primary">
                Go the Property
              </Button>
            ]}
          />
        ) : (
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
        )}
      </div>
    </div>
  )
}

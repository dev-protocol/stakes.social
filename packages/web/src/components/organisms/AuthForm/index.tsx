import React, { useState } from 'react'
import { Form, Input, Button, Result } from 'antd'
import { useMarketScheme, useAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { useEffectAsync } from 'src/fixtures/utility'
import styled from 'styled-components'

export interface Props {
  market: string
  property: string
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
    & > *:first-child {
      text-align: right;
    }
  }
`

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
    <Container>
      <Row>
        <span>Associating Property:</span>
        <span>{property}</span>
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
          <span>Arguments:</span>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
            {schemeList.map(scheme => (
              <Form.Item name={scheme} rules={[{ required: true, message: 'Please input name.' }]} key={scheme}>
                <Input placeholder={scheme} />
              </Form.Item>
            ))}
            <Button type="primary" htmlType="submit">
              Authenticate
            </Button>
          </Form>
        </Row>
      )}
    </Container>
  )
}

import React from 'react'
import { Row, Col } from 'antd'
import { AuthHeader } from 'src/components/organisms/AuthHeader'
import { Footer } from 'src/components/organisms/Footer'
import { TextCard } from 'src/components/molecules/TextCard'

type Props = {}

const Auth = (_: Props) => {
  return (
    <>
      <AuthHeader />
      <div style={{ maxWidth: '680px', marginRight: 'auto', marginLeft: 'auto' }}>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <TextCard title="npm" />
          </Col>
        </Row>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <TextCard title="GitHub" />
          </Col>
        </Row>
        <Row style={{ margin: '82px 0px' }}>
          <Col span={24}>
            <TextCard title="xxx" />
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  )
}

export default Auth

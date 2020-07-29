import React from 'react'
import { Col, Row, Form, Input } from 'antd'

interface Props {
  onSubmitSearchProperty: (word: string) => void
}

const formLayout = {
  wrapperCol: { span: 18 }
}

export const PropertySearchForm = ({ onSubmitSearchProperty }: Props) => {
  return (
    <>
      <Form {...formLayout}>
        <Row>
          <Col sm={20} md={12}>
            <Form.Item name="searchWord">
              <Input.Search
                placeholder="input property search word"
                onSearch={searchWord => onSubmitSearchProperty(searchWord)}
                enterButton
              />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  )
}

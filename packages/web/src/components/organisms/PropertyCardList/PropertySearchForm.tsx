import React from 'react'
import { Col, Row, Form, Input } from 'antd'
import styled from 'styled-components'

interface Props {
  onSubmitSearchProperty: (word: string) => void
}

const formLayout = {
  wrapperCol: { span: 18 }
}

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const FlexFormItem = styled(Form.Item)`
  align-self: center;
  margin-bottom: 0;
`

export const PropertySearchForm = ({ onSubmitSearchProperty }: Props) => {
  return (
    <Flex>
      <Form {...formLayout}>
        <Row>
          <Col sm={30} md={30}>
            <FlexFormItem name="searchWord">
              <Input.Search
                placeholder="input property search word"
                onSearch={searchWord => onSubmitSearchProperty(searchWord)}
                enterButton
              />
            </FlexFormItem>
          </Col>
        </Row>
      </Form>
    </Flex>
  )
}

import React from 'react'
import styled from 'styled-components'
import { Form } from 'antd'

import { Input } from 'src/components/organisms/Incubator/Form'
import { Span, LinkB } from '../../Typography'
import { Button } from '../../molecules/Button'

const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: grid;
  width: 100%;
  align-self: center;
  grid-gap: 1rem;
`

const OurDocsLink = styled.a`
  font-size: 14px;
  text-decoration: none;
  color: #5b8bf5;
  padding-bottom: 1px;
  border-bottom: 1px solid #5b8bf5;

  :hover {
    color: #5b8bf5;
  }
`

const SpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`

type AuthenticationProps = {
  onStateChange: React.Dispatch<React.SetStateAction<string>>
}

const AuthenticationForm = ({ onStateChange }: AuthenticationProps) => {
  const onSubmit = (data: any) => {
    onStateChange('loading')
  }

  return (
    <AuthenticationContainer>
      <Span fontSize="40px" fontWeight="bold">
        Authentication
      </Span>
      <Span style={{ paddingTop: '3em' }} fontSize="14px">
        Repository’s Personal Access Token
      </Span>
      <FormContainer style={{ paddingTop: '0.4em' }}>
        <Form initialValues={{ remember: true }} onFinish={onSubmit}>
          <div style={{ display: 'grid', gridGap: '1.5em' }}>
            <div>
              <Form.Item
                noStyle
                name="personalAccessToken"
                rules={[{ required: true, message: 'Please input PAT.' }]}
                key="personalAccessToken"
              >
                <Input value="" name="personalAccessToken" />
              </Form.Item>
            </div>

            <Span fontSize="14px" color="#5B8BF5">
              The Khaos Oracle confidentially authenticates your Github Personal Access Token. Please see
              <OurDocsLink rel="noopener noreferrer" target="_blank" href="https://github.com/dev-protocol/khaos">
                {' '}
                our docs
              </OurDocsLink>{' '}
              for more details.
            </Span>
          </div>

          <div style={{ paddingTop: '2.5em' }}>
            <SpaceBetween style={{ alignItems: 'center' }}>
              <div style={{ height: 'fit-content' }}>
                <LinkB rel="noopener noreferrer" target="_blank" href="https://github.com/settings/tokens/new">
                  Create a PAT
                </LinkB>
              </div>

              <Button type="submit">Submit</Button>
            </SpaceBetween>
          </div>
        </Form>
      </FormContainer>
    </AuthenticationContainer>
  )
}

export default AuthenticationForm

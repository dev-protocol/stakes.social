import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'antd'

import { Span, LinkB } from '../../Typography'
import { Button } from '../../molecules/Button'
import { ClipboardIcon } from '../../Icons'

const AuthenticationContainer = styled.div`
  position: relative;
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

export const InputContainer = styled(Form.Item)`
  position: relative;
  width: 100%;
  margin: 0;
`

const FormItem = styled(Form.Item)<{ isError?: boolean }>`
  .ant-form-item-explain,
  .ant-form-item-explain-error {
    padding-top: 0.5em;
    font-size: 12px;
  }

  #pat {
    ${props => {
      if (props.isError) {
        return 'border-bottom: red 2px solid'
      }
      return 'border-bottom: auto'
    }}
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 0;
  border: 0;
  background: transparent;
  outline: none;
  border-bottom: 2px solid #cccccc;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
    border-bottom: 2px solid #5b8bf5;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border-bottom: 2px solid #5b8bf5;
    /* box-shadow: 0 0 0 1px grey; */
  }
`

type CustomInputProps = {
  label: string
  placeholder?: string
  defaultValue?: number | string
}

const ClipboardIconContainer = styled.div`
  position: absolute;
  right: 0;
  top: 12px;
`

export const CustomInput = ({ placeholder, label }: CustomInputProps) => {
  return (
    <InputContainer>
      <Form.Item name={label} noStyle>
        <Input id="pat" placeholder={placeholder || ''} />
      </Form.Item>
      <ClipboardIconContainer>
        <ClipboardIcon />
      </ClipboardIconContainer>
    </InputContainer>
  )
}

type AuthenticationProps = {
  onStateChange: React.Dispatch<React.SetStateAction<string>>
}

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-35px);
  display: flex;
`

const AuthenticationForm = ({ onStateChange }: AuthenticationProps) => {
  const [form] = Form.useForm()
  const onSubmit = (data: any) => {
    console.log('data: ', data)
    onStateChange('loading')
  }
  const [isError, setIsError] = useState(false)

  const onFinishFailed = () => {
    setIsError(true)
  }

  return (
    <AuthenticationContainer>
      <ProgressContainer>
        <Span fontSize="16px" color="#999999">
          First step
        </Span>
      </ProgressContainer>
      <Span fontSize="40px" fontWeight="bold">
        Authentication
      </Span>
      <Span style={{ paddingTop: '3em' }} fontSize="14px">
        Admin’s Personal Access Token
      </Span>
      <FormContainer style={{ paddingTop: '0.4em' }}>
        <Form
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSubmit}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            isError={isError}
            name="pat"
            rules={[{ required: true, message: 'Please enter a valid PAT' }]}
            key="pat"
          >
            <CustomInput label="pat" placeholder="Paste the PAT token from Github" />
          </FormItem>

          <Span fontSize="14px" color="#5B8BF5">
            The Khaos Oracle confidentially authenticates your Github Personal Access Token. Please see
            <OurDocsLink rel="noopener noreferrer" target="_blank" href="https://github.com/dev-protocol/khaos">
              {' '}
              our docs
            </OurDocsLink>{' '}
            for more details.
          </Span>

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

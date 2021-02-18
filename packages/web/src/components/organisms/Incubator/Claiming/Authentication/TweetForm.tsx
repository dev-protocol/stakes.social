import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'antd'

import { Span, LinkB } from '../../Typography'
import { Button } from '../../molecules/Button'
import { ClipboardIcon, TwitterIcon } from '../../Icons'

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
  right: 0;
  transform: translateY(-75px);
  display: flex;
`

const ProgressItem = styled.div<{ isSelected?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 90px;
  margin: 5px;

  border: 1px solid black;
  background: ${props => (props.isSelected ? 'black' : 'white')};
  color: ${props => (props.isSelected ? 'white' : 'black')};

  span {
    transform: translateY(-2px);
  }
`

const TweetForm = ({ onStateChange }: AuthenticationProps) => {
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
        <ProgressItem>
          <Span fontSize="32px">1</Span>
        </ProgressItem>
        <ProgressItem isSelected={true}>
          <Span fontSize="32px">2</Span>
        </ProgressItem>
      </ProgressContainer>
      <SpaceBetween>
        <Span fontSize="40px" fontWeight="bold">
          Tweet it!
        </Span>
        <TwitterIcon />
      </SpaceBetween>
      <Span fontSize="20px" style={{ paddingTop: '2em' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.{' '}
      </Span>
      <Span style={{ paddingTop: '3em' }} fontSize="14px">
        Repository’s Personal Access Token
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
            <CustomInput label="pat" placeholder="Paste a token from Github" />
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

export default TweetForm

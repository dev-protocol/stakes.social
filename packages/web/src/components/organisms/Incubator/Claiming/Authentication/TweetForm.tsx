import React, { useState } from 'react'
import styled from 'styled-components'
import { Form } from 'antd'

import { Span, LinkB } from '../../Typography'
import { Button } from '../../molecules/Button'
import { ClipboardIcon, TwitterBird } from '../../Icons'
import DownArrow from '../../molecules/DownArrow'

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
    border-bottom: 2px solid black;
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

const TweetContainer = styled.div`
  position: relative;
  font-size: 20px;
  margin-top: 1em;
  padding: 15px 40px 30px 20px;
  border-radius: 16px;
  border: 1px solid #1da1f2;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`

const TwitterBirdContainer = styled.div`
  position: absolute;
  top: 7.5px;
  right: 7.5px;
`

const TweetButtonContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(-20px, 50%);
`

const TweetButton = styled(Button)`
  border-radius: 24px;
  width: 120px;
  height: 48px;
  color: white;
  background: #1da1f2;

  :hover {
    background: #1da1f2;
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

  const { project } = { project: 'Sigma' }

  return (
    <AuthenticationContainer>
      <ProgressContainer>
        <Span fontSize="16px" color="#999999">
          Last step
        </Span>
      </ProgressContainer>
      <SpaceBetween>
        <Span fontSize="40px" fontWeight="bold">
          Tweet it!
        </Span>
      </SpaceBetween>
      <TweetContainer>
        <TwitterBirdContainer>
          <TwitterBird />
        </TwitterBirdContainer>
        <Span fontSize="20px">
          {project} just received $20,000 in funding from the{' '}
          <Span fontSize="20px" style={{ color: '#D500E6' }}>
            @devprtcl
          </Span>{' '}
          Incubator. Follow the link below to support us and earn by staking DEV tokens.
        </Span>
        <TweetButtonContainer>
          <TweetButton>
            <Span fontSize="20px">Submit</Span>
          </TweetButton>
        </TweetButtonContainer>
      </TweetContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', marginTop: '3em' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 20px' }}>
          <DownArrow />
        </div>
        <Span fontSize="14px" color="#5B8BF5">
          The last step is to share the news with your community. Once completed paste the url below and click “Done”.
        </Span>
      </div>

      <Span style={{ paddingTop: '2em' }} fontSize="14px">
        Twitter Post URL
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
            name="twitter"
            rules={[{ required: true, message: 'Please enter a valid twitter URL' }]}
            key="twitter"
          >
            <CustomInput label="twitter" placeholder="Paste the url of the Twitter post " />
          </FormItem>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '2.5em' }}>
            <Button onClick={() => onStateChange('loading')}>Done</Button>
          </div>
        </Form>
      </FormContainer>
    </AuthenticationContainer>
  )
}

export default TweetForm

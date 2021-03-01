import React, { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Form } from 'antd'

import { ButtonL, Text2M, H1Large, Text1L, Text2S } from '../../Typography'
import { Button, LinkAsButton } from '../../molecules/Button'
import { ClipboardIcon, TwitterBird } from '../../Icons'
import DownArrow from '../../molecules/DownArrow'
import { useGetReward, useIntermediateProcess } from 'src/fixtures/_pages/incubator/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'

const AuthenticationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: fit-content;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 446px; */
  width: 100%;
  align-self: center;
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
  border-bottom: 1px solid #cccccc;
  transition: all 0.2s ease-in;

  &:hover {
    transition: all 0.2s ease-in;
    border-bottom: 1px solid #5b8bf5;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border-bottom: 1px solid black;
    /* box-shadow: 0 0 0 1px grey; */
  }

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #cccccc;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #cccccc;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #cccccc;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #cccccc;
  }
`

type CustomInputProps = {
  label: string
  placeholder?: string
  defaultValue?: number | string
  onHandlePaste: () => void
}

const ClipboardIconContainer = styled.div`
  z-index: 3;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 8px;
`

export const CustomInput = ({ placeholder, label, onHandlePaste }: CustomInputProps) => {
  return (
    <InputContainer>
      <Form.Item name={label} noStyle>
        <Input id="pat" placeholder={placeholder || ''} />
      </Form.Item>
      <ClipboardIconContainer onClick={onHandlePaste}>
        <ClipboardIcon />
      </ClipboardIconContainer>
    </InputContainer>
  )
}

type AuthenticationProps = {
  onStateChange: SetOnboardingPageStatus
  project: Incubator
  metricsAddress: string
  onIsWrongChange: React.Dispatch<React.SetStateAction<boolean>>
}

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-48px);
  display: flex;
`

const TweetContainer = styled.div`
  display: flex;
  position: relative;
  font-size: 16px;
  margin-top: 1em;
  padding: 16px 32px 24px 16px;
  border-radius: 16px;
  border: 1px solid #1da1f2;
  background: rgba(29, 161, 242, 0.03);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  letter-spacing: -1px;
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

const TweetButton = styled(LinkAsButton)`
  border-radius: 24px;
  width: 120px;
  height: 48px;
  color: white;
  background: #1da1f2;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  :hover {
    background: #1da1f2;
    color: white;
  }
`

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0px;
  }
`

const createTweetBody = (project: Incubator, funds?: string) =>
  `${project.name} just received ${funds} in funding from the @devprtcl Incubator. Follow the link below to support us and earn by staking DEV tokens. https://stakes.social/${project.property?.address}`

const IS_DEVELOPMENT_ENV = process.env.NODE_ENV === 'development'

const TweetForm = ({ onStateChange, project, metricsAddress, onIsWrongChange }: AuthenticationProps) => {
  const { inUSD } = useGetReward(project.verifier_id)
  const funds = useMemo(() => (inUSD ? `$${inUSD.dp(2).toNumber().toLocaleString()}` : '$N/A'), [inUSD])
  const [form] = Form.useForm()
  const { intermediateProcess, waitForFinishEvent } = useIntermediateProcess()
  const onSubmit = async (data: any) => {
    console.log('data: ', data)
    if (!project.property?.address) {
      return onIsWrongChange(true)
    }
    onStateChange('loading')

    if (IS_DEVELOPMENT_ENV) {
      setTimeout(() => {
        onStateChange('success')
      }, 3000)
    } else {
      await intermediateProcess(project.verifier_id, metricsAddress, data.twitter, '')
      await waitForFinishEvent(project.property.address)
      onStateChange('success')
    }
  }
  const [isError, setIsError] = useState(false)

  const onFinishFailed = () => {
    setIsError(true)
  }

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then(twitter => {
        form.setFieldsValue({ twitter })
        console.log('Pasted content: ', twitter)
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err)
      })
  }

  return (
    <AuthenticationContainer>
      <ProgressContainer>
        <Text2M color="#999999">Last step</Text2M>
      </ProgressContainer>
      <SpaceBetween>
        <H1Large>Tweet it!</H1Large>
      </SpaceBetween>
      <TweetContainer>
        <TwitterBirdContainer>
          <TwitterBird />
        </TwitterBirdContainer>
        <Text1L fontSize="20px">
          {project.name} just received {funds} in funding from the{' '}
          <Text1L fontSize="20px" style={{ color: '#D500E6' }}>
            @devprtcl
          </Text1L>{' '}
          Incubator. Follow the link below to support us and earn by staking DEV tokens.{' '}
          <Text1L fontSize="20px" style={{ color: '#D500E6' }}>
            {`https://stakes.social/${project.property?.address}`}
          </Text1L>
        </Text1L>
        <TweetButtonContainer>
          <TweetButton
            target="_blank"
            rel="noreferrer"
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(createTweetBody(project, funds))}`}
          >
            <ButtonL>Tweet</ButtonL>
          </TweetButton>
        </TweetButtonContainer>
      </TweetContainer>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', marginTop: '41px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0 24px' }}>
          <DownArrow />
        </div>
        <Text2S color="#5B8BF5">
          The last step is to share the news with your community. Once completed paste the url below and click “Done”.
        </Text2S>
      </div>

      <Text2S style={{ paddingTop: '24px' }}>Twitter Post URL</Text2S>
      <FormContainer style={{ paddingTop: 0 }}>
        <StyledForm
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
            <CustomInput onHandlePaste={handlePaste} label="twitter" placeholder="Paste the url of the Twitter post" />
          </FormItem>

          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '48px' }}>
            <Button htmlType="submit">Done</Button>
          </div>
        </StyledForm>
      </FormContainer>
    </AuthenticationContainer>
  )
}

export default TweetForm

import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { Form, message } from 'antd'
import { LinkB, Text2M, H1Large, Text2S } from '../../Typography'
import { Button } from '../../molecules/Button'
import { ClipboardIcon } from '../../Icons'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'
import { Incubator } from 'src/fixtures/dev-for-apps/utility'
import { useAuthenticate } from 'src/fixtures/_pages/incubator/hooks'
import CheckCircleOutlined from '@ant-design/icons/lib/icons/CheckCircleOutlined'
import { SetLoadingStatus, SetOnboardingPageStatus } from 'src/pages/incubator/project/[project]'
import DownArrow from '../../molecules/DownArrow'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useRouter } from 'next/router'

const AuthenticationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 446px; */
  width: 100%;
  align-self: center;
`

const OurDocsLink = styled.a<{ isDisabled?: string }>`
  font-size: 14px;
  text-decoration: none;
  color: #5b8bf5;
  padding-bottom: 1px;
  border-bottom: 1px solid #5b8bf5;

  :hover {
    color: #5b8bf5;
  }

  ${({ isDisabled }) => css`
    ${isDisabled &&
    css`
      pointer-events: none;
      color: #cccccc;
      border-bottom: 1px solid #cccccc;
    `}
  `}
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

const ButtonWithIcon = styled(Button)`
  width: 130px;
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
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: black;

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
  bottom: 4px;
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

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 0x;
  }
`

type AuthenticationProps = {
  onStateChange: SetOnboardingPageStatus
  loading: SetLoadingStatus
  onMetricsCreated: React.Dispatch<React.SetStateAction<string | undefined>>
  project: Incubator
  onIsWrongChange: React.Dispatch<React.SetStateAction<boolean>>
}

const ProgressContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-48px);
  display: flex;
`

const SignSubmitProgress = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  margin-top: 12px;
`

const SubHr = styled.div`
  height: 20px;
  border-top: 1px solid #cccccc;
  transform: translateY(0.75em);
`

const DownArrowContainer = styled.div`
  padding: 0 1em;

  path {
    fill: ${props => props.color || '#cccccc'};
  }
`

const IS_DEVELOPMENT_ENV = process.env.NODE_ENV === 'development'

const AuthenticationForm = ({
  onStateChange,
  loading,
  onMetricsCreated,
  project,
  onIsWrongChange
}: AuthenticationProps) => {
  const { public_signature } = useRouter().query
  const [form] = Form.useForm()
  const { postSignGitHubMarketAssetHandler, isLoading } = usePostSignGitHubMarketAsset()
  const { authenticate, waitForCreateMetrics } = useAuthenticate()
  const [publicSignature, setPublicSignature] = useState<undefined | string>(
    public_signature && String(public_signature)
  )
  const { accountAddress } = useProvider()
  const onSign = async (data: any) => {
    const signature = await postSignGitHubMarketAssetHandler(project.verifier_id, data.pat).catch((err: Error) => {
      return IS_DEVELOPMENT_ENV ? { publicSignature: 'dummy_pulic_signature' } : err
    })
    if (!signature || signature instanceof Error) {
      message.error(signature)
      return onIsWrongChange(true)
    }
    setPublicSignature(signature.publicSignature)
  }
  const onSend = async () => {
    if (!publicSignature) {
      return onIsWrongChange(true)
    }
    loading('loading')
    if (!IS_DEVELOPMENT_ENV) {
      console.log({ publicSignature })
      await authenticate(project.verifier_id, publicSignature).catch(err => {
        message.error(err)
        return onIsWrongChange(true)
      })
    }
    const metrics = IS_DEVELOPMENT_ENV
      ? '0x_dummy_metrics'
      : await waitForCreateMetrics(project.verifier_id).catch((err: Error) => err)
    if (metrics instanceof Error || !metrics) {
      message.error(metrics || 'authentication failed')
      return onIsWrongChange(true)
    }
    onMetricsCreated(metrics)
    if (IS_DEVELOPMENT_ENV) {
      setTimeout(() => {
        loading(undefined)
        onStateChange('authentication')
      }, 3000)
    } else {
      loading(undefined)
      onStateChange('authentication')
    }
  }
  const [isError, setIsError] = useState(false)

  const onFinishFailed = () => {
    setIsError(true)
  }

  const handlePaste = () => {
    navigator.clipboard
      .readText()
      .then(pat => {
        form.setFieldsValue({ pat })
        console.log('Pasted content: ', pat)
      })
      .catch(err => {
        console.error('Failed to read clipboard contents: ', err)
      })
  }

  return (
    <AuthenticationContainer>
      <ProgressContainer>
        <Text2M color="#999999">First step</Text2M>
      </ProgressContainer>
      <H1Large>Authentication</H1Large>
      <Text2S style={{ paddingTop: '46px' }}>Admin’s Personal Access Token</Text2S>
      <FormContainer style={{ paddingTop: '8px' }}>
        <StyledForm
          form={form}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onSign}
          onFinishFailed={onFinishFailed}
        >
          <FormItem
            isError={isError}
            name="pat"
            rules={[{ required: true, message: 'Please enter a valid PAT' }]}
            key="pat"
          >
            <CustomInput onHandlePaste={handlePaste} label="pat" placeholder="Paste the PAT from Github" />
          </FormItem>

          <div style={{ display: 'flex', marginTop: '1rem' }}>
            <Text2S style={{ width: 'inherit', color: !publicSignature ? '#5B8BF5' : '#cccccc' }}>
              The Khaos Oracle confidentially authenticates your Github Personal Access Token. Please see{' '}
              <OurDocsLink
                isDisabled={publicSignature}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/dev-protocol/khaos"
              >
                our docs
              </OurDocsLink>{' '}
              for more details.
            </Text2S>
          </div>

          <SpaceBetween style={{ alignItems: 'center', marginTop: '2rem' }}>
            <div style={{ height: 'fit-content' }}>
              <LinkB
                isDisabled={publicSignature}
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/settings/tokens/new"
              >
                Create a PAT
              </LinkB>
            </div>

            <ButtonWithIcon
              icon={publicSignature ? <CheckCircleOutlined /> : undefined}
              loading={isLoading}
              htmlType="submit"
              disabled={Boolean(publicSignature) || !accountAddress}
              title={Boolean(publicSignature) || !accountAddress ? 'Please connect your wallet' : undefined}
            >
              Sign
            </ButtonWithIcon>
          </SpaceBetween>
          <SignSubmitProgress>
            <SubHr />
            <DownArrowContainer color={publicSignature && '#5B8BF5'}>
              <DownArrow />
            </DownArrowContainer>
            <SubHr />
          </SignSubmitProgress>
          <Text2S style={{ marginTop: '12px', color: publicSignature ? '#5B8BF5' : '#cccccc' }}>
            Verification of the credential has been completed. Please submit the signature to finalize authentication.
          </Text2S>
          <div style={{ marginTop: '1em', display: 'flex', justifyContent: 'flex-end' }}>
            <ButtonWithIcon
              disabled={!publicSignature}
              title={!publicSignature ? 'Please sign before you submit your PAT' : undefined}
              onClick={onSend}
            >
              Submit
            </ButtonWithIcon>
          </div>
        </StyledForm>
      </FormContainer>
    </AuthenticationContainer>
  )
}

export default AuthenticationForm

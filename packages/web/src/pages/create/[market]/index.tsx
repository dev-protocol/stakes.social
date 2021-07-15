import React from 'react'
import { useRouter } from 'next/router'
import { AuthForm } from '../../../fixtures/_pages/Tokenization/AuthForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { useState } from 'react'
import { getPath } from 'src/fixtures/utility/route'
import { message } from 'antd'
import InfoCircleFilled from '@ant-design/icons/lib/icons/InfoCircleFilled'
import { useCreateAndAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'
import SuccessLogo from 'src/components/atoms/Success'
import { ButtonWithGradient } from 'src/components/atoms/ButtonWithGradient/index'

type Props = {}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 760px;
  margin-right: auto;
  margin-left: auto;
  padding-top: 2em;
`

const ResponsiveContainer = styled(Container)`
  display: flex;
  flex-grow: 1;

  @media (min-width: 1024px) {
    width: 690px;
  }
`

type DisclaimerProps = {
  projectName: string
  tokenName: string
  tokenSymbol: string
  personalAccessToken: string
  onFormDataChange: React.Dispatch<
    React.SetStateAction<
      | {
          projectName: string
          tokenName: string
          tokenSymbol: string
          personalAccessToken: string
        }
      | undefined
    >
  >
  onHeaderChange: React.Dispatch<React.SetStateAction<string>>
  onSubHeaderChange: React.Dispatch<React.SetStateAction<string>>
  market: string
  onMetricsChange: React.Dispatch<React.SetStateAction<string>>
}

const DisclaimerContainer = styled.div`
  display: grid;
  padding: 1em;
  grid-gap: 1rem;
  max-width: 690px;

  @media (min-width: 768px) {
    padding: 1em;
  }
`

const Row = styled.div`
  display: grid;
  row-gap: 0.75rem;
  grid-template-columns: 1fr 1fr;
  & > *:last-child {
    text-align: right;
  }
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    & > *:first-child {
      text-align: left;
    }
  }
`

const Span = styled.div`
  font-size: 1.2em;
  margin-top: 5px;
`

const InfoContainer = styled.div`
  cursor: pointer;
  margin-left: 10px;
  margin-top: 4px;
  svg {
    width: 1em;
    height: auto;
  }
`

const SubmitContainer = styled.div`
  display: flex;
  width: fit-content;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

const Submit = styled.button`
  padding: 10px 40px;
  border-radius: 6px;
  border: none;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  color: white;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);

  cursor: ${props => (props.disabled ? 'auto' : 'pointer')};
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: ${props =>
      props.disabled ? 'none' : '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12)'};
  }
`

const MetricsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: 760px;
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px 32px;
  justify-content: center;
  align-items: center;
`

const SuccessContainer = styled.div`
  svg {
    width: 150px;
    height: auto;
  }
`

const Etherscan = styled(ButtonWithGradient)`
  border-radius: 6px;
  padding: 0 24px;
`

const TokenizationDisclaimer = ({
  projectName,
  tokenName,
  tokenSymbol,
  personalAccessToken,
  onFormDataChange,
  onHeaderChange,
  onSubHeaderChange,
  market,
  onMetricsChange
}: DisclaimerProps) => {
  // const [property, setProperty] = useState<string>('')
  const { postSignGitHubMarketAssetHandler, isLoading } = usePostSignGitHubMarketAsset()
  const { createAndAuthenticate, isLoading: isAuthenticating } = useCreateAndAuthenticate()
  const tokenize = async () => {
    const key = 'tokenization'
    message.loading({ content: 'now tokenizing...', duration: 0, key })

    const authRequestData: [string, string] | undefined = await (async () => {
      // If the target market is not NpmMarket, it is the GitHubMarket with Khaos.
      // TODO: Needs dynamically switch to use Khaos or not use Khaos by target Market

      const repository: string = projectName

      // Create a public signature from the user's signature and the entered PAT.
      const khaos = await postSignGitHubMarketAssetHandler(repository, personalAccessToken).catch(() => undefined)
      console.log({ khaos })
      if (!khaos) {
        message.error({ content: 'Failed to generate Khaos Public Signature' })
        return
      }
      message.success({ content: 'Successful creation of public signature by Khaos' })
      return [repository, khaos.publicSignature || ''] as [string, string]
    })()
    if (!authRequestData) {
      message.error({ content: 'Failed to generate credentials' })
      return
    }

    // Send Ethereum transaction and create new Property Tokens, aka Creator Tokens, and starts authentication flow.
    const results = await createAndAuthenticate(tokenName, tokenSymbol, market, authRequestData)
    if (!results) {
      message.error({ content: 'Failed to create a transaction' })
      return
    }
    // TODO: Function to be called to tokenize based input
    // New Property Tokens have been created.
    /**
     * results interfaces
     *
     * property - created new Property address
     * transaction - Ethereum transaction information
     * waitForAuthentication - Promise that expects resolve by completing the authentication
     */
    message.success({ content: `success creation your tokens: ${results.property}` })
    message.loading({ content: 'now authenticating...', duration: 0, key })

    // Wait for completing the authentication
    const metricsAddress = await results.waitForAuthentication()
    message.success({ content: 'completed tokenization!', key })

    // Completed the all flow
    // setProperty(results.property)
    onMetricsChange(metricsAddress)
    onHeaderChange('Succesfully Tokenized Your Project')
    onSubHeaderChange(
      'Please wait for your project to become available on Stakes Social. This can take several minutes.'
    )
  }

  const handleCancel = () => {
    onHeaderChange('Create an Asset')
    onSubHeaderChange('Create an asset or authenticate an existing pool.')
    onFormDataChange(undefined)
  }

  return (
    <DisclaimerContainer>
      <Row>
        <h2 style={{ textAlign: 'left' }}>Overview</h2>
      </Row>
      <Row>
        <Span>Project Name:</Span>
        <Span>{projectName}</Span>
      </Row>
      <Row>
        <Span>Token Name:</Span>
        <Span>{tokenName}</Span>
      </Row>
      <Row>
        <Span>Token Symbol:</Span>
        <Span>{tokenSymbol}</Span>
      </Row>
      <Row>
        <Span>Supply:</Span>
        <Span>10,000,000</Span>
      </Row>
      <Row>
        <div>
          <Span>Dev Protocol</Span>
          <Span style={{ marginTop: 0 }}>Treasury Fee:</Span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end' }}>
          <div style={{ display: 'flex', width: 'fit-content', alignItems: 'center' }}>
            <Span>500,000</Span>
            <InfoContainer>
              <a
                style={{ textDecoration: 'none', color: 'black' }}
                href="https://medium.com/devprtcl/community-proposal-implement-a-creator-token-fee-to-create-an-oss-etf-d74386909339"
                rel="noopener noreferrer"
                target="_blank"
              >
                <InfoCircleFilled />
              </a>
            </InfoContainer>
          </div>
        </div>
      </Row>
      <Row>
        <div style={{ gridColumn: '1/-1', display: 'flex', justifyContent: 'space-around' }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <span style={{ color: 'grey', cursor: 'pointer' }} onClick={() => handleCancel()}>
              Cancel
            </span>
          </div>
          <SubmitContainer>
            <Submit onClick={tokenize} disabled={isLoading || isAuthenticating}>
              Tokenize
            </Submit>
          </SubmitContainer>
        </div>
      </Row>
    </DisclaimerContainer>
  )
}

const AuthenticateNewAsset = (_: Props) => {
  const [header, setHeader] = useState('Create an Asset')
  const [subHeader, setSubHeader] = useState('Create an asset or authenticate an existing pool.')
  const [, market] = getPath(useRouter().asPath)
  const [formData, setFormData] = useState<
    { projectName: string; tokenName: string; tokenSymbol: string; personalAccessToken: string } | undefined
  >(undefined)
  const [metrics, setMetrics] = useState<string>('')

  console.log('formData: ', formData)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2>{header}</H2>
        <span>{subHeader}</span>
      </Headline>
      <ResponsiveContainer>
        {!formData && (
          <AuthForm
            onFormDataSubmit={setFormData}
            onHeaderChange={setHeader}
            onSubHeaderChange={setSubHeader}
            market={market}
          />
        )}
        {formData && !metrics && (
          <TokenizationDisclaimer
            market={market}
            onFormDataChange={setFormData}
            onHeaderChange={setHeader}
            onSubHeaderChange={setSubHeader}
            projectName={formData.projectName}
            tokenName={formData.tokenName}
            tokenSymbol={formData.tokenSymbol}
            personalAccessToken={formData.personalAccessToken}
            onMetricsChange={setMetrics}
          />
        )}

        {metrics && (
          <MetricsContainer>
            <ResultContainer>
              <SuccessContainer>
                <SuccessLogo />
              </SuccessContainer>
              <div style={{ display: 'flex', width: '300px', justifyContent: 'center' }}>
                <Etherscan
                  style={{ width: '100%' }}
                  alternative={true}
                  rel="noopener noreferrer"
                  target="_blank"
                  key="etherscan"
                  href={`https://etherscan.io/address/${metrics}`}
                >
                  <span>Go to Etherscan</span>
                </Etherscan>
                ,
                {/* <GoPool key="property" href={`/${property}`} type="primary">
                See Property
              </GoPool> */}
              </div>
            </ResultContainer>
          </MetricsContainer>
        )}
      </ResponsiveContainer>
      <Footer />
    </div>
  )
}

export default AuthenticateNewAsset

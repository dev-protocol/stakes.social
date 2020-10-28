import React, { useCallback, useState } from 'react'
import { Form, Input, Button, Result } from 'antd'
import { useMarketScheme, useAuthenticate, useCreateAndAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'
import { useEffectAsync } from 'src/fixtures/utility'
import styled from 'styled-components'
import Text from 'antd/lib/typography/Text'
import { useDropzone } from 'react-dropzone'

const NpmMarketContractAddress = '0x88c7B1f41DdE50efFc25541a2E0769B887eB2ee7'

export interface Props {
  market: string
  property?: string
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
`

const Capitalized = styled.span`
  text-transform: capitalize;
`

const FileSelector = styled.div`
  padding: 2rem;
  border-radius: 5px;
  background: linear-gradient(45deg, #29b7ff, transparent);
  cursor: pointer;
  [class^='ant'] {
    display: none;
  }
`

const DefaultMarketSchemeInput = ({ schemeList }: { schemeList: string[] }) => {
  return (
    <>
      {schemeList.map(scheme => (
        <Form.Item name={scheme} rules={[{ required: true, message: 'Please input name.' }]} key={scheme}>
          <Input placeholder={scheme} />
        </Form.Item>
      ))}
    </>
  )
}

const GitHubMarketSchemeInput = () => {
  return (
    <>
      <Form.Item
        name="repositoryName"
        rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
        key="repositoryName"
      >
        <Input placeholder="your/awesome-repos" />
      </Form.Item>
      <Form.Item
        name="personalAccessToken"
        rules={[{ required: true, message: 'Please input PAT.' }]}
        key="personalAccessToken"
      >
        <Input placeholder="Personal Access Token" />
      </Form.Item>
      <p>
        Please{' '}
        <a href="https://github.com/settings/tokens/new" target="_blank" rel="noreferrer">
          create a Personal Access Token <Text mark>without all scopes</Text>
        </a>{' '}
        and paste it here. PAT is securely oraclize using Khaos(
        <a href="https://github.com/dev-protocol/khaos" target="_blank" rel="noreferrer">
          *
        </a>
        ).
      </p>
    </>
  )
}

const PropertyInput = () => {
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
  }, [])
  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: ['image/jpeg', 'image/png', 'image/gif'] })

  return (
    <>
      <h2>
        <Capitalized>Asset information</Capitalized>
      </h2>
      <Row>
        <label>
          <Capitalized>Asset logo</Capitalized>
        </label>

        <FileSelector {...getRootProps()}>
          <Form.Item name="propertyLogo" key="propertyLogo">
            <input {...getInputProps()} />
          </Form.Item>
          <span>Drag and Drop or Browse</span>
        </FileSelector>
      </Row>
      <Row>
        <label>
          <Capitalized>Asset name</Capitalized>
        </label>
        <Form.Item
          name="propertyName"
          rules={[{ required: true, message: 'Please input your asset name' }]}
          key="propertyName"
        >
          <Input />
        </Form.Item>
      </Row>
      <Row>
        <label>
          <Capitalized>Symbol</Capitalized>
        </label>
        <Form.Item
          name="propertySymbol"
          rules={[{ required: true, message: 'Please input your asset symbol' }]}
          key="propertySymbol"
        >
          <Input />
        </Form.Item>
      </Row>
    </>
  )
}

const Notify = () => (
  <Result
    title="GitHub Market is currently invite-only"
    style={{ marginBottom: '6rem', padding: 0 }}
    extra={
      <>
        <p>Please send our team an invitation request via the form.</p>
        <p>
          <Button type="primary" href="/invite/github" target="_blank">
            Apply
          </Button>
        </p>
      </>
    }
  />
)

export const AuthForm = ({ market, property }: Props) => {
  const [schemeList, setSchemeList] = useState<string[]>([])
  const [metrics, setMetrics] = useState<string>('')
  const { marketScheme } = useMarketScheme()
  const { postSignGitHubMarketAssetHandler } = usePostSignGitHubMarketAsset()
  const { authenticate } = useAuthenticate()
  const { createAndAuthenticate } = useCreateAndAuthenticate()
  const onFinish = async (values: any) => {
    const authRequestData: string[] =
      market === NpmMarketContractAddress
        ? Object.values(values)
        : await (async () => {
            const repository: string = values.repositoryName
            const personalAccessToken = values.personalAccessToken
            const khaos = await postSignGitHubMarketAssetHandler(repository, personalAccessToken)
            return [repository, khaos.publicSignature || '']
          })()

    const metrics = await (property
      ? authenticate(market, property, authRequestData)
      : ((name, symbol) => createAndAuthenticate(name, symbol, market, authRequestData))(
          values.propertyName,
          values.propertySymbol
        ))

    if (metrics) {
      setMetrics(metrics)
    }
  }

  useEffectAsync(async () => {
    const schemeList = await marketScheme(market)
    setSchemeList([...(schemeList || [])])
  }, [])

  return (
    <Container>
      {market !== NpmMarketContractAddress && metrics === '' ? <Notify /> : ''}
      <Row>
        {property ? (
          <>
            <span>Associating Property:</span>
            <span>{property}</span>
          </>
        ) : (
          ''
        )}
      </Row>
      {metrics ? (
        <Result
          status="success"
          title="Successfully Authenticated Your Asset!"
          subTitle="Viewing a new asset will take dozens of minutes, but you can also check it out right away on Etherscan."
          extra={[
            <Button key="etherscan" href={`https://etherscan.io/address/${metrics}`}>
              Etherscan
            </Button>,
            <Button key="property" href={`/${property}`} type="primary">
              Go the Property
            </Button>
          ]}
        />
      ) : (
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
          {property ? '' : <PropertyInput />}
          <Row>
            <span>Arguments:</span>
            <div>
              {market === NpmMarketContractAddress ? (
                <DefaultMarketSchemeInput schemeList={schemeList} />
              ) : (
                <GitHubMarketSchemeInput />
              )}
              <Button type="primary" htmlType="submit">
                Authenticate
              </Button>
            </div>
          </Row>
        </Form>
      )}
    </Container>
  )
}

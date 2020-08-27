import React, { useState } from 'react'
import { Form, Input, Button, Result } from 'antd'
import { useMarketScheme, useAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'
import { useEffectAsync } from 'src/fixtures/utility'
import styled from 'styled-components'
import Text from 'antd/lib/typography/Text'

const NpmMarketContractAddress = '0x88c7B1f41DdE50efFc25541a2E0769B887eB2ee7'

export interface Props {
  market: string
  property: string
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
`
const Row = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 768px) {
    grid-template-columns: 150px 1fr;
    & > *:first-child {
      text-align: right;
    }
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
        <Input placeholder="repository name" />
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
        and paste it here.
      </p>
    </>
  )
}

const Notify = () => (
  <Result
    title="GitHub Market is currently by invitation only"
    style={{ marginBottom: '6rem', padding: 0 }}
    extra={
      <>
        <p>Please send our team an invitation request via the form.</p>
        <p>
          <Button type="primary" href="https://forms.gle/MVxEvdPNNig9YdBu6" target="_blank">
            Apply form
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

    const metrics = await authenticate(market, property, authRequestData)

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
        <span>Associating Property:</span>
        <span>{property}</span>
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
        <Row>
          <span>Arguments:</span>
          <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
            {market === NpmMarketContractAddress ? (
              <DefaultMarketSchemeInput schemeList={schemeList} />
            ) : (
              <GitHubMarketSchemeInput />
            )}
            <Button type="primary" htmlType="submit">
              Authenticate
            </Button>
          </Form>
        </Row>
      )}
    </Container>
  )
}

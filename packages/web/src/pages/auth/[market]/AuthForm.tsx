import React, { useState } from 'react'
import { Form, Button, Result } from 'antd'
import { useAuthenticate, useCreateAndAuthenticate } from 'src/fixtures/dev-kit/hooks'
import { usePostSignGitHubMarketAsset } from 'src/fixtures/khaos/hooks'
import styled from 'styled-components'
import Input from 'src/components/molecules/Input'

const NpmMarketContractAddress = '0x88c7B1f41DdE50efFc25541a2E0769B887eB2ee7'

export interface Props {
  market: string
  property?: string
}

const Container = styled.div`
  display: grid;
  grid-gap: 1rem;
  max-width: 760px;
`
const Row = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  @media (min-width: 768px) {
    grid-template-columns: 240px 1fr;
    & > *:first-child {
      text-align: left;
    }
  }
`

const FormTitle = styled.div`
  display: grid;
  grid-gap: 1rem;
  margin-bottom: 1em;
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

const TextArea = styled.textarea`
  outline: none;
  border: 1px solid lightgrey;
  border-radius: 6px;
  width: 100%;
  padding-left: 10px;

  &:hover {
    transition: all 0.2s ease-in;
    border: 1px solid lightgrey;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border: 1px solid grey;
    box-shadow: 0 0 0 1px lightgrey;
  }
`

const ButtonContainer = styled.div`
  width: auto;
  align-self: flex-end;
`
const Submit = styled.button`
  padding: 10px 40px;
  border-radius: 6px;
  border: none;
  background-image: linear-gradient(to right, #2f80ed, #1ac9fc);
  color: white;
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);

  cursor: pointer;
  :hover {
    transition: ease-in-out 0.2s;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  }
`

export const AuthForm = ({ market, property }: Props) => {
  const [metrics, setMetrics] = useState<string>('')
  const { postSignGitHubMarketAssetHandler, isLoading } = usePostSignGitHubMarketAsset()
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

  return (
    <div style={{ maxWidth: '760px' }}>
      <Container>
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
          <Form name="basic" style={{ padding: '1em' }} initialValues={{ remember: true }} onFinish={onFinish}>
            <FormTitle>
              <h2>Asset Information</h2>
            </FormTitle>

            <Row>
              <Span>Asset name:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Token symbol:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Token supply:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Creator wallet address:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Property description:</Span>
              <Form.Item name="useCase" rules={[{ required: true, type: 'string' }]} key="useCase">
                <TextArea rows={4} placeholder="Our project aims to..." />
              </Form.Item>
            </Row>

            <Row>
              <Span>Creator wallet address:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Project website:</Span>
              <Form.Item
                name="repositoryName"
                rules={[{ required: true, message: 'Please input GitHub Repository name (e.g., your/awesome-repos)' }]}
                key="repositoryName"
              >
                <Input label="repositoryName" placeholder="your/awesome-repos" />
              </Form.Item>
            </Row>

            <Row>
              <Span>Add tags:</Span>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Form.Item name="ask" rules={[{ type: 'string' }]} key="ask">
                  <Input placeholder="I'd like to say..." label="ask" />
                </Form.Item>
                <ButtonContainer>
                  <Submit type="submit" disabled={isLoading}>
                    Tokenize
                  </Submit>
                </ButtonContainer>
              </div>
            </Row>
          </Form>
        )}
      </Container>
    </div>
  )
}

export default AuthForm

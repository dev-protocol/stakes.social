import React from 'react'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { LinkWithNetwork } from 'src/components/atoms/LinkWithNetwork'
import { ControlChain } from 'src/components/organisms/ControlChain'

type Props = {}

const SubmitApplicationContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, black, white 400%);
  border-bottom-color: none;
  padding: 1em 4em 3em 4em;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 2px 4px -1px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  h3 {
    color: white;
    margin-bottom: 1em;
  }
`

const Span = styled.span`
  color: #b6e1ee;
`

const A = styled.a`
  align-self: center;
  color: #1d73f1;
  border-bottom-color: none;
  font-size: 1.1em;
`

export const CreateOrAuthenticateProperty = (_: Props) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline>
        <H2>Create an Asset</H2>
        <span>Request to join our Creator ecosystem</span>
      </Headline>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          maxWidth: '680px',
          margin: 'auto',
          flexGrow: 1
        }}
      >
        <LinkWithNetwork href={'/create/github'} passHref>
          <SubmitApplicationContainer>
            <h3>GitHub</h3>
            <Span>Provide Sustainable funding to your</Span>
            <Span>OSS project with Dev Protocol.</Span>
          </SubmitApplicationContainer>
        </LinkWithNetwork>

        <Span style={{ margin: '1em 0', alignSelf: 'center', color: '#9F9F9F' }}>Or</Span>
        <LinkWithNetwork href={'/create/associate/0x34A7AdC94C4D41C3e3469F98033B372cB2fAf318'} passHref>
          <A>Authenticate an existing project</A>
        </LinkWithNetwork>
      </div>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default CreateOrAuthenticateProperty

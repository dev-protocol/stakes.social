import React from 'react'
import { useRouter } from 'next/router'
import { InvitationRequestForm } from 'src/components/organisms/InvitationRequestForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { getPath } from 'src/fixtures/utility/route'
import { ControlChain } from 'src/components/organisms/ControlChain'

type Props = {}

const WrapContainer = styled.div`
  max-width: 690px;
  margin: auto;
  padding-top: 1rem;
  word-break: break-all;
  flex-grow: 1;
`

const InvitationRequest = (_: Props) => {
  const [, market] = getPath(useRouter().asPath)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Headline height={300}>
        <H2>Creator Waitlist</H2>
        <p style={{ textAlign: 'center' }}>
          Dev Protocol is now accepting applications to onboard your GitHub OSS project.
        </p>
      </Headline>
      <WrapContainer>
        <InvitationRequestForm market={market} />
      </WrapContainer>
      <ControlChain />
      <Footer />
    </div>
  )
}

export default InvitationRequest

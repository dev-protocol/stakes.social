import React from 'react'
import { useRouter } from 'next/router'
import { InvitationRequestForm } from 'src/components/organisms/InvitationRequestForm'
import { Footer } from 'src/components/organisms/Footer'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'

type Props = {}

const WrapContainer = styled.div`
  max-width: 760px;
  margin: auto;
  padding: 1rem;
  word-break: break-all;
`

const InvitationRequest = (_: Props) => {
  const { market } = useRouter().query as { market: string }

  return (
    <>
      <Header />
      <Headline height={300}>
        <H2>Invitation Request</H2>
        <p>
          Dev Protocol is now accepting creator{"'"}s applications to onboard your Github assets to Stakes.Social. Let
          {"'"}s make open source sustainable!
        </p>
      </Headline>
      <WrapContainer>
        <InvitationRequestForm market={market} />
      </WrapContainer>
      <Footer />
    </>
  )
}

export default InvitationRequest

import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import { EarlyAccess } from 'src/components/atoms/EarlyAccess'
import { Container } from 'src/components/atoms/Container'
import { H1 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { useRouter } from 'next/router'

const Heading = styled.div`
  display: grid;
`

const Profile = () => {
  const { accountAddress } = useRouter().query as { accountAddress: string }

  return (
    <>
      <EarlyAccess></EarlyAccess>
      <Header></Header>
      <Container>
        <Heading>
          <H1>Profile of {accountAddress}</H1>
        </Heading>
      </Container>
      <Footer />
    </>
  )
}

export default Profile

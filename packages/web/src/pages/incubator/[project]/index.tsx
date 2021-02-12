import React from 'react'
import styled from 'styled-components'

// import { Span } from 'src/components/organisms/Incubator/Typography'
// import { getPath } from 'src/fixtures/utility/route'
// import { useRouter } from 'next/router'
import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`

const BackArrowContainer = styled.div`
  display: flex;
  padding-top: 1em;

  > svg {
    cursor: pointer;
  }
`

const OnboardingPage = () => {
  // const [, project] = getPath(useRouter().asPath)
  // TODO: Fetch data from strapi based on project

  return (
    <>
      <IncubatorHeader />
      <Container>
        <Link href="/incubator" as="/incubator" passHref>
          <BackArrowContainer>
            <BackArrow />
          </BackArrowContainer>
        </Link>
      </Container>
      <Footer />
    </>
  )
}

export default OnboardingPage

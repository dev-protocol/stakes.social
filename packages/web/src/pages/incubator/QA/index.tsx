import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Hr from 'src/components/organisms/Incubator/molecules/Hr'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import { Span } from 'src/components/organisms/Incubator/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1200px;
`

const BackArrowContainer = styled.div`
  display: flex;
  padding: 1em 0 3em 0;

  > svg {
    cursor: pointer;
  }
`

const QAGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 4em;
`

const QAPage = () => {
  // const [, project] = getPath(useRouter().asPath)
  // TODO: Fetch data from strapi based on project

  return (
    <>
      <IncubatorHeader />
      <Container>
        <BackArrowContainer>
          <Link href="/incubator" as="/incubator" passHref>
            <div style={{ cursor: 'pointer' }}>
              <BackArrow />
            </div>
          </Link>
        </BackArrowContainer>
      </Container>

      <Container>
        <Span fontSize="40px" fontWeight="bold">
          {'Q&As'}
        </Span>

        <QAGrid style={{ paddingTop: '2em' }}>
          <Span fontSize="24px">What is Dev Protocol?</Span>
          <Span fontSize="20px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </Span>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <Span fontSize="24px">What is Stakes Social?</Span>
          <Span fontSize="20px">
            Stakes Social is Dev Protocol’s user facing application where OSS projects and patrons connect. OSS projects
            use Stakes Social to tokenize, obtain patrons, build communities, and incentive stakeholders in order to
            grow their project. Patrons use Stakes Social to stake the DEV token for OSS projects they support.
          </Span>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <Span fontSize="24px">How much time is remaining in the round?</Span>
          <Span fontSize="20px">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Span>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <Span fontSize="24px">What happens at the end of the round?</Span>
          <Span fontSize="20px">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </Span>
        </QAGrid>
      </Container>

      <Footer />
    </>
  )
}

export default QAPage

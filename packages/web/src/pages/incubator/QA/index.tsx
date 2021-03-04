import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import IncubatorHeader from 'src/components/organisms/Incubator/Header'
import Hr from 'src/components/organisms/Incubator/molecules/Hr'
import Footer from 'src/components/organisms/Incubator/Footer'
import BackArrow from 'src/components/organisms/Incubator/molecules/BackArrow'
import { H1Large, H2M, Text1L } from 'src/components/organisms/Incubator/Typography'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  max-width: 1128px;
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
  grid-template-columns: 0.5fr 1fr;
  column-gap: 124px;
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
        <H1Large>{'Q&As'}</H1Large>

        <QAGrid style={{ paddingTop: '2em' }}>
          <H2M>What is Stakes Social?</H2M>
          <Text1L>
            Stakes Social is Dev Protocol’s user facing application where OSS projects and patrons connect. OSS projects
            use Stakes Social to tokenize, obtain patrons, build communities, and incentive stakeholders in order to
            grow their project. Patrons use Stakes Social to stake the DEV token for OSS projects they support.
          </Text1L>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <H2M>What is Dev Protocol?</H2M>
          <Text1L>
            Dev Protocol is a blockchain protocol that allows Open Source projects to sustainably fund their
            development. Patrons stake the DEV token for projects they want to fund. The protocol then mints new DEV
            tokens that are split between the OSS project and Patron. Dev Protocol is the only platform that allows both
            Patrons and OSS projects to earn money by supporting each other. The Protocol’s APY is based on DEV staked
            on the protocol and OSS projects onboarded.
          </Text1L>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <H2M>How much time is remaining in the round?</H2M>
          <Text1L>
            We offer projects the opportunity to claim their project at any time, but we recommend that maintainers
            claim at the end of the round to receive the maximum funding.
          </Text1L>
        </QAGrid>
        <Hr />

        <QAGrid style={{ paddingTop: '1em' }}>
          <H2M>What happens at the end of the round?</H2M>
          <Text1L>
            At the end of the round projects the Dev Protocol Treasury removes its stakes in each project. When this
            occurs your project will stop accumulating funding. In order to receive more funding claim your project and
            build a community of Patrons to start staking DEV tokens for your project!
          </Text1L>
        </QAGrid>
      </Container>

      <Footer />
    </>
  )
}

export default QAPage

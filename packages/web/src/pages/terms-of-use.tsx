import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Headline } from 'src/components/atoms/Headline'
import { H2 } from 'src/components/atoms/Typography'
import styled from 'styled-components'
import { Footer } from '../components/organisms/Footer'

const NoteWrapper = styled.div`
  margin: 2rem auto 0;
  padding: 0 1rem;
  width: 100%;
  max-width: 1200px;
`

const Title = styled.div`
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: 500;
`

const Content = styled.p`
  margin: 0 0 3.25rem;
  font-size: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`

const TermWrapper = styled.div`
  margin: 0 auto;
  padding: 0 1rem 10rem;
  width: 100%;
  max-width: 1200px;
`

const termsOfUse = () => {
  return (
    <>
      <Header />
      <NoteWrapper>
        <Title>Notes</Title>
        <Content>
          For All Users
          <br />
          Rude, annoying or unethical behavior towards other users is not allowed.
          <br />
          Stakes.social is intended for contributors to the OSS ecosystem. Unauthorized Github accounts or deleting
          repositories after onboarding will be punished as fraud.
          <br />
          Please use the site with good manners.
        </Content>
      </NoteWrapper>
      <Headline>
        <H2>Term of Use</H2>
      </Headline>
      <TermWrapper>
        <Title>Article 1 (Application)</Title>
        <Content>
          These Terms and Conditions shall apply to all relations between Stakes.social and the User.
          <br />
          By on-boarding Stakes.social, the User agrees to be bound by these Terms and Conditions. If you do not agree
          to these Terms and Conditions, you will not be able to use Stakes.social. By using Stakes.social, the user
          agrees to be bound by these Terms and Conditions.
          <br />
          The Company may change the contents of the Service at its sole discretion. If the Company makes modifications
          to the terms of this Agreement, the Company shall notify the Users or post such modifications to the
          Company&apos;s Website. Users who used the Service thereafter or who do not take necessary procedures for
          de-registration within designated period of time shall be deemed to have agreed to the modified terms of the
          Agreement.
        </Content>

        <Title>Article 2 (Prohibited Matters)</Title>
        <Content>
          Users shall not engage in the following acts
          <br />
          (1) Violation of Devprotocol&apos;s CoC (
          <a href={'https://devprotocol.xyz/coc.html'} target={'_blank'} rel="noreferrer">
            https://devprotocol.xyz/coc.html
          </a>
          )
          <br />
          (2) Private or delete properties after onboarding
          <br />
          (3) If you commit a criminal act or an act against public order and morals
          <br />
          (3) When the user is an antisocial force or related party
          <br />
          (4) When the Company judges that the use of the Service is inappropriate, such as interfering with the
          Service.
          <br />
          (5) If the User falls under any of the following items
        </Content>

        <Title>Article 3 (Deletion of Account)</Title>
        <Content>
          The Company may immediately suspend or delete the User&apos;s account on Stakes.social if the User is found to
          committed any of the prohibited acts described in Article 2.
        </Content>

        <Title>Article 4 (Suspension of the Service)</Title>
        <Content>
          Stakes.social reserves the right to suspend or discontinue all or part of the Service without prior notice to
          the User in the event that Stakes.social deems that any of the following reasons exist
          <br />
          (1) When it becomes extremely difficult to continue the Service due to natural disasters such as earthquakes,
          typhoons, and fires, infectious diseases, terrorism, instructions or orders from third parties, or other force
          majeure.
          <br />
          (2) In the event that the computer system or communication lines are shut down due to an accident.
          <br />
          (3) In any other cases where the Company deems it difficult to provide the Service.
          <br />
          The Company shall not be liable for any disadvantage or damage suffered by the User or any third party due to
          the suspension or interruption of the provision of the Service, regardless of the reason.
        </Content>

        <Title>Article 5 (Disclaimer of Warranty and Disclaimer of Liability)</Title>
        <Content>
          The Company shall not provide any warranty to the Users beyond what is stipulated in these Terms of Use.
          <br />
          The User shall investigate whether or not the use of the Service violates laws and regulations applicable to
          the User at its own responsibility and expense, and the Company shall not guarantee that the use of the
          Service by the User complies with laws and regulations applicable to the User.
        </Content>

        <Title>Article 6 (Governing Law and Exclusive Jurisdiction)</Title>
        <Content>
          This Agreement shall be governed by and construed in accordance with the laws of Japan, and all disputes
          arising out of this Agreement shall be subject to the exclusive jurisdiction of the Tokyo District Court as
          the court of first instance.
        </Content>

        <Content>Effective date: June 23, 2021</Content>
      </TermWrapper>
      <Footer></Footer>
    </>
  )
}

export default termsOfUse

import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'
import Text from 'antd/lib/typography/Text'
import { Button } from 'antd'

const Article = styled.article`
  padding: 2em;
`
const Title = styled.h1`
  text-align: center;
`
const SectionHeader = styled.h2`
  text-align: center;
  font-size: 2.8rem;
`
const Deck = styled.iframe`
  display: block;
  width: 100%;
  height: 466px;
  margin: auto;
  border: 0;
  outline: 0;
  border-radius: 3px;
`
const Section = styled.section`
  display: grid;
  grid-gap: 1rem;
  max-width: 1060px;
  margin: 6rem auto;
  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-auto-columns: 0.5fr 0.5fr;
  }

  h3,
  p {
    margin: 0;
  }
  h3 {
    font-size: 1.6rem;
  }
  p {
    font-size: 1.2rem;
  }
  div {
    display: grid;
    grid-gap: 1rem;
  }
`
const Faq = styled.section`
  display: grid;
  grid-gap: 1rem;
  max-width: 1060px;
  margin: 6rem auto;
`
const MavigationButtons = styled.div`
  text-align: center;
  margin: 3rem auto;
`

const HowItWorks = () => {
  return (
    <main>
      <Header />
      <Article>
        <Title>How it works</Title>
        <Deck src="https://drive.google.com/file/d/1KspRC6ruqa1F15kvAxZFDjHGWJR-OeSt/preview"></Deck>
        <MavigationButtons>
          <Button type="link" href="#faq">
            Jump to FAQ
          </Button>
        </MavigationButtons>
        <SectionHeader id="overview">Overview</SectionHeader>
        <Section>
          <h3>What is Dev Protocol?</h3>
          <div>
            <p>Stakes.social is an application based on the Dev Protocol.</p>
            <p>
              The Dev Protocol is a middleware protocol built on Ethereum that allows you to{' '}
              <Text mark>tokenize various activities</Text> by using the Dev Protocol.
            </p>
            <p>
              <Text mark>Staking</Text> DEV on tokenized activity will enable activity owners to mine DEV, and those who
              stake them earn staking reward as an interest.
            </p>
          </div>
        </Section>
        <Section>
          <h3>What is tokenization?</h3>
          <div>
            <p>
              <Text mark>Tokenization</Text> in the Dev Protocol means authenticating an activity and issuing its own
              ERC20-token, called <Text mark>Property</Text>.
            </p>
            <p>
              The Property is an ERC20-token that conforms to the Ethereum standard, so its ownership can be divided
              into small pieces and shared by many people.
            </p>
          </div>
        </Section>
        <Section>
          <h3>What is staking?</h3>
          <div>
            <p>
              <Text mark>Staking</Text> in the Dev Protocol means depositing and locking up on{' '}
              <Text mark>Properties</Text>.
            </p>
            <p>
              Staking against a Property means that you support the ability of that Property to mine. (This works like a
              DPoS.)
            </p>
            <p>The staker can earn a portion of the DEV that the Property has mined during the staking period.</p>
          </div>
        </Section>
        <Section>
          <h3>What are the rewards?</h3>
          <div>
            <p>
              <Text mark>Rewards</Text> in the Dev Protocol means for Property shareholders DEV earned on the outcome of
              the activity, and for stakers, the DEV received as interest.
            </p>
          </div>
        </Section>
        <Section>
          <h3>What is mining?</h3>
          <div>
            <p>
              <Text mark>Mining</Text> in the Dev Protocol means measuring the outcome of the activity associated with a
              Property and issuing new DEV based on the results.
            </p>
            <p>
              The total number of DEV is unlimited. But the higher the amount locked up by the Dev Protocol, the fewer
              new issued DEV there will be, and eventually zero.
            </p>
            <p>
              These algorithms are determined by the contract called Policy and can be updated by the will of the
              people.
            </p>
          </div>
        </Section>
        <Section>
          <h3>Learn more</h3>
          <div>
            <p>
              Read the <a href="//github.com/dev-protocol/protocol/blob/master/docs/WHITEPAPER.md">whitepaper</a>.
            </p>
          </div>
        </Section>
        <SectionHeader id="faq">FAQ</SectionHeader>
        <Faq>
          <h3>When can I get my staking reward?</h3>
          <p>Each time a property is mined, the staking reward increases. Mining can be done by anyone.</p>

          <h3>When can I do minig?</h3>
          <p>
            npm market requires a minimum of one day to mine. You can find out when you can mine by pressing{' '}
            <strong>mining</strong>. It displays the block number on Ethereum.
          </p>

          <h3>What is the minimum amount of staking?</h3>
          <p>It is the same as the minimum unit of DEV, which is 0.000000000000000001.</p>

          <h3>How much reward will I get?</h3>
          <p>Reward rates are different for each project. </p>

          <h3>The % shown in the site is the yearly ROI right?</h3>
          <p>
            It{`'`}s the value of the last 3-month avg. Dev Protocol was deployed in January and the staking went live
            in March.
          </p>

          <h3>Why are the reward rates so high?</h3>
          <p>
            Staking rewards fluctuate depending on what you are staking in, but currently, they generally tend to be
            high. It is dictated by the governance of the protocol, which goes down as the staking rate goes up. Now we
            are in the initial phase.{' '}
            <a
              href="//github.com/dev-protocol/protocol/blob/master/docs/POLICY.md#rewards"
              target="_blank"
              rel="noreferrer"
            >
              Please see the Policy to detail.
            </a>
          </p>

          <h3>Is the supply of Dev tokens fixed or unlimited?</h3>
          <p>
            It{`'`}s not fixed, but the limit will come later. The total supply increases a little each time it is
            mined. The higher the staking rate, the less new coins will come near zero.
          </p>

          <h3>The more the interest the more rewards you receive?</h3>
          <p>The higher avg intrest rate is, the more rewards you will get.</p>

          <h3>Which project shoud I stake?</h3>
          <p>
            Every projects need support, so please stake as want to stake. Any project would have a great pleasure with
            you.
          </p>

          <h3>Why do I have to do this?</h3>
          <p>
            Dev protcol is run by policy, and policy is suggested and voted on by the users. If you have an opinion, you
            are always welcome to suggest a policy.
          </p>
        </Faq>
      </Article>
      <Footer />
    </main>
  )
}

export default HowItWorks

import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'
import Text from 'antd/lib/typography/Text'

const Article = styled.article`
  padding: 2em;
`
const Title = styled.h1`
  text-align: center;
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
  grid-gap: 1em;
  max-width: 1060px;
  margin: 6em auto;
  @media (min-width: 768px) {
    grid-auto-flow: column;
    grid-auto-columns: 0.5fr 0.5fr;
  }

  h2,
  p {
    margin: 0;
  }
  h2 {
    font-size: 1.8em;
  }
  p {
    font-size: 1.2em;
  }
  div {
    display: grid;
    grid-gap: 1em;
  }
`

const HowItWorks = () => {
  return (
    <main>
      <Header />
      <Article>
        <Title>How it works</Title>
        <Deck src="https://drive.google.com/file/d/1KspRC6ruqa1F15kvAxZFDjHGWJR-OeSt/preview"></Deck>
        <Section>
          <h2>What is Dev Protocol?</h2>
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
          <h2>What is tokenization?</h2>
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
          <h2>What is staking?</h2>
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
          <h2>What are the rewards?</h2>
          <div>
            <p>
              <Text mark>Rewards</Text> in the Dev Protocol means for Property shareholders DEV earned on the outcome of
              the activity, and for stakers, the DEV received as interest.
            </p>
          </div>
        </Section>
        <Section>
          <h2>What is mining?</h2>
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
          <h2>Learn more</h2>
          <div>
            <p>
              Read the <a href="//github.com/dev-protocol/protocol/blob/master/docs/WHITEPAPER.md">whitepaper</a>.
            </p>
          </div>
        </Section>
      </Article>
      <Footer />
    </main>
  )
}

export default HowItWorks

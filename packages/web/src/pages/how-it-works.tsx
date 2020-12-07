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
const SubSectionHeader = styled.h3`
  text-align: center;
  font-size: 2.2rem;
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
  h4,
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
    <>
      <main>
        <Header />
        <Article>
          <Title>How it works</Title>
          <Deck src="https://drive.google.com/file/d/1KspRC6ruqa1F15kvAxZFDjHGWJR-OeSt/preview"></Deck>
          <MavigationButtons>
            <Button type="link" href="#faq">
              FAQ
            </Button>
            <Button type="link" href="#creators">
              For Creators
            </Button>
            <Button type="link" href="#dev">
              About DEV
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
                <Text mark>Staking</Text> DEV on tokenized activity will enable activity owners to mine DEV, and those
                who stake them earn staking reward as an interest.
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
                Staking against a Property means that you support the ability of that Property to mine. (This works like
                a DPoS.)
              </p>
              <p>The staker can earn a portion of the DEV that the Property has mined during the staking period.</p>
            </div>
          </Section>
          <Section>
            <h3>What are the rewards?</h3>
            <div>
              <p>
                <Text mark>Rewards</Text> in the Dev Protocol means for Property shareholders DEV earned on the outcome
                of the activity, and for stakers, the DEV received as interest.
              </p>
            </div>
          </Section>
          <Section>
            <h3>Learn more</h3>
            <div>
              <p>
                Read the <a href="//github.com/dev-protocol/protocol/blob/main/docs/WHITEPAPER.md">whitepaper</a>.
              </p>
            </div>
          </Section>
          <SectionHeader id="faq">FAQ</SectionHeader>
          <SubSectionHeader>About Staking</SubSectionHeader>
          <Faq>
            <h4>How to stake?</h4>
            <p>
              There are a bunch of tokenized properties lined up on <a href="">Stakes.social</a>. Open anyone, and you
              can stake. <a href="/">Stakes.social</a> is a first DApp on Dev Protocol. Please keep in mind it is early
              access ver, not complete development.
            </p>

            <h4>What kind of creators are there?</h4>
            <p>
              Since the Dev Protocol started with an OSS focus, there are currently OSS developers registered. And the
              properties lined up are the OSS on{' '}
              <a href="//www.npmjs.com" target="_blank" rel="noreferrer">
                npm
              </a>
              . There are going to be more and more diverse properties, such as creators and works. (For example,
              musician properties and album properties.)
            </p>

            <h4>When can I get my staking reward?</h4>
            <p>
              You will see them in real-time. (Per block of ethereum=15 seconds) <br />
              No more mining fees are needed after DIP4.
            </p>

            <h4>What is the minimum amount of staking?</h4>
            <p>It is the same as the minimum unit of DEV, which is 0.000000000000000001.</p>

            <h4>How much staking reward will I get?</h4>
            <p>
              The staking ROI/APY is the same for all properties. You can see the APY and Annual Supply Growth on the
              top of <a href="/">Stakes.social</a>.
            </p>

            <h4>Which project should I stake?</h4>
            <p>
              Staking on a project is supporting the creators of that project. Every project needs support, so please
              stake where you want. Your favorite properties, and those of your friends, would be good too. Any project
              would be happy to have you staking with them.{' '}
            </p>

            <h4>When can I cancel my staking?</h4>
            <p>You can cancel staking at any time.</p>

            <h4>When can I withdraw my staking?</h4>
            <p>
              You can also withdraw immediately after canceling. The period between cancellation and withdrawal is
              governed by Policy, and now, you can withdraw in 1 block (=immediately).
            </p>

            <h4>Why do I have to do this?</h4>
            <p>
              Dev protocol is run by policy, and policy is suggested and voted on by the users. If you have an opinion,
              you are always welcome to suggest a policy.
            </p>
          </Faq>
          <SubSectionHeader id="creators">For Creators</SubSectionHeader>
          <Faq>
            <h4>What can I do with stakes.social?</h4>
            <p>You can earn creator rewards by tokenizing your work and accounts. </p>

            <h4>How do I create a property? </h4>
            <p>
              Read{' '}
              <a
                href="//spectrum.chat/devtoken/general/how-to-create-a-new-property~9c61c516-ffb2-48f5-8323-c88763abd422"
                target="_blank"
                rel="noreferrer"
              >
                this guide
              </a>{' '}
              to create a property. This feature is a beta, wonderful features will be added in the future. *No DEV in
              fees now.
            </p>

            <h4>What should I do after creating a property?</h4>
            <p>Share the property URL and collect staking.</p>

            <h4>What is holder rewards and how much holder rewards will I get?</h4>
            <p>
              Holder rewards mean the property owner{`'`}s rewards. You can see the APY - Annual Percentage Yield on the
              top of <a href="/">Stakes.social</a>. This shows how many percent of the staked numbers increase in a
              year. For example, if your staked is 100 DEV and the APY is 40%, then it will increase by 40 DEV in a
              year.
            </p>

            <h4>How much money do creators receive?</h4>
            <p>
              In June, total creator rewards was $358,354. It{`'`}s worth noting that this is a profit for the OSS
              developers. DEV is a great system that enables you to monetize open activities while keeping them open.
            </p>

            <h4>When can I withdraw my holder rewards?</h4>
            <p>You can withdraw whenever you want.</p>

            <h4>What should I do with the withdrawn DEV?</h4>
            <p>You can increase DEV if you stake to someone else, or you can buy and sell DEV on Uniswap.</p>

            <h4>What features are planned to be added in the future?</h4>
            <p>
              There will be creator information, setting reward rates, sharing rewards with contributors, and providing
              benefits to stakers. These are just a few. Please share your ideas with our{' '}
              <a href="https://discord.gg/VwJp4KM" target="_blank" rel="noreferrer">
                Discord
              </a>{' '}
              community.
            </p>
          </Faq>
          <SubSectionHeader id="dev">About DEV token</SubSectionHeader>
          <Faq>
            <h4>Is the supply of Dev tokens fixed or unlimited?</h4>
            <p>
              It{`'`}s not fixed, but the limit will come later. The total supply increases a little each time mining
              occurs and rewards are created. The higher the staking rate, the less new coins, ultimately it will move
              towards zero.
            </p>

            <h4>Where are staking rewards going to come from?</h4>
            <p>It{`'`}s minted.</p>

            <h4>Is there a maximum inflation percentage per year? Is there a minimum as well?</h4>
            <p>The annual inflation rate is designed to be updated based on the amount of staking.</p>

            <h4>If no new tokens get minted, how will staking work after maximum supply is reached?</h4>
            <p>
              Dev Protocol is also a governance token and is governed by Policy. If by any chance the current policy
              remains the same, the staking fee will be zero in the future. We hope to have new policies proposed. There
              are already 7 proposals in the last month alone.{' '}
              <a href="//github.com/dev-protocol/DIPs/issues?q=is%3Aissue+is%3Aclosed" target="_blank" rel="noreferrer">
                https://github.com/dev-protocol/DIPs/issues?q=is%3Aissue+is%3Aclosed
              </a>
            </p>

            <h4>What{`'`}s the total supply going to be if everyone claims their Legacy Dev?</h4>
            <p>Nothing has changed Legacy Dev is already counted in the total supply.</p>

            <h4>How will the Developer tokens (Legacy DEV) be distributed into the pool?</h4>
            <p>Legacy DEV will turn into the current DEV when it is migrated with 1:1 by Migrate contract.</p>

            <p>
              For more information on DEV tokens, please check the <a href="//devprotocol.xyz">Dev Protocol website</a>{' '}
              and{' '}
              <a
                href="//github.com/dev-protocol/protocol/blob/main/docs/WHITEPAPER.md"
                target="_blank"
                rel="noreferrer"
              >
                white paper
              </a>
              .
            </p>
          </Faq>
        </Article>
        <Footer />
      </main>
    </>
  )
}

export default HowItWorks

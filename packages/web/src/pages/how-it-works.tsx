import React from 'react'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'

const Article = styled.article`
  padding: 2em;
`
const Title = styled.h1`
  text-align: center;
`
const MainImage = styled.img`
  width: 100%;
  height: auto;
  max-width: 760px;
  margin: auto;
  display: block;
  border: 10px solid whitesmoke;
  border-radius: 17px;
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
        <MainImage src="/dev-protocol__deck--how-it-works.png"></MainImage>
        <Section>
          <h2>What is Dev Protocol?</h2>
          <div>
            <p>aaaaaaaaa</p>
            <p>aaaaaaaaa</p>
          </div>
        </Section>
        <Section>
          <h2>What is staking?</h2>
          <div>
            <p>aaaaaaaaa</p>
            <p>aaaaaaaaa</p>
          </div>
        </Section>
        <Section>
          <h2>What is mining?</h2>
          <div>
            <p>aaaaaaaaa</p>
            <p>aaaaaaaaa</p>
          </div>
        </Section>
      </Article>
      <Footer />
    </main>
  )
}

export default HowItWorks

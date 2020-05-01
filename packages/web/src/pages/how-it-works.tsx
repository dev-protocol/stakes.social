import React from 'react'
import { Row, Col } from 'antd'
import { Header } from 'src/components/organisms/Header'
import { Footer } from 'src/components/organisms/Footer'
import styled from 'styled-components'

type Props = {}

const Article = styled.article`
  padding: 2em;
`
const Title = styled.h1`
  text-align: center;
`

const HowItWorks = (_: Props) => {
  return (
    <main>
      <Header />
      <Article>
        <Title>How it works</Title>
        <Row>
          <Col>A</Col>
        </Row>
      </Article>
      <Footer />
    </main>
  )
}

export default HowItWorks

import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 0.6rem;
  font-size: 0.8rem;
  background: black;
  color: white;
  text-align: center;
`
const Feature = styled(Wrap)`
  background: #333;
  a {
    color: white;
    text-decoration: underline;
  }
`

export const EarlyAccess = () => (
  <>
    <Wrap>
      <span>🧪Early Access Version🧬</span>
    </Wrap>
    <Feature>
      <span>
        Next:{' '}
        <a href="//github.com/dev-protocol/DIPs/issues/4#issuecomment-641076014" target="_blank" rel="noreferrer">
          DIP4 is rolling out soon
        </a>
      </span>
    </Feature>
  </>
)

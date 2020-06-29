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
  background: linear-gradient(45deg, #00ebff, #f200df 35%, #ff4700);
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
      <span>DIP4 is fully activated!🎉</span>
    </Feature>
  </>
)

import styled from 'styled-components'

interface Props {
  height?: number
}

export const Headline = styled.div<Props>`
  display: flex;
  padding: 2rem 1em;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  h2 {
    text-align: center;
    color: black;
  }
  span {
    text-align: center;
    color: #4f4f4f;
  }
`

import styled from 'styled-components'

interface Props {
  height?: number
}

export const Headline = styled.div<Props>`
  display: flex;
  padding-top: 6em;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  h2 {
    color: black;
  }
  span {
    color: #4f4f4f;
  }
`

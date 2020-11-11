import styled from 'styled-components'

interface Props {
  height?: number
}

export const Headline = styled.div<Props>`
  display: flex;
  padding-top: 1.5rem;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

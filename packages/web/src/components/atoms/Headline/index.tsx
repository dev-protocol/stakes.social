import styled from 'styled-components'

interface Props {
  height?: number
}

export const Headline = styled.div<Props>`
  display: flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  @media (min-width: 768px) {
    height: ${props => props.height || 380}px;
  }
`

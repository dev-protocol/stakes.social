import styled from 'styled-components'

interface Props {
  height?: number
}

export const Headline = styled.div<Props>`
  height: ${props => props.height || 380}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
`

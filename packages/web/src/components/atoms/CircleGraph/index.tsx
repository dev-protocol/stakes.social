import styled from 'styled-components'

interface Props {
  size: number
  percentage: number
}

export const CircleGraph = styled.div<Props>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: #2f80ed;
  background-clip: padding-box;
  border: solid ${props => (props.size / 2) * (1 - props.percentage)}px rgba(47, 128, 237, 0.2);
`

import styled from 'styled-components'

interface Props {
  percentage: number
}

export const CircleGraph = styled.div<Props>`
  position: relative;
  padding-top: 100%;
  border-radius: 50%;
  background: #2f80ed33;
  &::after {
    content: '';
    position: absolute;
    display: block;
    background: #2f80ed;
    width: ${props => props.percentage * 100}%;
    height: ${props => props.percentage * 100}%;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`

import styled from 'styled-components'

export const Button = styled.button<{ backgroundColor?: string; hoverBackgroundColor?: string; textColor?: string }>`
  cursor: pointer;
  width: 110px;
  height: 50px;
  background: ${props => props.backgroundColor || 'black'};
  color: ${props => props.textColor || 'white'};
  border: none;
  font-size: 24px;

  &:hover {
    background: ${props => props.hoverBackgroundColor || '#00d0fd'};
  }
`

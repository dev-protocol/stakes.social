import styled, { css } from 'styled-components'

export const Button = styled.button<{ backgroundColor?: string; hoverBackgroundColor?: string; textColor?: string }>`
  cursor: pointer;
  width: 110px;
  height: 50px;
  ${({ disabled, backgroundColor, textColor }) => css`
    background: ${backgroundColor || 'black'};
    color: ${textColor || 'white'};
    ${disabled &&
    css`
      pointer-events: none;
      background: #999999;
      color: ${textColor || 'white'};
    `}
  `}
  /* background: ${props => props.backgroundColor || 'black'};
  color: ${props => props.textColor || 'white'}; */
  border: none;
  font-size: 24px;

  &:hover {
    background: ${props => props.hoverBackgroundColor || '#00d0fd'};
  }
`

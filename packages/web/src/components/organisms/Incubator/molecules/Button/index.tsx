import styled, { css } from 'styled-components'

export const Button = styled.button<{
  backgroundColor?: string
  hoverBackgroundColor?: string
  textColor?: string
  hoverTextColor?: string
}>`
  cursor: pointer;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
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

  border: none;
  font-size: 20px;

  &:hover {
    background: ${props => props.hoverBackgroundColor || '#00d0fd'};
    color: ${props => props.hoverTextColor || 'black'};
  }
`

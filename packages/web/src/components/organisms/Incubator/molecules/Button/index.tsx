import styled, { css } from 'styled-components'

const sharedStyle = `
  cursor: pointer;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  width: 110px;
  height: 50px;
  border: none;
  font-size: 20px;
`

export const Button = styled.button<{
  backgroundColor?: string
  hoverBackgroundColor?: string
  textColor?: string
  hoverTextColor?: string
}>`
  ${sharedStyle}
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

  &:hover {
    background: ${props => props.hoverBackgroundColor || '#00d0fd'};
    color: ${props => props.hoverTextColor || 'black'};
  }
`

export const LinkAsButton = styled.a<{
  backgroundColor?: string
  hoverBackgroundColor?: string
  textColor?: string
  hoverTextColor?: string
}>`
  ${sharedStyle}
  ${({ backgroundColor, textColor }) => css`
    background: ${backgroundColor || 'black'};
    color: ${textColor || 'white'};
  `}
  &:hover {
    background: ${props => props.hoverBackgroundColor || '#00d0fd'};
    color: ${props => props.hoverTextColor || 'black'};
  }
`

import styled from 'styled-components'

export const Span = styled.span<{ fontSize: string; fontWeight?: string; color?: string }>`
  font-family: WhyteInktrap;
  font-size: ${props => props.fontSize || 'auto'};
  font-weight: ${props => props?.fontWeight || 'auto'};
  color: ${props => props.color || 'auto'};
  #text {
    font-family: WhyteInktrap;
  }
`

export const LinkB = styled.a`
  font-family: WhyteInktrap;
  font-size: 16px;
  text-decoration: none;
  height: fit-content;

  padding: 2px;
  color: black;
  border-bottom: 1px solid black;
  max-width: fit-content;

  :hover {
    color: #5b8bf5;
    border-bottom: 1px solid #5b8bf5;
  }
`

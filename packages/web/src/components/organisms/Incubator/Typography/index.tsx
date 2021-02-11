import styled from 'styled-components'

export const Span = styled.span<{ fontSize: string; fontWeight?: string; color?: string }>`
  font-size: ${props => props.fontSize || 'auto'};
  font-weight: ${props => props?.fontWeight || 'auto'};
  color: ${props => props.color || 'auto'};
`

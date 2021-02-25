import styled from 'styled-components'

export const Span = styled.span<{ fontSize?: string; fontWeight?: string; color?: string }>`
  font-family: WhyteInktrap;
  font-size: ${props => props.fontSize || 'auto'};
  font-weight: ${props => props?.fontWeight || 'auto'};
  color: ${props => props.color || 'auto'};
  #text {
    font-family: WhyteInktrap;
  }
`

export const LinkB = styled.a`
  font-family: 'IBM Plex Mono';
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

export const H1Large = styled(Span)`
  font-size: 40px;
  font-family: WhyteInktrap;
  font-weight: 700;
  line-height: 56px;
`

export const H1M = styled(Span)`
  font-size: 32px;
  font-family: WhyteInktrap;
  font-weight: 700;
  line-height: 48px;
`

export const H1S = styled(Span)`
  font-size: 24px;
  font-family: WhyteInktrap;
  font-weight: 700;
  line-height: 40px;
`

export const H1Xss = styled(Span)`
  font-size: 16px;
  font-family: WhyteInktrap;
  font-weight: 700;
  line-height: 28px;
`

export const H2Xs = styled(Span)`
  font-size: 16px;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  line-height: 28px;
`

export const H2M = styled(Span)`
  font-size: 24px;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  line-height: 40px;
`

export const Text1Xl = styled(Span)`
  font-size: 24px;
  font-family: Whyte;
  font-weight: 400;
  line-height: 40px;
`

export const Text1L = styled(Span)`
  font-size: 20px;
  font-family: Whyte;
  font-weight: 400;
  line-height: 32px;
`

export const Text1M = styled(Span)`
  font-size: 16px;
  font-family: Whyte;
  font-weight: 400;
  line-height: 28px;
`

export const Text1S = styled(Span)`
  font-size: 14px;
  font-family: Whyte;
  font-weight: 400;
  line-height: 24px;
`

export const Text1Xs = styled(Span)`
  font-size: 12px;
  font-family: Whyte;
  font-weight: 400;
  line-height: 20px;
`

export const Text2Xs = styled(Span)`
  font-size: 12px;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  line-height: 20px;
`

export const Text2S = styled(Span)`
  font-size: 14px;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  line-height: 24px;
`

export const Text2M = styled(Span)`
  font-size: 16px;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  line-height: 28px;
`

export const H3S = styled(Span)`
  font-size: 20px;
  font-family: WhyteInktrap;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 2px;
`

export const H3Xs = styled(Span)`
  font-size: 16px;
  font-family: WhyteInktrap;
  font-weight: 400;
  line-height: 28px;
`

export const ButtonM = styled(Span)`
  font-size: 16px;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  line-height: 28px;
`

export const ButtonL = styled(Span)`
  font-size: 20;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  line-height: 32px;
`

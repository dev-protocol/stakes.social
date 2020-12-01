import styled from 'styled-components'

interface Props {
  src?: string
  ratio?: number
}

const Base = styled.div`
  position: relative;
  background-size: cover;
  background-position: center;
`

export const CoverImageOrGradient = styled(Base)<Props>`
  padding-top: ${({ ratio }) => ratio}%;
  background-image: url(${({ src }) => src}),
    linear-gradient(134deg, rgb(47, 67, 237) 0%, rgb(47, 128, 237) 23%, rgb(47, 172, 237) 46%, rgb(190, 208, 230) 100%);
`

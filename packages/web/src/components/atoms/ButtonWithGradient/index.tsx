import { Button } from 'antd'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import { blueGradient } from 'src/styles/gradient'
import styled from 'styled-components'

export const ButtonWithGradient = styled(Button)`
  &,
  &:hover,
  &:active,
  &:focus {
    ${blueGradient()}
    color: white;
    border: 0;
  }
  ${boxShahowWithOnHover()}
`

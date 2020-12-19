import { Button } from 'antd'
import { boxShahowWithOnHover } from 'src/styles/boxShahow'
import { blueGradient, blackGradient } from 'src/styles/gradient'
import styled from 'styled-components'

export const ButtonWithGradient = styled(Button)<{ alternative?: Boolean }>`
  &,
  &:hover,
  &:active,
  &:focus {
    ${props => (props.alternative ? blackGradient() : blueGradient())};
    color: white;
    border: 0;
  }
  ${boxShahowWithOnHover()}
`

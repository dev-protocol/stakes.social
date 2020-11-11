import { Typography } from 'antd'
import styled from 'styled-components'
import { weightNormal } from 'src/styles/font'

const { Text } = Typography

export const H1 = styled.h1`
  ${weightNormal()}
`

export const H2 = styled.h2`
  ${weightNormal()}
`

export const H3 = styled.h3`
  ${weightNormal()}
`

export const H4 = styled.h4`
  ${weightNormal()}
`

export const Body1 = styled(Text)`
  font-size: 14px;
  line-height: 22px;
  color: #000;
`

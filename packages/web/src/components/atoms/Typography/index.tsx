import React, { PropsWithChildren } from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

const { Title, Text } = Typography

export const H1 = ({ children, ...props }: PropsWithChildren<typeof Title>) => (
  <Title level={1} style={{ color: '#2F80ED' }} {...props}>
    {children}
  </Title>
)
export const H2 = ({ children, ...props }: PropsWithChildren<typeof Title>) => (
  <Title level={2} {...props}>
    {children}
  </Title>
)

export const H3 = ({ children, ...props }: PropsWithChildren<typeof Title>) => (
  <Title level={3} {...props}>
    {children}
  </Title>
)

export const H4 = ({ children, ...props }: PropsWithChildren<typeof Title>) => (
  <Title level={4} {...props}>
    {children}
  </Title>
)

export const Body1 = styled(Text)`
  font-size: 14px;
  line-height: 22px;
  color: #000;
`

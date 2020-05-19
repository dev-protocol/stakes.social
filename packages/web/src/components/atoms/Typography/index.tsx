import React from 'react'
import { Typography } from 'antd'
import styled from 'styled-components'

const { Title, Text } = Typography

export const H1: React.FC = ({ children }) => (
  <Title level={1} style={{ color: '#2F80ED' }}>
    {children}
  </Title>
)
export const H2: React.FC = ({ children }) => <Title level={2}>{children}</Title>

export const H3: React.FC = ({ children }) => <Title level={3}>{children}</Title>

export const H4: React.FC = ({ children }) => <Title level={4}>{children}</Title>

export const Body1 = styled(Text)`
  font-size: 14px;
  line-height: 22px;
  color: #000;
`

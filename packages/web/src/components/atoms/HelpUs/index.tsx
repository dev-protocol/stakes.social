import React from 'react'
import styled, { keyframes } from 'styled-components'
import { Tooltip, Button } from 'antd'
import Icon, { QuestionOutlined } from '@ant-design/icons'

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-5px);
`

const IconComponent = () => (
  <IconContainer>
    <QuestionOutlined />
  </IconContainer>
)

const QuestionIcon = () => <Icon component={IconComponent} />

const color = keyframes`
  0% {
    color: #f8bbd0;
  }
  100% {
    color: #fff;
  }
`
const Circle = styled(Button)`
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  background: #e91e63;
  border-color: #e91e63;
  box-shadow: 0 3px 12px #e91e6333;
  &,
  &:hover,
  &:focus,
  &:active {
    background: #e91e63;
    border-color: #e91e63;
    color: #f8bbd0;
  }
  &:hover {
    animation: ${color} 0.5s linear infinite alternate;
  }
  @media (min-width: 768px) {
    bottom: 3rem;
    right: 4rem;
  }
`

export const HelpUs = () => (
  <Tooltip placement="top" color="pink" overlayStyle={{ fontSize: '0.8rem' }} title="Do you need help?">
    <Circle
      shape="circle"
      size="large"
      href="https://docs.devprtcl.com"
      target="_blank"
      icon={<QuestionIcon />}
    ></Circle>
  </Tooltip>
)

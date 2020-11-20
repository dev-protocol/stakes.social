import React from 'react'
import styled from 'styled-components'
import { Tooltip, Button } from 'antd'
import Icon, { QuestionOutlined } from '@ant-design/icons'

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* transform: translateY(-1px); */

  svg {
    width: 30px;
    height: 30px;
  }
`

const IconComponent = () => (
  <IconContainer>
    <QuestionOutlined />
  </IconContainer>
)

const QuestionIcon = () => <Icon component={IconComponent} />

const Circle = styled(Button)`
  position: fixed;
  bottom: 1.5rem;
  right: 2rem;
  background: black;
  border-color: black;
  box-shadow: 0 1.5px 3px black;
  &,
  &:hover,
  &:focus,
  &:active {
    background: black;
    border-color: black;
    color: white;
  }
  @media (min-width: 768px) {
    bottom: 3rem;
    right: 4rem;
  }
`

export const HelpUs = () => (
  <Tooltip placement="top" color="black" overlayStyle={{ fontSize: '0.8rem' }} title="Do you need help?">
    <Circle
      shape="circle"
      size="large"
      href="https://docs.devprtcl.com"
      target="_blank"
      icon={<QuestionIcon />}
    ></Circle>
  </Tooltip>
)

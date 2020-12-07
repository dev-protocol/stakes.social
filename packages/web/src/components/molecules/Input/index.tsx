import React from 'react'
import { Form } from 'antd'
import styled from 'styled-components'

export const InputContainer = styled(Form.Item)`
  position: relative;
  width: 100%;
  margin: 0;
`

export const InputIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 18px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  svg {
    height: 18px;
    width: 24px;
  }
`

export const EmptyInputIcon = styled(InputIcon)`
  right: 0;
`

export const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  border: 0;
  background: transparent;
  outline: none;
  border: 1px solid lightgrey;
  transition: all 0.2s ease-in;
  padding-right: 2.5rem;

  ${InputIcon} + & {
    padding-left: 2.5rem;
  }

  &:hover {
    transition: all 0.2s ease-in;
    border: 1px solid grey;
  }

  &:focus {
    transition: all 0.2s ease-in;
    border: 1px solid black;
    box-shadow: 0 0 0 1px grey;
  }
`

type CustomInputProps = {
  label: string
  Icon?: any
  placeholder?: string
  defaultValue?: number | string
}

const CustomInput = ({ Icon, placeholder, label }: CustomInputProps) => {
  return (
    <InputContainer>
      <InputIcon>{Icon && <Icon style={{ color: 'grey' }} />}</InputIcon>
      <Form.Item name={label} noStyle>
        <Input placeholder={placeholder || ''} />
      </Form.Item>
    </InputContainer>
  )
}

export default CustomInput

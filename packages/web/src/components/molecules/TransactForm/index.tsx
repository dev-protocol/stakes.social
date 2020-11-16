import React from 'react'
import { Card, Input } from 'antd'
import styled from 'styled-components'
import { Max } from 'src/components/molecules/Max'
import { SearchProps } from 'antd/lib/input'

type Props = SearchProps &
  React.RefAttributes<Input> & {
    onClickMax: () => void
    estimateTitle: string
    estimatedValue: string | React.ReactNode
  }

const StyledForm = styled(Input.Search)`
  width: inherit;
  bottom: 0;
  .ant-input-wrapper {
    display: grid;
    grid-template-columns: 1fr auto;
  }
  .ant-input-group-addon,
  .ant-btn {
    width: 100%;
  }
  .ant-input-search,
  .ant-btn {
    border: 3px solid #2f80ed;
  }
  .ant-input-search {
    border-right: 0;
  }
  .ant-input-group-addon {
    .ant-btn {
      border-left: 0;
      height: 100%;
      font-size: 1.2rem;
    }
  }
  input {
    font-size: 1.6rem;
  }
`

const FormContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  label {
    font-size: 1.2rem;
  }
`

const Estimated = styled(Card)`
  border-color: #00000055;
  background: transparent;
  .ant-card-head {
    padding: 0 1.5rem;
  }
  .ant-card-head-title {
    font-size: 0.5rem 0;
  }
  .ant-card-body {
    font-size: 1.4rem;
    padding: 1rem 1.5rem;
  }
  p {
    margin: 0;
  }
`

export const TransactForm = ({
  className,
  title,
  enterButton,
  value,
  onChange,
  onSearch,
  suffix,
  onClickMax,
  id,
  estimateTitle,
  estimatedValue
}: Props) => {
  return (
    <FormContainer className={className}>
      {title ? <label htmlFor={id}>{title}</label> : undefined}
      <StyledForm
        id={id}
        enterButton={enterButton}
        size="large"
        value={value}
        onChange={onChange}
        onSearch={onSearch}
        suffix={
          <>
            {suffix}
            <Max onClick={onClickMax} />
          </>
        }
        type="number"
      />
      <Estimated title={estimateTitle}>{estimatedValue}</Estimated>
    </FormContainer>
  )
}

import React from 'react'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { Input, Alert } from 'antd'
import styled from 'styled-components'

interface Props {
  className?: string
  propertyAddress: string
}

const StyledForm = styled(Input.Search)`
  width: inherit;
  .ant-input-wrapper {
    display: grid;
    grid-auto-flow: column;
  }
  .ant-input-search,
  .ant-btn {
    border: 3px solid #2f80ed;
  }
  .ant-input-search {
    border-right: 0;
  }
  .ant-btn {
    border-left: 0;
    height: 100%;
  }
`

export const StakeForm = ({ className, propertyAddress }: Props) => {
  const { stake } = useStake()
  const handleSubmit = React.useCallback(
    (amount: string) => {
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress]
  )

  return (
    <div className={className}>
      <p>Stake Now</p>
      <Alert
        message="Sorry, we are temporarily stopping new staking at the moment for a patch. This should take a few hours to complete."
        type="error"
      ></Alert>
      <StyledForm disabled enterButton="Stake" size="large" onSearch={handleSubmit} suffix="DEV" type="number" />
    </div>
  )
}

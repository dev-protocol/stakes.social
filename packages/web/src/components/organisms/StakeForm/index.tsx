import React from 'react'
import { useStake } from 'src/fixtures/dev-kit/hooks'
import { Input } from 'antd'
import { TransactionForm } from 'src/components/organisms/TransactionForm'
import styled from 'styled-components'

interface Props {
  className?: string
  propertyAddress: string
}

const StyledForm = styled(Input.Search)`
  width: inherit;
  bottom: 0;
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

const StakeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
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
    <StakeContainer className={className}>
      <div>
        <p>Stake Now</p>
        <StyledForm enterButton="Stake" size="large" onSearch={handleSubmit} suffix="DEV" type="number" />
      </div>
      <TransactionForm propertyAddress={propertyAddress} />
    </StakeContainer>
  )
}

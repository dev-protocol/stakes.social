import React, { useCallback, useState, Dispatch, SetStateAction, ChangeEvent } from 'react'
import { balanceOf, getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useStake, useWithdrawStakingReward } from 'src/fixtures/dev-kit/hooks'
import { Input } from 'antd'
import styled from 'styled-components'
import { Max } from 'src/components/molecules/Max'
import { toNaturalNumber } from 'src/fixtures/utility'

interface Props {
  className?: string
  propertyAddress: string
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

const StakeContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
  }
`

const FormContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  label {
    font-size: 1.2rem;
  }
`

const createSuffix = ({ onClick }: { onClick: () => void }) => (
  <>
    <span>DEV</span>
    <Max onClick={onClick} />
  </>
)

const handleOnChange = (setter: Dispatch<SetStateAction<string>>) => (event: ChangeEvent<HTMLInputElement>) => {
  setter(event.target.value)
}

const handleClickMax = (
  setter: Dispatch<SetStateAction<string>>,
  fetcher: () => Promise<string | number | undefined>
) => async () => {
  setter(await fetcher().then(x => toNaturalNumber(x ?? 0).toFixed()))
}

export const StakeForm = ({ className, propertyAddress }: Props) => {
  const [stakeAmount, setStakeAmount] = useState<string>('')
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const { stake } = useStake()
  const { withdrawStakingReward } = useWithdrawStakingReward()
  const stakeFor = useCallback(
    (amount: string) => {
      stake(propertyAddress, amount)
    },
    [stake, propertyAddress]
  )
  const withdrawFor = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (amount: string) => {
      // TODO: Supports partial withdrawal once the protocol core is updated
      withdrawStakingReward(propertyAddress)
    },
    [withdrawStakingReward, propertyAddress]
  )

  return (
    <StakeContainer className={className}>
      <FormContainer>
        <label htmlFor="stake">Stake</label>
        <StyledForm
          id="stake"
          enterButton="Stake"
          size="large"
          value={stakeAmount}
          onChange={handleOnChange(setStakeAmount)}
          onSearch={stakeFor}
          suffix={createSuffix({ onClick: handleClickMax(setStakeAmount, () => balanceOf()) })}
          type="number"
        />
      </FormContainer>
      <FormContainer>
        <label htmlFor="withdraw">Withdraw</label>
        <StyledForm
          id="withdraw"
          enterButton="Withdraw"
          size="large"
          value={withdrawAmount}
          onChange={handleOnChange(setWithdrawAmount)}
          onSearch={withdrawFor}
          suffix={createSuffix({
            onClick: handleClickMax(setWithdrawAmount, () => getMyStakingAmount(propertyAddress))
          })}
          type="number"
        />
      </FormContainer>
    </StakeContainer>
  )
}

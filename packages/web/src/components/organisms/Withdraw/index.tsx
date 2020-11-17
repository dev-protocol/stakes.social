import React, { useCallback, useState, useMemo, useEffect, ChangeEvent } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useWithdrawStaking, useGetMyStakingAmount, useGetMyStakingRewardAmount } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toBigNumber, toNaturalNumber, whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'
import styled from 'styled-components'
import { Switch } from 'antd'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/TransactForm/Estimated'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  gap: 0.5rem;
  justify-content: stretch;
  align-items: center;
  grid-template-columns: auto 1fr;
`

export const Withdraw = ({ className, title, propertyAddress }: Props) => {
  const [withdrawBoth, setWithdrawBoth] = useState<boolean>(false)
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const [claimedTokens, setClaimedTokens] = useState<string | undefined>()
  const [interestTokens, setInterestTokens] = useState<string | undefined>()
  const [withdrawableTokens, setWithdrawableTokens] = useState<string>('')
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { web3, accountAddress } = useProvider()
  const { withdrawStaking } = useWithdrawStaking()
  const withdrawFor = useCallback(
    (amount: string) => {
      withdrawStaking(propertyAddress, toAmountNumber(amount))
    },
    [withdrawStaking, propertyAddress]
  )
  const onChangeSwitch = (checked: boolean) => {
    setWithdrawBoth(checked)
    setWithdrawAmount('')
  }
  const onClickMax = () =>
    whenDefinedAll([web3, accountAddress], ([libWeb3, account]) =>
      getMyStakingAmount(libWeb3, propertyAddress, account)
        .then(async x => toNaturalNumber(x))
        .then(x => setWithdrawAmount(x.toFixed()))
    )
  const onChange = useMemo(
    () =>
      withdrawBoth
        ? (event: ChangeEvent<HTMLInputElement>) => {
            setWithdrawAmount(event.target.value)
          }
        : undefined,
    [withdrawBoth, setWithdrawAmount]
  )
  const suffix = useMemo(() => (Number(withdrawAmount) ? 'DEV' : ''), [withdrawAmount])
  const estimatedTitle = useMemo(() => (withdrawBoth ? 'Staked and Reward Amount' : 'Withdrawable Reward Amount'), [
    withdrawBoth
  ])
  const estimatedValue = useMemo(
    () =>
      withdrawBoth ? (
        <p>
          {withdrawableTokens || 0} DEV{' '}
          {claimedTokens && interestTokens ? `(${claimedTokens} + ${interestTokens})` : ''}
        </p>
      ) : (
        <p>{withdrawableTokens || 0} DEV</p>
      ),
    [withdrawBoth, withdrawableTokens, claimedTokens, interestTokens]
  )

  useEffect(() => {
    const reward = myStakingRewardAmount
    const staking = whenDefined(myStakingAmount, x =>
      x.isGreaterThan(withdrawAmount || 0) ? toBigNumber(withdrawAmount) : x
    )
    setClaimedTokens(whenDefined(staking, x => x.dp(2).toFixed()))
    setInterestTokens(whenDefined(reward, x => x.dp(2).toFixed()))
    setWithdrawableTokens(staking && reward ? staking.plus(reward).dp(2).toFixed() : '0')
  }, [myStakingRewardAmount, myStakingAmount, withdrawAmount, setClaimedTokens])

  return (
    <FormContainer>
      <Wrap>
        <Switch unCheckedChildren="Stake" onChange={onChangeSwitch} />
        <TransactForm
          className={className}
          title={title}
          id="withdraw"
          enterButton="Withdraw"
          value={withdrawAmount}
          onChange={onChange}
          onSearch={withdrawFor}
          suffix={suffix}
          onClickMax={onClickMax}
        ></TransactForm>
      </Wrap>
      <Estimated title={estimatedTitle}>{estimatedValue}</Estimated>
    </FormContainer>
  )
}

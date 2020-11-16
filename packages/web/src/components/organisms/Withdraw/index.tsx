import React, { useCallback, useState, useEffect, ChangeEvent } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { getMyStakingAmount } from 'src/fixtures/dev-kit/client'
import { useWithdrawStaking, useGetMyStakingAmount, useGetMyStakingRewardAmount } from 'src/fixtures/dev-kit/hooks'
import { toAmountNumber, toBigNumber, toNaturalNumber, whenDefined } from 'src/fixtures/utility'
import { TransactForm } from 'src/components/molecules/TransactForm'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

export const Withdraw = ({ className, title, propertyAddress }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const [claimedTokens, setClaimedTokens] = useState<string | undefined>()
  const [interestTokens, setInterestTokens] = useState<string | undefined>()
  const [withdrawableTokens, setWithdrawableTokens] = useState<string>('')
  const { myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { web3 } = useProvider()
  const { withdrawStaking } = useWithdrawStaking()
  const withdrawFor = useCallback(
    (amount: string) => {
      withdrawStaking(propertyAddress, toAmountNumber(amount))
    },
    [withdrawStaking, propertyAddress]
  )
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setWithdrawAmount(event.target.value)
  }
  const onClickMax = () =>
    whenDefined(web3, libWeb3 =>
      getMyStakingAmount(libWeb3, propertyAddress)
        .then(async x => toNaturalNumber(x))
        .then(x => setWithdrawAmount(x.toFixed()))
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
    <TransactForm
      className={className}
      title={title}
      id="withdraw"
      enterButton="Withdraw"
      value={withdrawAmount}
      onChange={onChange}
      onSearch={withdrawFor}
      suffix="DEV"
      onClickMax={onClickMax}
      estimateTitle="Withdrawable Amount"
      estimatedValue={
        <p>
          {withdrawableTokens || 0} DEV{' '}
          {claimedTokens && interestTokens ? `(${claimedTokens} + ${interestTokens})` : ''}
        </p>
      }
    ></TransactForm>
  )
}

import React, { useEffect, useState, useMemo } from 'react'
import styled from 'styled-components'
import {
  useGetMyStakingAmount,
  useGetMyStakingRewardAmount,
  useGetEstimateGas4WithdrawStakingAmount
} from 'src/fixtures/dev-kit/hooks'
import { toBigNumber, whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import { useGetEthPrice } from 'src/fixtures/uniswap/hooks'
import { FormContainer } from 'src/components/molecules/TransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/TransactForm/Estimated'
import { EstimatedGas } from 'src/components/molecules/TransactForm/EstimatedGas'
import { Withdraw } from '.'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

const EstimateGasUSD = styled.span`
  font-size: 0.9em;
  color: #a0a0a0;
`

export const WithdrawWithEstimate = ({ className, title, propertyAddress }: Props) => {
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const [claimedTokens, setClaimedTokens] = useState<string | undefined>()
  const [interestTokens, setInterestTokens] = useState<string | undefined>()
  const [withdrawableTokens, setWithdrawableTokens] = useState<string>('')
  const { dev: myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)
  const { estimateGas } = useGetEstimateGas4WithdrawStakingAmount(propertyAddress, withdrawAmount)
  const { data: ethPrice } = useGetEthPrice()
  const estimateGasUSD = useMemo(() => whenDefinedAll([estimateGas, ethPrice], ([gas, eth]) => gas.multipliedBy(eth)), [
    estimateGas,
    ethPrice
  ])

  const estimatedValue = useMemo(
    () => (
      <p>
        {withdrawableTokens || 0} DEV {claimedTokens && interestTokens ? `(${claimedTokens} + ${interestTokens})` : ''}
      </p>
    ),
    [withdrawableTokens, claimedTokens, interestTokens]
  )

  const onChange = (value: string) => {
    setWithdrawAmount(value)
  }

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
    <FormContainer className={className}>
      <Withdraw propertyAddress={propertyAddress} title={title} onChange={onChange} />
      <Estimated title="Staked and Reward Amount">{estimatedValue}</Estimated>
      <EstimatedGas title="Gas Fee (this is prediction value)" size="small">
        {
          <p>
            {estimateGas ? estimateGas?.toFixed(6) : '-'} ETH
            <EstimateGasUSD>{estimateGasUSD ? ` $${estimateGasUSD.toFixed(2)}` : ''}</EstimateGasUSD>
          </p>
        }
      </EstimatedGas>
    </FormContainer>
  )
}

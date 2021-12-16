import React, { useEffect, useState, useMemo } from 'react'
import { useProvider } from 'src/fixtures/wallet/hooks'
import { useGetMyStakingAmount, useGetMyStakingRewardAmount } from 'src/fixtures/dev-kit/hooks'
import { getStokenPositions, getStokenRewards } from 'src/fixtures/dev-kit/client'
import { toBigNumber, toNaturalNumber, whenDefined, whenDefinedAll } from 'src/fixtures/utility'
import { FormContainer } from 'src/components/molecules/WithdrawTransactForm/FormContainer'
import { Estimated } from 'src/components/molecules/WithdrawTransactForm/Estimated'
import { Withdraw } from '.'

interface Props {
  className?: string
  title?: string
  propertyAddress: string
}

export const WithdrawWithEstimate = ({ className, title, propertyAddress }: Props) => {
  const { ethersProvider } = useProvider()
  const [withdrawAmount, setWithdrawAmount] = useState<string>('')
  const [claimedTokens, setClaimedTokens] = useState<string | undefined>()
  const [interestTokens, setInterestTokens] = useState<string | undefined>()
  const [withdrawableTokens, setWithdrawableTokens] = useState<string>('')
  const [selectedSTokenId, setSelectedSTokenId] = useState<number | undefined>()
  const { dev: myStakingRewardAmount } = useGetMyStakingRewardAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  const estimatedValue = useMemo(
    () => (
      <p>
        {withdrawableTokens || 0} DEV{' '}
        {claimedTokens && interestTokens
          ? `(${claimedTokens} + ${interestTokens})`
          : !claimedTokens && interestTokens
          ? `(0 + ${interestTokens})`
          : ''}
      </p>
    ),
    [withdrawableTokens, claimedTokens, interestTokens]
  )

  const onChange = (value: string, sTokenId?: number) => {
    setWithdrawAmount(value)
    setSelectedSTokenId(sTokenId)
  }

  useEffect(() => {
    // for not sTokens
    const reward = myStakingRewardAmount
    const staking = whenDefined(myStakingAmount, x =>
      x.isGreaterThan(withdrawAmount || 0) ? toBigNumber(withdrawAmount) : x
    )
    !selectedSTokenId && setClaimedTokens(whenDefined(staking, x => x.dp(2).toFixed()))
    !selectedSTokenId && setInterestTokens(whenDefined(reward, x => x.dp(2).toFixed()))
    !selectedSTokenId && setWithdrawableTokens(staking && reward ? staking.plus(reward).dp(2).toFixed() : '0')

    // for sTokens
    whenDefinedAll([ethersProvider, selectedSTokenId], async ([prov, x]) => {
      await getStokenRewards(prov, x).then(rewards => {
        setInterestTokens(
          toNaturalNumber(rewards?.entireReward || '0')
            .dp(2)
            .toFixed()
        )
      })
    })
    whenDefinedAll([ethersProvider, selectedSTokenId], async ([prov, x]) => {
      await getStokenPositions(prov, x).then(positions => {
        const amount = toNaturalNumber(positions?.amount)
        setClaimedTokens(
          (amount.isGreaterThan(withdrawAmount || 0) ? toBigNumber(withdrawAmount) : amount).dp(2).toFixed()
        )
      })
    })
    selectedSTokenId &&
      setWithdrawableTokens(toBigNumber(interestTokens).plus(toBigNumber(claimedTokens)).dp(2).toFixed())
  }, [myStakingRewardAmount, myStakingAmount, withdrawAmount, claimedTokens, interestTokens, selectedSTokenId])

  return (
    <FormContainer className={className}>
      <Withdraw propertyAddress={propertyAddress} title={title} onChange={onChange} />
      <Estimated title="Staked and Reward Amount">{estimatedValue}</Estimated>
    </FormContainer>
  )
}

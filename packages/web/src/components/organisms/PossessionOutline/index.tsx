import React from 'react'
import { useGetTotalStakingAmount, useGetMyStakingAmount, useGetTotalRewardsAmount } from 'src/fixtures/dev-kit/hooks'
import { useTranslation, COMMON_NAMESPACE, commonTranslationKeys } from '@dev/i18n'
import styled from 'styled-components'

interface Props {
  className?: string
  propertyAddress: string
}

const Wrap = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  @media (min-width: 1120px) {
    grid-auto-flow: column;
    grid-template-columns: auto;
  }
`
const Flex = styled.div`
  display: flex;
  flex-direction: column;
`

export const PossessionOutline = ({ className, propertyAddress }: Props) => {
  const { t } = useTranslation(COMMON_NAMESPACE)
  const { totalStakingAmount } = useGetTotalStakingAmount(propertyAddress)
  const { totalRewardsAmount } = useGetTotalRewardsAmount(propertyAddress)
  const { myStakingAmount } = useGetMyStakingAmount(propertyAddress)

  return (
    <Wrap className={className}>
      <Flex>
        <h3>Total Staking Amount</h3>
        <h3>{totalStakingAmount ? totalStakingAmount.dp(5).toNumber() : 'N/A'} DEV</h3>
      </Flex>
      <Flex>
        <h3>Your Staking Amount</h3>
        <h3>{myStakingAmount ? myStakingAmount.dp(5).toNumber() : 'N/A'} DEV</h3>
      </Flex>
      <Flex>
        <h3>Your Staking Share</h3>
        <h3>
          {myStakingAmount &&
            totalStakingAmount &&
            (myStakingAmount.dp(5).toNumber() / totalStakingAmount.dp(5).toNumber()) * 100}
          %
        </h3>
      </Flex>
      <Flex>
        <h3>{t(commonTranslationKeys.totalRewards)}</h3>
        <h3>{totalRewardsAmount && totalRewardsAmount.dp(5).toNumber()} DEV</h3>
      </Flex>
    </Wrap>
  )
}

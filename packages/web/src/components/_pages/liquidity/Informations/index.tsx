import React from 'react'
import { Card, Statistic } from 'antd'
import styled from 'styled-components'
import {
  useAPY,
  useFinalUnlockSchedules,
  useRewardMultiplier,
  useTotalStakedFor,
  useUnstakeQuery
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import { ONE_MONTH_SECONDS } from 'src/fixtures/_pages/liquidity/constants/number'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'apm multiplier'
    'rewards rewards';
  justify-content: stretch;
  @media (min-width: 768px) {
    grid-template-areas: 'apm multiplier rewards';
  }
`

const BaseCard = styled(Card)`
  background: transparent;
  border-color: #ccc;
`

const Apm = styled(BaseCard)`
  grid-area: apm;
`
const Multiplier = styled(BaseCard)`
  grid-area: multiplier;
`
const Rewards = styled(BaseCard)`
  grid-area: rewards;
`

const Caption = styled.div`
  margin-bottom: 0.625rem;
`

export const Informations = () => {
  const { data: apy } = useAPY()
  // Todo add V2 Address
  const { data: rewardMultiplier, max } = useRewardMultiplier()
  const { data: totalStakedFor } = useTotalStakedFor()
  const { data: unstakeQuery } = useUnstakeQuery(totalStakedFor)
  // Todo add V2 Address
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const apm = finalUnlockSchedules ? apy.div(finalUnlockSchedules.durationSec).times(ONE_MONTH_SECONDS) : undefined
  const accruedRewards =
    totalStakedFor && unstakeQuery ? (totalStakedFor.isZero() ? toBigNumber(0) : unstakeQuery) : toBigNumber(0)

  return (
    <>
      <Caption>Information</Caption>
      <Wrapper>
        <Apm>
          <Statistic title="Monthly Yield" value={apm ? apm.dp(2).toNumber() : '...'} suffix="%" />
        </Apm>
        <Multiplier>
          <Statistic
            title="Reward Multiplier"
            value={rewardMultiplier ? rewardMultiplier : 0}
            suffix={`X / ${max < Infinity ? max : '-'}X`}
            precision={1}
          ></Statistic>
        </Multiplier>
        <Rewards>
          <Statistic
            title="Accrued Rewards"
            value={toNaturalNumber(accruedRewards).dp(2).toFixed()}
            suffix="DEV"
            precision={2}
          />
        </Rewards>
      </Wrapper>
    </>
  )
}

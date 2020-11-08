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

export const Informations = () => {
  const { data: apy } = useAPY()
  const { data: rewardMultiplier, max } = useRewardMultiplier()
  const { data: totalStakedFor } = useTotalStakedFor()
  const { data: accruedRewards } = useUnstakeQuery(totalStakedFor)
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const apm = finalUnlockSchedules ? apy.div(finalUnlockSchedules.durationSec).times(ONE_MONTH_SECONDS) : toBigNumber(0)

  return (
    <Wrapper>
      <Apm>
        <Statistic title="APM" value={apm.dp(5).toNumber()} suffix="%" />
      </Apm>
      <Multiplier>
        <Statistic
          title="Reward Multiplier"
          value={rewardMultiplier ? rewardMultiplier : '(not staked)'}
          suffix={rewardMultiplier ? `X / ${max}X` : undefined}
          precision={1}
        ></Statistic>
      </Multiplier>
      <Rewards>
        <Statistic
          title="Accrued Rewards"
          value={accruedRewards ? toNaturalNumber(accruedRewards).toNumber() : 0}
          suffix="DEV"
          precision={2}
        />
      </Rewards>
    </Wrapper>
  )
}

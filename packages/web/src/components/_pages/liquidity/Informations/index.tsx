import React from 'react'
import { Card, Statistic } from 'antd'
import styled from 'styled-components'
import {
  useAPY,
  useRewardMultiplier,
  useTotalStakedFor,
  useUnstakeQuery
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-areas:
    'apy multiplier'
    'rewards rewards';
  justify-content: stretch;
  @media (min-width: 768px) {
    grid-template-areas: 'apy multiplier rewards';
  }
`

const BaseCard = styled(Card)`
  background: transparent;
  border-color: #ccc;
`

const Apy = styled(BaseCard)`
  grid-area: apy;
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

  return (
    <Wrapper>
      <Apy>
        <Statistic title="APY" value={apy.dp(5).toNumber()} suffix="%" />
      </Apy>
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

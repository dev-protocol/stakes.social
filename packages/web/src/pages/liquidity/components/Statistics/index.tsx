import React from 'react'
import { Statistic } from 'antd'
import styled from 'styled-components'
import { useFinalUnlockSchedules, useTotalRewards } from '../../fixtures/geyser/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  @media (min-width: 768px) {
    grid-gap: 4rem;
    justify-content: center;
    grid-auto-flow: column;
  }
`

export const Statistics = () => {
  const { Countdown } = Statistic
  const { data } = useTotalRewards()
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const endofTheProgram = finalUnlockSchedules ? Number(finalUnlockSchedules.endAtSec) * 1000 : 0

  return (
    <Wrapper>
      <Countdown title="Program duration" value={endofTheProgram} format="D day([s]) HH:mm:ss left"></Countdown>
      <Statistic title="Total deposits (USD)" value={112893} precision={2} />
      <Statistic title="Total rewards (DEV)" value={toNaturalNumber(data).toNumber()} precision={2} />
    </Wrapper>
  )
}

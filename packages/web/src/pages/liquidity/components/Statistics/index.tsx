import React from 'react'
import { Statistic } from 'antd'
import styled from 'styled-components'
import { useFinalUnlockSchedules, useTotalRewards, useTotalStaked } from '../../fixtures/geyser/hooks'
import { toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import { useTheGraph } from '../../fixtures/uniswap-pool/hooks'

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
  const { data: totalRewards } = useTotalRewards()
  const { data: totalStaked } = useTotalStaked()
  const { data: theGraph } = useTheGraph(totalStaked?.toString())
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const endofTheProgram = finalUnlockSchedules ? Number(finalUnlockSchedules.endAtSec) * 1000 : 0
  const totalDepositsUSD =
    totalStaked && theGraph && theGraph.data.pair
      ? toNaturalNumber(totalStaked).div(theGraph.data.pair.totalSupply).times(theGraph.data.pair.reserveUSD)
      : toBigNumber(0)

  return (
    <Wrapper>
      <Countdown title="Program duration" value={endofTheProgram} format="D day([s]) HH:mm:ss left"></Countdown>
      <Statistic title="Total deposits (USD)" value={totalDepositsUSD.toString()} precision={2} />
      <Statistic title="Total rewards (DEV)" value={toNaturalNumber(totalRewards).toNumber()} precision={2} />
    </Wrapper>
  )
}

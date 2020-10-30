import React from 'react'
import { Statistic } from 'antd'
import styled from 'styled-components'
import {
  useFinalUnlockSchedules,
  useTotalRewards,
  useTotalStaked,
  useUpdateAccounting
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import { useTheGraph } from '../../../../fixtures/_pages/liquidity/uniswap-pool/hooks'
import { format } from 'date-fns'
import { ONE_MONTH_SECONDS } from 'src/fixtures/_pages/liquidity/constants/number'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`

export const Stats = () => {
  const { data: totalRewards } = useTotalRewards()
  const { data: totalStaked } = useTotalStaked()
  const { data: accounting } = useUpdateAccounting()
  const { data: theGraph } = useTheGraph(totalStaked?.toString())
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules()
  const totalDepositsUSD =
    totalStaked && theGraph && theGraph.data.pair
      ? toNaturalNumber(totalStaked).div(theGraph.data.pair.totalSupply).times(theGraph.data.pair.reserveUSD)
      : toBigNumber(0)
  const apy =
    totalStaked && theGraph && theGraph.data.pair && totalRewards && finalUnlockSchedules
      ? totalRewards
          .div(toNaturalNumber(totalStaked).div(theGraph.data.pair.totalSupply).times(theGraph.data.pair.reserve0))
          .div(finalUnlockSchedules.durationSec)
          .times(ONE_MONTH_SECONDS)
      : toBigNumber(0)

  console.log('totalRewards', totalRewards.toFixed())

  return (
    <Wrapper>
      <Statistic title="APY(monthly)" value={apy.dp(5).toNumber()} suffix="%" />
      <Statistic title="Total deposits" value={totalDepositsUSD.toString()} suffix="USD" precision={2} />
      <Statistic title="Total rewards" value={toNaturalNumber(totalRewards).toNumber()} suffix="DEV" precision={2} />
      <Statistic
        title="Locked rewards"
        value={accounting ? toNaturalNumber(accounting.totalLocked).dp(5).toNumber() : 0}
        suffix="DEV"
      />
      <Statistic
        title="Unocked rewards"
        value={accounting ? toNaturalNumber(accounting.totalUnlocked).dp(5).toFixed() : 0}
        suffix="DEV"
      />
      <Statistic
        title="End of the Program"
        value={finalUnlockSchedules ? format(Number(finalUnlockSchedules.endAtSec) * 1000, 'M/d/Y') : ''}
      />
    </Wrapper>
  )
}

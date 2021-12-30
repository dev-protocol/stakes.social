import React from 'react'
import { Statistic } from 'antd'
import styled from 'styled-components'
import {
  useFinalUnlockSchedules,
  useTotalRewards,
  useTotalStaked,
  useUpdateAccounting
} from '../../../../fixtures/_pages/liquidity/geyser/hooks'
import { format } from 'date-fns'
import { toBigNumber, toNaturalNumber } from 'src/fixtures/utility'
import { useTheGraph } from '../../../../fixtures/_pages/liquidity/uniswap-pool/hooks'
import { ONE_MONTH_SECONDS } from 'src/fixtures/_pages/liquidity/constants/number'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`

export const Stats = ({ geyserAddress }: { geyserAddress: string }) => {
  const { data: totalRewards } = useTotalRewards(geyserAddress)
  const { data: totalStaked } = useTotalStaked(geyserAddress)
  const { data: accounting } = useUpdateAccounting(geyserAddress)
  const { data: theGraph } = useTheGraph(totalStaked?.toString())
  const { data: finalUnlockSchedules } = useFinalUnlockSchedules(geyserAddress)
  const totalDepositsUSD =
    totalStaked && theGraph && theGraph.data.pair
      ? toNaturalNumber(totalStaked).div(theGraph.data.pair.totalSupply).times(theGraph.data.pair.reserveUSD)
      : toBigNumber(0)
  const unlockRate =
    totalRewards && finalUnlockSchedules
      ? totalRewards.div(finalUnlockSchedules.durationSec).times(ONE_MONTH_SECONDS)
      : toBigNumber(0)

  return (
    <Wrapper>
      <Statistic
        title="Total rewards"
        value={totalRewards ? toNaturalNumber(totalRewards).toNumber() : '-'}
        suffix="DEV"
        precision={2}
      />
      <Statistic title="Total deposits" value={totalDepositsUSD.toString()} suffix="USD" precision={2} />
      <Statistic
        title="Locked rewards"
        value={accounting ? toNaturalNumber(accounting.totalLocked).dp(5).toNumber() : 0}
        suffix="DEV"
      />
      <Statistic
        title="Unlocked rewards"
        value={accounting ? toNaturalNumber(accounting.totalUnlocked).dp(5).toFixed() : 0}
        suffix="DEV"
      />
      <Statistic
        title="End of the Program"
        value={finalUnlockSchedules ? format(Number(finalUnlockSchedules.endAtSec) * 1000, 'M/d/Y') : ''}
      />
      <Statistic title="Reward unlock rate" value={toNaturalNumber(unlockRate).toNumber()} suffix="DEV" precision={2} />
    </Wrapper>
  )
}

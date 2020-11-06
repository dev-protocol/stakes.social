import React from 'react'
import { Statistic, Tooltip } from 'antd'
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
import { InfoCircleOutlined } from '@ant-design/icons'

const Wrapper = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
`

const StyledInfoCircleOutlined = styled(InfoCircleOutlined)`
  margin-left: 0.5rem;
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
      ? (() => {
          const max = toNaturalNumber(totalRewards)
          const stakedDev = toNaturalNumber(totalStaked)
            .div(theGraph.data.pair.totalSupply)
            .times(theGraph.data.pair.reserve0)

          return max.div(stakedDev).div(finalUnlockSchedules.durationSec).times(ONE_MONTH_SECONDS).times(100)
        })()
      : toBigNumber(0)

  return (
    <Wrapper>
      <Statistic
        title="APM"
        value={apy.dp(5).toNumber()}
        suffix={
          <>
            %
            <Tooltip title="APM is assumed users have achieved the maximum reward multiplier.">
              <StyledInfoCircleOutlined />
            </Tooltip>
          </>
        }
      />
      <Statistic title="Total deposits" value={totalDepositsUSD.toString()} suffix="USD" precision={2} />
      <Statistic title="Total rewards" value={toNaturalNumber(totalRewards).toNumber()} suffix="DEV" precision={2} />
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
    </Wrapper>
  )
}

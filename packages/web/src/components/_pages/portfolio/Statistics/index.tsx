import React, { HTMLAttributes } from 'react'
import { useAPY, useBalanceOf } from 'src/fixtures/dev-kit/hooks'
import styled from 'styled-components'
import { Statistic } from 'antd'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  grid-gap: 1rem;
`

export const Statistics = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  const { amount, currency } = useBalanceOf()
  const { apy, creators } = useAPY()

  return (
    <Wrap {...props}>
      <Statistic title="Account Value" value={amount ? amount.toNumber() : 'N/A'} suffix={currency} precision={2} />
      <Statistic title="Rewards Earned" value="(devloping)" suffix={currency} precision={2} />
      <Statistic title="Staker APY" value={apy ? apy.toNumber() : 'N/A'} suffix="%" precision={2} />
      <Statistic title="Creator APY" value={creators ? creators.toNumber() : 'N/A'} suffix="%" precision={2} />
    </Wrap>
  )
}

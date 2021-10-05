import React, { useMemo } from 'react'
import { Space } from 'antd'
import { useGetSTokenPositions, useGetStokenRewards } from 'src/fixtures/dev-kit/hooks'
import { toNaturalNumber } from 'src/fixtures/utility'

interface Props {
  sTokenId: number
}

export const PositionText = ({ sTokenId }: Props) => {
  const { positions } = useGetSTokenPositions(sTokenId)
  const { rewards } = useGetStokenRewards(sTokenId)
  const positionAmount = useMemo(() => toNaturalNumber(positions?.amount).toFixed(), [positions?.amount])
  const rewardAmount = useMemo(() => toNaturalNumber(rewards?.entireReward).dp(6).toFixed(), [rewards?.entireReward])
  return (
    <Space size="large">
      <div style={{ marginLeft: '8px', minWidth: '40px' }}>#{sTokenId}</div>
      <div style={{ minWidth: '120px' }}>
        <span>{positionAmount}</span>
        <span style={{ fontSize: '0.6em', marginLeft: '2px' }}>Staked</span>
      </div>
      <div>
        {rewardAmount.toString()}
        <span style={{ fontSize: '0.6em', marginLeft: '2px' }}>Claimable</span>
      </div>
    </Space>
  )
}

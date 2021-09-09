import React from 'react'
import { Space } from 'antd'

interface Props {
  id: string | number
  stakeAmount: number
  claimableAmount: number
}

export const PositionText = ({ id, stakeAmount, claimableAmount }: Props) => {
  return (
    <Space size="large">
      <div style={{ marginLeft: '2px' }}>#{id}</div>
      <div>
        <span>{stakeAmount}</span>
        <span style={{ fontSize: '0.6em', marginLeft: '2px' }}>Staked</span>
      </div>
      <div>
        {claimableAmount}
        <span style={{ fontSize: '0.6em', marginLeft: '2px' }}>Claimable</span>
      </div>
    </Space>
  )
}

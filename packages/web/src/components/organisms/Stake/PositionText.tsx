import React, { useMemo } from 'react'
import { Space } from 'antd'

interface Props {
  tokenId: number
}

export const PositionText = ({ tokenId }: Props) => {
  // TODO(@k3nt0w): use devClient.detectSTokens after implementing it.
  const sTokenId = useMemo(() => tokenId, [tokenId]) // mock value
  // TODO(@k3nt0w): use (devkit).sTokens.positions(TOKEN_ID) after implementing it.
  const stakeAmount = useMemo(() => sTokenId * 1000, [sTokenId]) // mock value
  // TODO(@k3nt0w): use (devkit).sTokens.rewards(TOKEN_ID) after implementing it.
  const claimableAmount = useMemo(() => sTokenId * 15.5, [sTokenId]) // mock value
  return (
    <Space size="large">
      <div style={{ marginLeft: '8px', minWidth: '40px' }}>#{sTokenId}</div>
      <div style={{ minWidth: '120px' }}>
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
